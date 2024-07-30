import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const SignUp3 = ({ onClose, onLoginSuccess, planMonthlyPrice }) => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [validationMessage, setValidationMessage] = useState("");
  const [searchParams] = useSearchParams();

  const total = planMonthlyPrice;

  useEffect(() => {
    const apid = searchParams.get("apid");
    const raid = searchParams.get("raid");
    const landingPageUrl = searchParams.get("apurl");

    if (apid) {
      sessionStorage.setItem("apid", apid);
      localStorage.setItem("apid", apid);
    }

    if (raid) {
      sessionStorage.setItem("raid", raid);
      localStorage.setItem("raid", raid);
    }

    if (landingPageUrl) {
      sessionStorage.setItem("landingPageUrl", landingPageUrl);
      localStorage.setItem("landingPageUrl", landingPageUrl);
    }
  }, [searchParams]);

  const apid = localStorage.getItem("apid") || sessionStorage.getItem("apid");
  const raid = localStorage.getItem("raid") || sessionStorage.getItem("raid");
  const landingPageUrl =
    localStorage.getItem("landingPageUrl") ||
    sessionStorage.getItem("landingPageUrl");

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);

    if (value.length > 10) {
      setValidationMessage("Mobile number must have exactly 10 digits");
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

    try {
      responseUser();
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

  const handleClose = () => {
    sessionStorage.setItem("visitedSignUp", "true");
    window.location.reload();
  };

  const responseUser = async () => {
    try {
      const userData = {
        mobileNumber: mobile,
        referralMode: "CP",
        affiliatePartnerId: "",
        expertsID: "",
        landingPageUrl: "",
      };

      if (apid) {
        userData.referralMode = "AP";
        userData.affiliatePartnerId = apid;
        userData.landingPageUrl = landingPageUrl;
      } else if (raid) {
        userData.referralMode = "RA";
        userData.expertsID = raid;
      }

      const resUser = await fetch(`https://copartners.in:5131/api/User`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await resUser.json();
      if (!data.isSuccess) {
        setError(data.errorMessages);
        console.log("Something");
        localStorage.setItem("userId", data.data.id);
        window.location.reload();
      } else {
        localStorage.setItem("userId", data.data.id);
        const userId = data.data.id;
        const scriptContent = `
          window.TrackierWebSDK.trackConv('copartner.gotrackier.com', '662b93eaeae1a03b602b9163', {"goal_value":"Registration","txn_id":"${userId}","is_iframe":true});
        `;
        const scriptElement = document.createElement("script");
        scriptElement.textContent = scriptContent;
        document.body.appendChild(scriptElement);
        sendCampaignMessage(mobile);
        sendSignupMessage(mobile);
        window.location.reload();
      }
      localStorage.setItem("otp", false);
      localStorage.removeItem("apid");
      localStorage.removeItem("raid");
      localStorage.removeItem("landingPageUrl");
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const sendSignupMessage = async (phoneNumber) => {
    const url = "https://backend.aisensy.com/campaign/t1/api/v2";
    const data = {
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmM5ZWNiOTNhMmJkMGFlZTVlMGZiMiIsIm5hbWUiOiJIYWlsZ3JvIHRlY2ggc29sdXRpb25zIHB2dC4gbHRkLiIsImFwcE5hbWUiOiJBaVNlbnN5IiwiY2xpZW50SWQiOiI2NjJjOWVjYjkzYTJiZDBhZWU1ZTBmYWIiLCJhY3RpdmVQbGFuIjoiQkFTSUNfTU9OVEhMWSIsImlhdCI6MTcxNDIwMDI2N30.fQE69zoffweW2Z4_pMiXynoJjextT5jLrhXp6Bh1FgQ",
      campaignName: "⁠new_signup_1 (On Sign Up) (TEXT)",
      destination: phoneNumber,
      userName: "Hailgro tech solutions pvt. ltd.",
      templateParams: [],
      source: "new-landing-page form",
      media: {},
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
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const sendCampaignMessage = async (phone) => {
    const url = "https://backend.aisensy.com/campaign/t1/api/v2";
    const data = {
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmM5ZWNiOTNhMmJkMGFlZTVlMGZiMiIsIm5hbWUiOiJIYWlsZ3JvIHRlY2ggc29sdXRpb25zIHB2dC4gbHRkLiIsImFwcE5hbWUiOiJBaVNlbnN5IiwiY2xpZW50SWQiOiI2NjJjOWVjYjkzYTJiZDBhZWU1ZTBmYWIiLCJhY3RpdmVQbGFuIjoiQkFTSUNfTU9OVEhMWSIsImlhdCI6MTcxNDIwMDI2N30.fQE69zoffweW2Z4_pMiXynoJjextT5jLrhXp6Bh1FgQ",
      campaignName: "singup_telegram_link(Just after signup campaign1)[TEXT]",
      destination: phone,
      userName: "Hailgro tech solutions pvt. ltd.",
      templateParams: [],
      source: "new-landing-page form",
      media: {},
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

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 w-screen h-screen`}
    >
      <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-6 rounded-lg w-96 relative text-center shadow-lg">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-300 text-2xl hover:text-red-500 transition duration-300"
        >
          &times;
        </button>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">Enter your number</h2>
          {/* <p className="text-gray-400">Enter your mobile number to proceed</p> */}
        </div>

        <form
          className="flex flex-col gap-4 text-white"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            placeholder="Mobile Number"
            value={mobile}
            onChange={handleMobileChange}
            className="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-blue-500 bg-transparent"
            maxLength={10}
          />
          {validationMessage && (
            <p className="text-red-500 mt-2">{validationMessage}</p>
          )}
          <div className="flex justify-between py-2 mb-4 border-b-[1px] border-t-[1px] border-[#c9c9c962]">
            <label className="block text-lg text-[#c9c9c9] font-semibold">
              Total
            </label>
            <span className="text-lg font-semibold">₹{total}</span>
          </div>
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold text-[20px] py-3 px-4 rounded-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isFormEmpty() || loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isFormEmpty() || loading}
          >
            {loading ? "Sending..." : "Proceed to Pay"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp3;
