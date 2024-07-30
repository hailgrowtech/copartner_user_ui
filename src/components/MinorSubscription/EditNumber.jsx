import React, { useState, useEffect } from "react";
import { back } from "../../assets";
import { FaSpinner, FaPen } from "react-icons/fa";
import { toast } from "react-toastify";

const EditNumber = ({ onClose, mobileNumber, userId, setOtpPopup, setIsEditing }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(25);

  const handleSave = async () => {
    const patchData = [
      {
        path: "mobileNumber",
        op: "replace",
        value: mobileNumber,
      },
    ];

    try {
      const response = await fetch(
        `https://copartners.in:5131/api/User?Id=${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patchData),
        }
      );

      const data = await response.json();
      if (data.isSuccess) {
        setIsEditing(false);
        setOtpPopup(false); // close OTP popup
        window.location.reload();
      } else {
        toast.error("Mobile Number already exists. Please try again with different number.");
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }
    setLoading(true);

    const postData = {
      countryCode: "IN",
      mobileNumber: mobileNumber,
      otp: otp,
    };

    try {
      const response = await fetch(
        "https://copartners.in:5181/api/SignIn/ValidateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const data = await response.json();
      if (!data.isSuccess) {
        setError(data.errorMessages);
        return;
      }
      setSuccess("OTP verified successfully.");
      handleSave();
      localStorage.removeItem("otp");
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      setError("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError("");
    const postData = {
      countryCode: "IN",
      mobileNumber: mobileNumber,
      otp: "",
    };
    try {
      const response = await fetch(
        "https://copartners.in:5181/api/SignIn/GenerateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const data = await response.json();
      if (!data.isSuccess) {
        setError("Failed to resend OTP. Please try again.");
      } else {
        setSuccess("OTP has been resent. Please check your mobile.");
        setTimer(25);
      }
    } catch (error) {
      console.error(
        "There was a problem with the resend OTP operation:",
        error
      );
      setError("Failed to resend OTP. Please try again.");
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const isFormEmpty = () => {
    return otp.trim() === "";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-8 rounded-lg w-[25rem] relative text-center shadow-lg">
        <div className="absolute top-3 left-2 text-right">
          <div
            onClick={onClose}
            className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white"
          >
            <img src={back} alt="back" />
          </div>
        </div>
        <div className="mb-1">
          <h2 className="text-2xl font-semibold text-white">
            Verify Your Number
          </h2>
        </div>
        <p className="text-gray-300 text-center mb-4">
          Enter the verification code we just sent to your mobile number
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form
          className="flex flex-col gap-4 text-white"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent text-center"
            maxLength={6}
          />
          <button
            type="submit"
            className={`bg-white hover:bg-black hover:text-white text-black transition duration-300 font-semibold text-[20px] py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isFormEmpty() || loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isFormEmpty() || loading}
          >
            {loading ? <FaSpinner size={24} /> : "Verify"}
          </button>
          <button
            type="button"
            className={`mt-2 text-white ${
              timer > 0 ? "opacity-50" : ""
            } md:text-base text-sm underline`}
            onClick={handleResendOTP}
            disabled={timer > 0}
          >
            Resend OTP {timer > 0 && `in ${timer}s`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNumber;
