import React, { useEffect, useState } from "react";
import Otp from "./Otp";
import { closeImg, signupBg } from "../assets";
import { useNavigate, useSearchParams } from "react-router-dom";

const SignUp = ({onAuthSuccess}) => {
  const [mobile, setMobile] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [validationMessage, setValidationMessage] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const apid = searchParams.get("apid");
    const raid = searchParams.get("raid");

    if (apid) {
      sessionStorage.setItem("apid", apid);
    }

    if (raid) {
      sessionStorage.setItem("raid", raid);
    }
  }, [searchParams]);

  const apid = sessionStorage.getItem("apid");
  const raid = sessionStorage.getItem("raid");

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);

    if (value.length > 10) {
      setValidationMessage("Mobile number must have more than 10 digits");
    } else {
      setValidationMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobile.length !== 10 || !/^[6-9]\d{9}$/.test(mobile)) {
      setError("Mobile number should have exactly 10 digits.");
      return;
    }
    setError("");
    setLoading(true);

    const postData = {
      countryCode: "IN",
      mobileNumber: mobile,
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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setShowOtp(true);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      setError("Failed to send OTP, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormEmpty = () => {
    return !mobile;
  };

  const handleClosePopups = () => {
    setShowOtp(false);
  };

  const handleClose = () => {
    sessionStorage.setItem("visitedSignUp", "true");
    navigate("/");
    window.location.reload();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${signupBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 w-screen h-screen`}
      >
        <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-6 rounded-lg w-96 relative text-center">
          <div className="absolute top-3 right-0 text-right">
            <button
              onClick={() => {
                handleClose();
                scrollToTop();
              }}
              className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white"
            >
              <img src={closeImg} alt="close" />
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-white">Login/Signup</h2>
          </div>
          <p className="text-gray-300 text-center mb-4">
            Get access to daily free calls from varieties of India's SEBI
            Registered Research Analysts.
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {showOtp ? (
            <Otp
              apid={apid}
              raid={raid}
              mobileNumber={mobile}
              onClose={handleClosePopups}
              onCloseAll={handleClose}
              onAuthSuccess={onAuthSuccess}
            />
          ) : (
            <form
              className="flex flex-col gap-4 text-white"
              onSubmit={handleSubmit}
            >
              <input
                type="number"
                placeholder="Mobile Number"
                value={mobile}
                onChange={handleMobileChange}
                className="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent"
                maxLength={10}
              />
              {validationMessage && (
                <p className="text-red-500 mt-2">{validationMessage}</p>
              )}
              <button
                type="submit"
                className={`bg-white hover:bg-black hover:text-white text-black transition duration-300 font-semibold text-[20px] py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isFormEmpty() || loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={isFormEmpty() || loading}
              >
                {loading ? "Sending..." : "Continue"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
