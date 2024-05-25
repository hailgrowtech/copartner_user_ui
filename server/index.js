const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const sha256 = require("sha256");
const uniqid = require("uniqid");
const path = require("path");

const app = express();

const MERCHANT_ID = "PGTESTPAYUAT69";
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const SALT_INDEX = 1;
const SALT_KEY = "f23f3fc9-f7ca-455f-9fb3-8bd124642fdf";
const APP_BE_URL = "http://localhost:8000"; // your application backend URL

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/pay", async function (req, res, next) {
  try {
    const merchantTransactionId = req.body.transactionId || uniqid();
    const data = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      name: req.body.name,
      amount: req.body.amount * 100, // Convert amount to paisa
      redirectURL: `${APP_BE_URL}/payment/success/${merchantTransactionId}`,
      redirectMode: "REDIRECT",
      mobileNumber: req.body.number,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
      callBackUrl: `${APP_BE_URL}/payment/callback/${merchantTransactionId}`
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

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/payment/callback/:merchantTransactionId", async function (req, res) {
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
        accept: "application/json",
      },
    });

    const paymentStatus = response.data.data;
    res.redirect(`/callback?status=${paymentStatus}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/payment/success/:merchantTransactionId", (req, res) => {
  res.redirect("/success");
});

// Serve the React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 8000;
app.listen(port, () => {
  console.log(`PhonePe application listening on port ${port}`);
});
