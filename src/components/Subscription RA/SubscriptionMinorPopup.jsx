import React, { useEffect, useState } from "react";
import { close, exclamation } from "../../assets";
import axios from "axios";

const SubscriptionPaymentPopup = ({
  onClose,
  selectedMonthlyPlan,
  planMonthlyPrice,
  expertName,
  chatId,
  subscriptionId,
  userId,
  mobileNumber,
  isCustom,
  durationMonth,
}) => {
  const total = planMonthlyPrice || 0;
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handlePay = async () => {
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }

    const transactionDate = new Date().toISOString();

    const data = {
      totalAmount: total,
      returnUrl: window.location.href,
      transactionId: "T" + Date.now(),
      plan: durationMonth,
      chatId,
      subscriptionId,
      userId,
      mobileNumber,
      transactionDate,
      isCustom,
    };

    console.log("subscription Popup", data);

    try {
      setLoading(true);
      const response = await fetch("https://phonepe.copartner.in/api/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resData = await response.json();

      if (resData.success) {
        window.location.href = resData.data.instrumentResponse.redirectInfo.url;
      } else {
        console.error("Payment initiation failed:", resData);
      }
    } catch (error) {
      console.error("Error in handlePay:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (userId) {
      handlePay();
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white border-[1px] border-gray-300 rounded shadow-md md:w-[400px] w-[90%] relative">
        <div className="border-b-2 py-3 px-10">
          <h2 className="md:text-2xl text-xl font-bold text-black text-left">
            Your Subscription Details
          </h2>
        </div>
        <div className="flex flex-col px-6 py-3">
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-gray-500 font-normal">
              Subscription
            </label>
            <span className="text-sm text-black">{selectedMonthlyPlan || "Monthly"}</span>
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-gray-500 font-normal">
              Name
            </label>
            <span className="text-sm text-black">{expertName}</span>
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-gray-500 font-normal">
              Amount
            </label>
            <span className="text-sm text-black">₹{planMonthlyPrice}</span>
          </div>
          <div className="flex justify-between py-2 mb-4 border-b-[1px] border-t-[1px] border-gray-300">
            <label className="block text-lg text-gray-500 font-semibold">
              Total
            </label>
            <span className="text-lg font-semibold text-black">₹{total.toFixed(2)}</span>
          </div>
          <button
            className={`${
              loading ? "bg-gray-300" : "bg-black"
            } text-white py-3 px-2 rounded-sm hover:bg-gray-800 transition duration-300 md:text-[1rem] text-[12px] font-semibold`}
            onClick={handlePay}
            disabled={loading}
          >
            {loading ? "Paying" : "Pay"}
          </button>
          <div className="justify-start items-center flex py-2 mt-2">
            <span className="flex items-start gap-2 md:text-[12px] text-[10px] text-gray-500">
              <img src={exclamation} className="w-5 h-5" alt="" />
              Transferring any amount or communicating outside of Copartner may
              result in fraudulent experiences and potential loss of your money.
              Please pay or communicate exclusively through our platform.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPaymentPopup;
