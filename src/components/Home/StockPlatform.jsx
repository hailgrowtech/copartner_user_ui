import React from "react";
import { logo } from "../../assets";
import { stock_data } from "../../constants";
import OptionExpertise from "./OptionExpertise";

const StockPlatform = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center sm:mt-[4rem] mt-[60px]">
        <div className="flex flex-col justify-between items-center md:w-[557px] md:h-[103px] w-[340px] h-[197px] md:mb-16 mb-2">
          <span
            className="font-[700] md:text-[50px] text-[30px] md:w-[1114px] md:h-[120px] w-full h-full
          text-gradient-2 md:leading-[60px] leading-[30px] text-center"
          >
            Bridge the Gap between Traders & Analysts with Copartner and Unite
            for Success!
          </span>

          <img
            src={logo}
            alt="LOGO"
            className="md:w-[225px] w-[199px] md:h-[64px] h-[54px]"
          />

          <span className="text-dimWhite md:w-[505px] w-[328px] text-center md:h-[56px] h-[34px] font-[400] md:text-[18px] text-[13px] md:leading-[28px] leading-[17px]">
            Empower your teams to build better processes, for a better
            workplace.
          </span>
        </div>

        <div className="md:w-[1076px] md:max-h-[580px] w-[337px] md:gap-[5rem] gap-[1rem] flex flex-col sm:flex-row md:mt-[6rem] md:py-0 py-[2rem] mx-auto">
          {stock_data.map((stock) => (
            <div
              key={stock.id}
              className="flex flex-col gap-[1rem] py-[8px] items-center md:w-[337px] max-h-full rounded-[11px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
            >
              <img
                src={stock.img}
                alt="STOCK_IMAGES"
                className="md:w-[289px] w-[288px] h-[150px]"
              />
              <div className="flex flex-col gap-[0.4rem]">
                <span className="text-lightWhite md:w-[190px] w-[164px] font-[600] md:text-[20px] text-[18px] leading-[27px] text-left">
                  {stock.title}
                </span>
                <span className="text-dimWhite w-[257px] max-h-full text-[16px] font-[400] leading-[24px] text-left">
                  {stock.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OptionExpertise />
    </>
  );
};

export default StockPlatform;
