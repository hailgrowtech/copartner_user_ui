import React from "react";
import { arrow, stars, telegram, userBck, userImg } from "../../assets";

const Card = () => {
  return (
    <div className="mx-auto">
      <div className="flex-col-3 hover:bg-[#18181B] rounded-2xl md:px-8 pb-2">
        <div className="sm:h-[146px] md:mx-auto h-[100px]">
          <img
            src={userImg}
            alt="User"
            className={`profile-image`}
            style={{
              backgroundImage: `url(${userBck})`,
              backgroundSize: '15rem',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="md:w-[200px] w-[150px] h-[33px] flex justify-between mt-6 mx-auto">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] leading-[12px] font-[500] text-white">
              Arun Kumar
            </span>
            <span className="text-[8px] leading-[10px] font-[400] text-dimWhite">
              Stock Market
            </span>
          </div>
          <div className="w-[32px] h-[15px] flex gap-2">
            <img src={stars} alt="stars" className="w-[11.5px] h-[11.5px]" />
            <span className="text-white font-[600] text-[11.5px] leading-[14px]">
              4.4
            </span>
          </div>
        </div>
        <div className="md:w-[200px] w-[150px] h-[33px] flex justify-between mt-2 mx-auto text-white">
          <div className="flex">
            <div className="flex flex-col w-[52px] h-[33px] items-center">
              <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                Experience
              </span>
              <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                7+
              </span>
            </div>
          </div>
          <div className="w-[1px] h-[25px] bg-white"></div>
          <div className="flex">
            <div className="flex flex-col w-[52px] h-[33px] items-center">
              <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                Followers
              </span>
              <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                3.1k
              </span>
            </div>
          </div>
        </div>
        <div className="w-[140px] h-[26px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] mx-auto mt-2">
          <div className="flex justify-center items-center gap-2">
            <img src={telegram} alt="telegram" className="w-[16px] h-[16px]" />
            <button className="text-white font-[400] text-[10px] leading-[19px]">
              Join Telegram
            </button>
            <img src={arrow} alt="arrow" className="w-[11px] h-[11px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
