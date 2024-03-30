import React from 'react'
import { expertise_data } from "../../constants";
import EquityExpertise from './EquityExpertise'

const CommodityExpertise = () => {
  return (
    <div className={`flex flex-col sm:py-[4rem] pt-6`}>
      <div className="flex flex-row justify-between xl:px-0">
        <div className="flex flex-col md:h-[52px] h-[34px] justify-center md:justify-between pb-[2rem] md:items-start">
          <div className="flex flex-row md:h-[52px] h-[34px] justify-center md:justify-between items-center">
            <span className="font-poppins font-[700] md:text-[50px] text-[30px]
            text-gradient-2 leading-[51px] text-center">
              Commodity Expertise
            </span>
          </div>

          <p className="font-poppins md:w-[615px] md:h-[28px] w-[328px] h-[34px] font-[400] text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] md:leading-[17px]
          text-[10px] leading-[16px] md:text-start mt-2 text-center md:flex hidden">
            Unlock insights to excel in commodity markets.
          </p>
        </div>

        <button className="md:w-[147px] md:h-[40px] md:flex items-center justify-center hidden flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
          Explore More
        </button>
      </div>

      <div className="flex gap-[1rem] py-[1rem] md:py-[4rem] grid md:grid-cols-3 grid-cols-2">
        {expertise_data.slice(0, 3).map((expert, id) => {
          return (
            <div
              key={expert.id}
              className="md:w-[384px] md:h-[385px] sm:w-[172px] sm:h-[210px] gap-[3px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
            >
              <div className="w-[72px] h-[98px] md:w-[384px] md:h-[219px]  relative profile-image mb-4">
                <img
                  src={expert.icon}
                  alt="background"
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                />
                <img
                  src={expert.userImg}
                  alt="User"
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                />
              </div> 

              <div className="w-[154px] h-[22px] md:w-[319px] md:h-[40px] flex justify-between px-[5px] md:px-[1rem]">
                <div className="flex flex-col w-[68px] h-[22px] md:w-[101px] md:h-[40px] gap-2">
                  <span className="md:text-[18px] text-[12px] md:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                    {expert.name}
                  </span>
                  <span className="md:text-[13px] text-[8px] md:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                    {expert.title}
                  </span>
                </div>
                <div className="md:w-[48px] md:h-[22px] w-[21px] h-[10px] flex">
                  <img
                    src={expert.ratingIcon}
                    className="md:w-[12.3px] md:h-[12.3px] w-[8px] h-[8px]"
                  />
                  <span className="text-lightWhite font-[600] md:text-[11.5px] md:leading-[14px] text-[8px] leading-[10px]">
                    {expert.rating}
                  </span>
                </div>
              </div>

              <div className="md:w-[256px] md:h-[50px] w-[143px] h-[22px] flex items-start mt-2 justify-between">
                <div className="flex flex-col md:w-[78px] md:h-[50px] w-[43px] h-[22px] items-center">
                  <span className="text-dimWhite font-[400] md:text-[13px] md:leading-[16px] text-[8px] leading-[10px]">
                    {expert.experience}
                  </span>
                  <span className="text-lightWhite font-[600] md:text-[15px] md:leading-[18px] text-[8px] leading-[10px]">
                    {expert.totalExp}
                  </span>
                </div>
                <div className="md:w-[1.4px] md:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                <div className="flex">
                  <div className="flex flex-col md:w-[78px] md:h-[50px] w-[43px] h-[22px] items-center">
                    <span className="text-dimWhite font-[400] md:text-[13px] md:leading-[16px] text-[8px] leading-[10px]">
                      {expert.followers}
                    </span>
                    <span className="text-lightWhite font-[600] md:text-[15px] md:leading-[18px] text-[8px] leading-[10px]">
                      {expert.totalFollowers}
                    </span>
                  </div>
                </div>
              </div>

              <div className="sm:w-[300px] sm:h-[72px] w-[144px] h-[32px] mb-4 sm:block contents">
                  <span className="text-dimWhite sm:text-[14px] text-[7px] sm:w-[278px] sm:h-[24px] sm:leading-[24px] leading-[11px] mb-[5px]">
                    {expert.content}
                  </span>
              </div>

              <div className="md:w-[211px] md:h-[40px] w-[96px] h-[18px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)]">
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={expert.telegram}
                    alt="Telegram"
                    className="md:w-[24px] md:h-[24px] w-[11px] h-[11px]"
                  />
                  <button className="text-lightWhite font-[400] md:text-[15px] text-[7px] md:leading-[28px] leading-[13px]">
                    {expert.greet}
                  </button>
                  <img
                    src={expert.arrowIcon}
                    alt="arrow"
                    className="md:w-[16px] md:h-[16px] w-[7px] h-[7px]"
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="md:hidden flex flex-col w-[1751px] h-[120px] mt-[3rem] justify-between">
            <p className="font-poppins md:w-[737px] md:h-[28px] w-[171px] h-[66px] font-[400] text-dimWhite md:text-[18px] text-[14px] md:leading-[28px]
            leading-[22px] md:text-start text-center md:hidden flex">
               Empower your teams to build better processes, for a better
               workplace.
            </p>
            <button className="md:flex items-center justify-center md:hidden flex w-[110px] h-[30px] rounded-[4.5px] bg-lightWhite text-[10px] font-[500] leading-[12px]">
               Explore More
            </button>
        </div>
      </div>
      <EquityExpertise />
    </div>
  )
}

export default CommodityExpertise