const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const sha256 = require("sha256");
const uniqid = require("uniqid");

const app = express();

const MERCHANT_ID = "PGTESTPAYUAT";
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
// const PHONE_PE_HOST_URL = "https://api.phonepe.com/apis/hermes"
const SALT_INDEX = 1;
// const SALT_KEY = "897e2f96-0c37-4396-848f-f8d98d5c4975";
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"
const APP_BE_URL = "http://localhost:8000";

app.use(cors());

app.get("/", (req, res) => {
  res.send("PhonePe Integration APIs!");
});

app.post("/pay", async function (req, res) {
  try {
    const merchantTransactionId = req.body.transactionId;
    const amountWithGST = req.body.amount * 100;

    const data = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      name: req.body.name,
      amount: amountWithGST,
      redirectURL: `${APP_BE_URL}/payment/validate/${merchantTransactionId}`,
      redirectMode: "POST",
      mobileNumber: req.body.number,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const bufferObj = Buffer.from(JSON.stringify(data), "utf8");
    const base64EncodedPayload = bufferObj.toString("base64");
    const string = base64EncodedPayload + "/pg/v1/pay" + SALT_KEY;
    const sha256_val = sha256(string);
    const xVerifyChecksum = sha256_val + "###" + SALT_INDEX;

    const response = await axios.post(
      `${PHONE_PE_HOST_URL}/pg/v1/pay`,
      {
        request: base64EncodedPayload,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerifyChecksum,
          accept: "application/json",
        },
      }
    );

    console.log("PhonePe Response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error in /pay API:", error);
    res.status(500).send(error.message);
  }
});

app.get("/payment/validate/:merchantTransactionId", async function (req, res) {
  try {
    const { merchantTransactionId } = req.params;
    if (!merchantTransactionId) {
      throw new Error("Merchant transaction ID is required.");
    }

    const statusUrl =
      `${PHONE_PE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/` +
      merchantTransactionId;
    const string =
      `/pg/v1/status/${MERCHANT_ID}/` + merchantTransactionId + SALT_KEY;
    const sha256_val = sha256(string);
    const xVerifyChecksum = sha256_val + "###" + SALT_INDEX;

    const response = await axios.get(statusUrl, {
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": xVerifyChecksum,
        "X-MERCHANT-ID": merchantTransactionId,
        accept: "application/json",
      },
    });

    console.log("Payment Validation Response:", response.data);
    res.send(response.data);
  } catch (error) {
    console.error("Error in /payment/validate API:", error);
    res.status(500).send(error.message);
  }
});

const port = 8000;
app.listen(port, () => {
  console.log(`PhonePe application listening on port ${port}`);
});
