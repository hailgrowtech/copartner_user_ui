import React from "react";
import { FaCheck } from "react-icons/fa6";
import "./Minor.css";

const HowMinorWorks = ({ expertData, handleBuyNowClick }) => {
  return (
    <div className="w-full mt-3 flex flex-col">
      <div className="bg-[#18181B] rounded-[10px] mt-8 p-6">
        <div className="text-[26px]">
          Here’s how it works over after{" "}
          <span className="text-gradient font-bold">Payment</span>
        </div>
        <p className="py-3 border-b border-[#fff] text-lg">
          {expertData.planType} Access
        </p>
        <div className="mt-5">
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <FaCheck className="text-xl mr-2" />
              <span>Complete your KYC</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-xl mr-2" />
              <span>Get Link to join channel on your whatsapp</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-xl mr-2" />
              <span>Try out the premium calls</span>
            </li>
            <li className="flex items-center">
              <FaCheck className="text-xl mr-2" />
              <span>Explore more plans on copartner.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() =>
          handleBuyNowClick(
            expertData.id,
            expertData.planType,
            expertData.amount,
            expertData.isCustom,
            expertData.durationMonth,
            expertData.chatId
          )
        }
        className="w-full mt-3"
      >
        <button className="w-full md:w-[1000px] bg-[#006ADC] css-btn text-[15px] font-semibold md:py-3 py-4 rounded-md highlightBtnFadeIn">
          Buy Now at ₹{expertData.amount}
        </button>
      </div>
    </div>
  );
};

export default HowMinorWorks;
