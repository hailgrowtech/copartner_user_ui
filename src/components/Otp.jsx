import React, { useState } from "react";
import { closeImg } from "../assets";
import { useNavigate } from "react-router-dom";

const Otp = ({ onClose, mobileNumber }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }

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
      
      console.log('SuccessFully Login...')
      sessionStorage.setItem("token", data.data.token);
      responseUser();

    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const responseUser = async () => {
    try {
      const resUser = await fetch("https://copartners.in:5131/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({referralMode: 'CP', mobileNumber}),
      });
      const data = await resUser.json();
      if (!data.isSuccess) {
        setError(data.errorMessages);
      }
      navigate("/");
      window.location.reload();
      console.log("Success Get Are getting");
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
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
      }
    } catch (error) {
      console.error(
        "There was a problem with the resend OTP operation:",
        error
      );
    }
  };

  const isFormEmpty = () => {
    return otp.trim() === "";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-8 rounded-lg w-[25rem] relative text-center">
        <div className="absolute top-3 right-0 text-right">
          <div
            onClick={onClose}
            className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white"
          >
            <img src={closeImg} alt="close" />
          </div>
        </div>
        <div className="mb-1">
          <h2 className="text-2xl font-semibold text-white">
            OTP Verification
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
              isFormEmpty() ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isFormEmpty()}
          >
            Verify
          </button>
          <button
            type="button"
            className="mt-2 text-white md:text-base text-sm underline"
            onClick={handleResendOTP}
          >
            Resend OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
