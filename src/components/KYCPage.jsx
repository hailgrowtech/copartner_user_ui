import React, { useEffect, useState } from "react";
import { useUserSession } from "../constants/userContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FiCopy, FiLock } from "react-icons/fi";
import styles from "../style";
import { Tooltip } from "react-tooltip";
import MobileNumberPopup from "./MinorSubscription/MobileNumberPopup";

const KYCPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    pan: "",
    address: "",
    state: "",
  });
  const [error, setError] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [mobileNum, setMobileNum] = useState("");
  const { userData, loading } = useUserSession();
  const telegramLink = sessionStorage.getItem("inviteLink");

  const otpDone = localStorage.getItem("otp");
  const mobile = userData?.mobileNumber;

  useEffect(() => {
    if (userData) {
      setFormValues({
        name: userData.name || "",
        email: userData.email || "",
        pan: userData.pan || "",
        address: userData.address || "",
        state: userData.state || "",
      });
      setMobileNum(userData.mobileNumber);
    }
  }, [userData]);

  useEffect(() => {
    if (!loading && userData) {
      const paymentSuccess = checkPaymentStatus();
      if (paymentSuccess) {
        clearURLParams();
      }
    }
  }, [loading, userData]);

  const fetchSubscriptionDetail = async (subscriptionId) => {
    if (subscriptionId) {
      try {
        const response = await fetch(
          `https://copartners.in:5009/api/Subscription/${subscriptionId}`
        );
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  };

  const sendSMS = async (mobileNumber, inviteLink) => {
    try {
      const inviteCode = encodeURIComponent(
        inviteLink.split("https://t.me/")[1]
      );

      if (!inviteCode) {
        throw new Error("Invalid invite link format");
      }

      const response = await fetch(
        `https://www.fast2sms.com/dev/bulkV2?authorization=1UGuIy5W4D3vA2wZfB90ibrcsOCeYS7nptj8EVhLodKJqxXNMHLIermYdE6vHzpBRaXOl274SfAbsw5Z&route=dlt&sender_id=COPTNR&message=169464&variables_values=${inviteCode}&flash=0&numbers=${mobileNumber}`
      );
      if (response.ok) {
        console.log(
          `SMS sent to mobile ${mobileNumber} with invite link ${inviteCode}`
        );
      } else {
        console.log(response.error);
      }
    } catch (error) {
      throw new Error(`Failed to send SMS: ${error.message}`);
    }
  };

  const sendPaidTelegramLinkMessage = async (phoneNumber, link) => {
    const url = "https://backend.aisensy.com/campaign/t1/api/v2";
    const data = {
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmM5ZWNiOTNhMmJkMGFlZTVlMGZiMiIsIm5hbWUiOiJIYWlsZ3JvIHRlY2ggc29sdXRpb25zIHB2dC4gbHRkLiIsImFwcE5hbWUiOiJBaVNlbnN5IiwiY2xpZW50SWQiOiI2NjJjOWVjYjkzYTJiZDBhZWU1ZTBmYWIiLCJhY3RpdmVQbGFuIjoiQkFTSUNfTU9OVEhMWSIsImlhdCI6MTcxNDIwMDI2N30.fQE69zoffweW2Z4_pMiXynoJjextT5jLrhXp6Bh1FgQ",
      campaignName: "⁠⁠paid_telegram_link (Upon KYC completion) (TEXT)",
      destination: phoneNumber,
      userName: "Hailgro tech solutions pvt. ltd.",
      templateParams: [`${link}`],
      source: "new-landing-page form",
      media: {
        url: "https://whatsapp-media-library.s3.ap-south-1.amazonaws.com/IMAGE/6353da2e153a147b991dd812/5442184_confidentmansuit.png",
        filename: "sample_media",
      },
      buttons: [],
      carouselCards: [],
      location: {},
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const checkPaymentStatus = async () => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const transactionId = params.get("transactionId");
    const inviteLink = params.get("inviteLink");
    const planType = params.get("planType");
    const amount = params.get("amount");
    const subscriptionId = params.get("subscriptionId");
    const userId = localStorage.getItem("userId");

    const subscriptionData = await fetchSubscriptionDetail(subscriptionId);

    if (inviteLink) {
      const decodeLink = decodeURIComponent(inviteLink);
      sessionStorage.setItem("inviteLink", decodeLink);
    }

    if (status === "success") {
      console.log(subscriptionData);
      toast.success(`Payment Success: ${transactionId}`);
      const trackierScript = document.createElement("script");
      trackierScript.src =
        "https://static-cdn.trackier.com/js/trackier-web-sdk.js";
      trackierScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "purchase",
          purchaseValue: amount,
          currency: "INR",
          planType: planType,
          serviceType: subscriptionData && subscriptionData.serviceType,
          RA_Name: subscriptionData && subscriptionData.experts.name,
        });
        if (
          window.TrackierWebSDK &&
          typeof window.TrackierWebSDK.trackConv === "function"
        ) {
          window.TrackierWebSDK.trackConv(
            "copartner.gotrackier.com",
            "662b93eae1a03b602b9163",
            {
              goal_value: "ftdpayment",
              txn_id: userId,
              is_iframe: true,
            }
          );
        } else {
          console.error(
            "TrackierWebSDK is not defined or trackConv function is missing."
          );
        }
      };

      trackierScript.onerror = () => {
        console.error("Failed to load Trackier script.");
      };

      document.body.appendChild(trackierScript);
      window.location.reload();
      return true;
    } else if (status === "failure") {
      toast.error(`Payment Failed: ${transactionId}`);
      return false;
    }

    return null;
  };

  const clearURLParams = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = async () => {
    const { name, email, pan, address, state } = formValues;

    if (!name || !email || !pan || !address || !state) {
      setError("All fields are required");
      return;
    }

    const patchData = [
      { path: "name", op: "replace", value: name },
      { path: "email", op: "replace", value: email },
      { path: "pan", op: "replace", value: pan },
      { path: "address", op: "replace", value: address },
      { path: "state", op: "replace", value: state },
      { path: "isKYC", op: "replace", value: true },
    ];

    try {
      const response = await axios.patch(
        `https://copartners.in:5131/api/User?Id=${userData.id}`,
        patchData,
        {
          headers: {
            "Content-Type": "application/json-patch+json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Details updated successfully!");
        setError(null);
        sendSMS(mobileNum, telegramLink);
        sendPaidTelegramLinkMessage(mobileNum, telegramLink);
        window.location.reload();
      } else {
        toast.error("Failed to update details!");
        setError("Failed to update details.");
      }
    } catch (error) {
      console.error("Error updating details:", error);
      toast.error("Failed to update details!");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(telegramLink);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className={`flex flex-col ${styles.paddingY} header-bg`}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-4 px-2 z-10 text-center`}
      >
        <div className="flex md:flex-row flex-col gap-4 text-black rounded-xl relative md:w-[1200px]">
          <div className="flex flex-col w-full md:mx-auto md:p-10 px-5 rounded-lg text-left border-[1px] border-[#333333] border-opacity-50">
            <h2 className="md:text-6xl text-4xl font-bold my-2 ">
              KYC Details
            </h2>
            <p className="md:text-base text-sm text-gray-700">
              Complete Your KYC!⚠. Please complete your KYC Verification to
              unlock your link to join the Premium Channel
            </p>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {userData?.isKYC ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-500">
                  KYC is already done.
                </h3>
              </div>
            ) : (
              <form className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-7 py-5">
                  <div className="flex flex-col w-full md:w-1/2">
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="border border-[#333333] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="border border-[#333333] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex flex-col pb-4">
                  <input
                    type="text"
                    name="pan"
                    value={formValues.pan}
                    onChange={handleInputChange}
                    placeholder="PAN"
                    className="border border-[#333333] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                  />
                </div>
                <div className="flex flex-col pb-4">
                  <input
                    type="text"
                    name="address"
                    value={formValues.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="border border-[#333333] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="state"
                    value={formValues.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    className="border border-[#333333] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                  />
                </div>
                <div className="text-center md:py-3 py-3">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="bg-[#0081F1] md:rounded-3xl rounded-2xl text-white py-2 md:text-base text-sm px-7 transition duration-300"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
            <h2 className="md:text-6xl text-4xl font-bold py-2 ">
              Telegram Link
            </h2>
            <div className="relative text-center py-4">
              <div
                className={`flex items-center justify-between p-2 border rounded-lg ${
                  userData?.isKYC
                    ? "bg-white text-black"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                onMouseEnter={() => {
                  if (!userData?.isKYC) {
                    setShowPopover(true);
                  }
                }}
                onMouseLeave={() => setShowPopover(false)}
              >
                {userData?.isKYC ? (
                  <span className="flex-1">{telegramLink}</span>
                ) : (
                  <span className="flex-1 blur-sm">
                    *************************
                  </span>
                )}
                {userData?.isKYC && (
                  <button
                    onClick={handleCopy}
                    className="p-1 rounded-full text-black"
                  >
                    <FiCopy className=" text-base" />
                  </button>
                )}
                {!userData?.isKYC && <FiLock />}
              </div>
              {showPopover && !userData?.isKYC && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 w-64 bg-red-50 border border-red-300 text-red-800 rounded-md shadow-lg">
                  Please complete your KYC to unlock the link.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      { otpDone === "false" && <MobileNumberPopup mobileNumber={mobile} /> }
      <Tooltip id="tooltip" />
      <ToastContainer />
    </div>
  );
};

export default KYCPage;
