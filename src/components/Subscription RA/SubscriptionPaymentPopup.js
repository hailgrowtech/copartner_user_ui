import React, { useEffect, useState } from "react";
import { close, exclamation } from "../../assets";
import axios from "axios";
import KYCPopup from "./KYCPopup";

const SubscriptionPaymentPopup = ({
  onClose,
  selectedMonthlyPlan,
  planMonthlyPrice,
  expertName,
  mobileNumber,
}) => {
  // const gstRate = 0.18;
  const [showKYCPopup, setShowKYCPopup] = useState(false);
  // const total = (planMonthlyPrice || 0) * (1 + gstRate);
  const total = planMonthlyPrice || 0;

  const handleClose = () => {
    onClose();
  };

  const handlePay = async () => {
    // setShowKYCPopup(true)
    const data = {
      name: expertName,
      amount: total,
      number: mobileNumber,
      transactionId: "T" + Date.now(),
    };
    
    console.log(data);

    try {
      const res = await axios.post("http://localhost:8000/pay", data);
      console.log("API Response:", res.data);
      if (res.data.success) {
        window.location.href =
          res.data.data.instrumentResponse.redirectInfo.url;
      } else {
        console.error("Payment initiation failed:", res.data);
        // Handle error appropriately
      }
    } catch (error) {
      console.error("Error in handlePay:", error);
      // Handle error appropriately
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#18181b] border-[1px] border-[#ffffff24] rounded shadow-md md:w-[400px] w-[90%] relative">
        <button className="absolute top-3 right-1" onClick={handleClose}>
          <img src={close} alt="" className="h-8 w-8" />
        </button>
        <div className="border-b-2 py-3 px-10">
          <h2 className="md:text-2xl text-xl font-bold subheading-color text-left">
            Your Subscription Details
          </h2>
        </div>
        <div className="flex flex-col px-6 py-3">
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">
              Subscription
            </label>
            <span className="text-sm">{selectedMonthlyPlan || "Monthly"}</span>
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">
              Name
            </label>
            <span className="text-sm">{expertName}</span>
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">
              Amount
            </label>
            <span className="text-sm">₹{planMonthlyPrice}</span>
          </div>
          <div className="flex justify-between py-2 mb-4 border-b-[1px] border-t-[1px] border-[#c9c9c962]">
            <label className="block text-lg text-[#c9c9c9] font-semibold">
              Total
            </label>
            <span className="text-lg font-semibold">₹{total.toFixed(2)}</span>
          </div>
          <button
            className="bg-[#fff] text-[#000] py-3 px-2 rounded-sm hover:bg-[#000] hover:text-[#fff] transition duration-300 md:text-[1rem] text-[12px] font-semibold"
            onClick={handlePay}
          >
            Pay
          </button>
          <div className="justify-start items-center flex py-2 mt-2">
            <span className="flex items-start gap-2 md:text-[12px] text-[10px]">
              <img src={exclamation} className="w-5 h-5" alt="" />
              Transferring any amount or communicating outside of Copartner may
              result in fraudulent experiences and potential loss of your money.
              Please pay or communicate exclusively through our platform.
            </span>
          </div>
        </div>
      </div>
      {showKYCPopup && <KYCPopup onClose={handleClose} />}{" "}
      {/* Render KYCPopup when showKYCPopup is true */}
    </div>
  );
};

export default SubscriptionPaymentPopup;
