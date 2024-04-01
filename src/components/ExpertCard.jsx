import React from "react";
import Client from "../assets/expertCard.png";
import starImage from "../assets/Stars Minimalistic.png";
import telegramImage from "../assets/telegram.png";
import SaveIcon from '../assets/Vector.png';
import arrow from '../assets/arrow.png';

const ExpertCard = () => {
  return (
    <div className="relative">
      <div className="subscription-RA-bg flex flex-row justify-between bg-[#18181B80] w-full p-[30px] rounded-xl mb-0">
        <div className="text-white">
          <div className="flex flex-col md:mb-6">
            <div className="flex justify-between items-center w-full">
              <span
                className="flex-1 font-bold md:text-[72px] text-[36px]
    text-gradient md:leading-[88px] leading-[44px] pb-3"
              >
                Arun Kumar
              </span>
            </div>
            <span className="font-normal opacity-60 md:leading-[28px] md:text-[22px]">
              Futures & Options.
            </span>
          </div>
          <div className="flex justify-between w-[350px] h-16 md:mb-6">
            <div className="flex flex-col items-center justify-around">
              <div className="text-[18px] text-[#C6CDD5]">Experience</div>
              <div className="text-xl font-semibold">7+</div>
            </div>
            <div className="w-[2px] h-16 bg-white"></div>
            <div className="flex flex-col items-center justify-around">
              <div className="text-[18px] text-[#C6CDD5]">Followers</div>
              <div className="text-xl font-semibold">3.1k</div>
            </div>
          </div>
          <div className="text-lg font-semibold md:w-[508px] md:mb-4">
            Take your team up a level with easy-to-use tools, effortless
            templates and efficient workflows.
          </div>
          <div className="border-[1px] border-opacity-30 rounded-3xl w-44 md:mb-6">
            <button className="flex mx-auto py-2 items-center">
              <img className="w-6 me-3" src={telegramImage} alt="telegram icon" />
              Telegram
              <img className="w-4 ms-3" src={arrow} alt="arrow icon" />
            </button>
          </div>
          <div>
            <button className="flex items-center text-base">
              Explore More{" "}
              <img className="w-4 ms-3" src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="subscription-RA-img flex items-end mx-auto mb-0">
          <img className="w-[430px] mb-0" src={Client} alt="" />
        </div>
        <div className="flex items-start text-white">
          <img className="w-8 me-1" src={starImage} alt="star icon" />
          <span className="text-3xl">4.4</span>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:bg-[#ffffff5e] hover:rounded-full p-2">
        <img src={SaveIcon} alt="Save icon" className="w-5" />
      </div>
    </div>
  );
};

export default ExpertCard;
