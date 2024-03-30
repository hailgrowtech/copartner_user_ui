import React from "react";
import { logo } from "../../assets";
import { stock_data } from "../../constants";
import OptionExpertise from "./OptionExpertise";

const StockPlatform = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center sm:py-[6rem] py-6">
      <div className="flex flex-col justify-between items-center md:w-[557px] md:h-[103px] w-[340px] h-[197px] md:mb-16 mb-2">
        <span
          className="font-[700] md:text-[50px] text-[30px] md:w-[1114px] md:h-[120px] w-full h-full
          text-gradient-2 md:leading-[60px] leading-[30px] text-center"
        >
          Bridge the Gap between Traders & Analysts with Copartner and Unite for Success!
        </span>

        <img src={logo} alt="LOGO" className="md:w-[225px] w-[199px] md:h-[64px] h-[54px]" />

        <span className="text-dimWhite md:w-[505px] w-[328px] text-center md:h-[56px] h-[34px] font-[400] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
          Empower your teams to build better processes, for a better workplace.
        </span>
      </div>

      <div className="md:w-[1076px] md:h-[380px] w-[337px] h-[1170px] md:gap-[5rem] gap-[1rem] flex flex-col sm:flex-row md:py-[6rem] py-[1rem] mx-auto">
        {stock_data.map((stock) => (
          <div
            key={stock.id}
            className="flex flex-col gap-[2rem] items-center md:w-[337px] md:h-[335px] w-[335px] h-[338px] rounded-[11px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
          >
            <img
              src={stock.img}
              alt="STOCK_IMAGES"
              className="md:w-[289px] md:h-[151px] w-[288px] h-[150px]"
            />
            <div className="flex flex-col gap-[1rem]">
              <span className="text-lightWhite md:w-[190px] md:h-[27px] w-[164px] h-[27px] font-[600] md:text-[20px] text-[18px] leading-[27px] text-center sm:text-left">
                {stock.title}
              </span>
              <span className="text-dimWhite w-[257px] h-[96px] text-[16px] font-[400] leading-[24px] text-left">
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
