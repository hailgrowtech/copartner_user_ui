import React from "react";
import styles from "../../style";
import { arrow } from "../../assets";
import Expertise from "./Expertise";
import { expertise_data } from "../../constants";

const Hero = () => {
  return (
    <div className={`flex md:flex-col ${styles.paddingX} flex-col ${styles.paddingY} background-img-div`}>
      <div
        className={`${styles.flexStart} flex-col z-10 relative`}
      >
        <div className="flex flex-col justify-between md:w-[603px]">
          <span
            className="font-poppins md:text-[72px] text-[36px]
          text-gradient md:leading-[84px] leading-[48px] font-[700]"
          >
            Invest, Learn and Earn
          </span>
          <p className="font-poppins md:w-[876px] md:h-[28px] w-[360px] h-[17px] font-[500] text-dimWhite md:text-[18px] text-[12px] md:leading-[28px] leading-[16px]">
            Get partnered with our SEBI Registered Research Analysts to start
            your profitable trading journey.
          </p>
        </div>

        <div className="flex items-center gap-8 mt-[1rem]">
          <button className="text-white font-normal text-[15px] leading-[28px]">
            Explore More
          </button>
          <img src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
        </div>

        <div className="pt-[2rem] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:flex">
          {expertise_data.slice(0, 3).map((expert, id) => {
            return (
              <div
                key={expert.id}
                className="md:w-[256px] md:h-[285px] sm:w-[172px] sm:h-[210px] gap-[3px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <div className="w-[72px] h-[98px] md:w-[256px] md:h-[146px]  relative profile-image mb-4">
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

                <div className="flex md:w-[212px] md:h-[26px] sm:w-[157px] sm:h-[22px] flex justify-between md:gap-0 gap-[2.2rem]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] leading-[12px] font-[500] text-white">
                      {expert.name}
                    </span>
                    <span className="text-[8px] leading-[10px] font-[400] text-dimWhite">
                      {expert.title}
                    </span>
                  </div>
                  <div className="w-[32px] h-[15px] flex">
                    <img
                      src={expert.ratingIcon}
                      className="w-[11.5px] h-[11.5px]"
                      alt="rating"
                    />
                    <span className="text-white font-[600] text-[11.5px] leading-[14px]">
                      {expert.rating}
                    </span>
                  </div>
                </div>

                <div className="md:w-[171px] md:h-[33px] w-[125px] h-[23px] flex justify-between mr-[1rem] mt-2">
                  <div className="flex flex-col w-[52px] h-[33px] items-center">
                    <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                      {expert.experience}
                    </span>
                    <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                      {expert.totalExp}
                    </span>
                  </div>
                  <div className="md:w-[1.4px] md:h-[25px] w-[1px] h-[22px] bg-lightWhite"></div>
                  <div className="flex">
                    <div className="flex flex-col w-[52px] h-[33px] items-center">
                      <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                        {expert.followers}
                      </span>
                      <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                        {expert.totalFollowers}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-[140px] h-[26px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] mt-2 md:mt-0">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={expert.telegram}
                      alt="Telegram"
                      className="w-[16px] h-[16px]"
                    />
                    <button className="text-white font-[400] text-[10px] leading-[19px]">
                      {expert.greet}
                    </button>
                    <img
                      src={expert.arrowIcon}
                      alt="arrow"
                      className="w-[11px] h-[11px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="md:w-[365px] md:h-[226px] w-[171px] h-[256px] md:px-[3rem] flex flex-col md:justify-between">
            <span className="md:w-[365px] md:h-[36px] w-[171px] h-[36px] font-[600] md:text-[30px] text-[18px] leading-[36px] text-lightWhite">
              Experience Matters
            </span>

            <span className="text-dimWhite md:w-[365px] md:h-[86px] w-[171px] h-[90px] font-[400] md:text-[16px] text-[14px] md:leading-[28px] leading-[21px]">
              Connect with India’s leading SEBI registered Research Analysts,
              guiding you thoroughly to maximising profits in the dynamic world
              of stock trading.
            </span>
            <Link to="expertise">
              <button className="md:w-[147px] md:h-[40px] w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px] md:mt-0 mt-[4rem]">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Expertise />
    </div>
  );
};

export default Hero;
