import React from "react";
import { arrow, stars, telegram, userBck, userImg } from "../../assets";

const Card = () => {
  return (
    <div className="mx-auto">
      <div className="flex-col-3 hover:bg-[#18181B] rounded-xl md:px-8 pb-2">
        <div className="sm:h-[146px] md:mx-auto h-[100px]">
          <img
            src={userImg}
            alt="User"
            className={`profile-image mx-auto`}
            style={{
              backgroundImage: `url(${userBck})`,
              backgroundSize: "15rem",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="sm:w-[200px] w-[150px] h-[33px] flex justify-between mt-6 mx-auto">
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
        <div className="sm:w-[200px] w-[150px] h-[33px] flex justify-between mt-2 mx-auto text-white">
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
        <div className="flex my-2">
          <div className="md:w-[120px] w-[100px] md:h-[26px] h-[20px] flex md:items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] md:me-auto md:ms-0 mx-auto bg-gray-600">
            <div className="flex justify-center items-center gap-2">
              <button className="text-white font-[400] text-[8.6px] leading-[19px]">
                1 Month Subscription
              </button>
            </div>
          </div>
          <div className="md:ms-auto flex items-center mx-auto text-gray-500 text-[10px]">21 Days Left</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
