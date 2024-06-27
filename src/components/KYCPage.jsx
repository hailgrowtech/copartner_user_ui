import React, { useEffect, useState } from "react";
import { useUserSession } from "../constants/userContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FiCopy, FiLock } from "react-icons/fi";
import styles from "../style";
import { Tooltip } from "react-tooltip";

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

  const checkPaymentStatus = () => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const transactionId = params.get("transactionId");
    const inviteLink = params.get("inviteLink");
    const userId = localStorage.getItem("userId");

    if (inviteLink) {
      const decodeLink = decodeURIComponent(inviteLink);
      sessionStorage.setItem("inviteLink", decodeLink);
    }

    if (status === "success") {
      toast.success(`Payment Success: ${transactionId}`);
      const trackierScript = document.createElement("script");
    trackierScript.src = "https://static-cdn.trackier.com/js/trackier-web-sdk.js";
    trackierScript.onload = () => {
      console.log("Trackier script loaded successfully.");
      if (window.TrackierWebSDK && typeof window.TrackierWebSDK.trackConv === 'function') {
        console.log("TrackierWebSDK is defined.");
        window.TrackierWebSDK.trackConv(
          "copartner.gotrackier.com",
          "662b93eae1a03b602b9163",
          {
            goal_value: "ftdpayment",
            txn_id: userId,
            is_iframe: true,
          }
        );
        console.log("TrackConv function called with txn_id:", userId);
      } else {
        console.error("TrackierWebSDK is not defined or trackConv function is missing.");
      }
    };

    trackierScript.onerror = () => {
      console.error("Failed to load Trackier script.");
    };

    document.body.appendChild(trackierScript);
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

  // const handleJoinClick = () => {
  //   if (!userData?.isKYC) {
  //     setShowPopover(true);
  //     setTimeout(() => {
  //       setShowPopover(false);
  //     }, 3000);
  //   } else {
  //     window.open(telegramLink, "_blank");
  //   }
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(telegramLink);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className={`flex flex-col ${styles.paddingY} header-bg`}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-4 px-2 z-10 text-center`}
      >
        <div className="flex md:flex-row flex-col gap-4 text-white rounded-xl relative md:w-[1200px]">
          <div className="flex flex-col w-full md:mx-auto md:p-10 px-5 rounded-lg text-left border-[1px] border-[#f2f2f2] border-opacity-50">
            <h2 className="md:text-6xl text-4xl font-bold my-2 text-gradient">
              KYC Details
            </h2>
            <p className="md:text-base text-sm">
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
                      className="border border-[#ffffff40] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="border border-[#ffffff3d] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
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
                    className="border border-[#ffffff3d] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                  />
                </div>
                <div className="flex flex-col pb-4">
                  <input
                    type="text"
                    name="address"
                    value={formValues.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="border border-[#ffffff3d] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="state"
                    value={formValues.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    className="border border-[#ffffff3d] border-opacity-50 text-black bg-[#f5f5f5] py-3 p-2 rounded-xl"
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
            <h2 className="md:text-6xl text-4xl font-bold py-2 text-gradient">
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
            {/* {showPopover && (
              <div className="fixed bottom-5 right-5 z-50">
                <div
                  className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-[#000] dark:border-red-800 rounded-xl"
                  role="alert"
                  style={{ width: "300px" }}
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 2.5A1.5 1.5 0 0 1 3.5 1h13A1.5 1.5 0 0 1 18 2.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 15.5v-13zM5.62 7.38a.75.75 0 0 1 1.06-1.06L10 8.94l3.31-3.32a.75.75 0 1 1 1.06 1.06L11.06 10l3.31 3.31a.75.75 0 1 1-1.06 1.06L10 11.06l-3.32 3.31a.75.75 0 1 1-1.06-1.06L8.94 10 5.62 6.69z"
                    ></path>
                  </svg>
                  <div className="ms-5 mr-5 text-sm font-medium">
                    Please fill the KYC details.
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <Tooltip id="tooltip" />
      <ToastContainer />
    </div>
  );
};

export default KYCPage;
