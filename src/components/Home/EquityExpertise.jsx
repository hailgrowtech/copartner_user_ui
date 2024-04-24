import React from "react";
import { expertise_data } from "../../constants";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

const EquityExpertise = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex flex-col md:py-[2rem] py-12`}>
      <div className="flex flex-row justify-between xl:px-0">
        <div className="flex flex-col md:h-[52px] h-[34px] justify-center md:justify-between pb-[2rem] md:items-start">
          <div className="md:flex md:flex-row block md:h-[52px] h-[34px] justify-center md:justify-between text-center md:items-center">
            <span
              className="font-inter font-[700] md:text-[50px] text-[30px]
            text-gradient-2 leading-[51px] text-center"
            >
              Equity Expertise
            </span>
          </div>

          <p
            className="font-inter md:w-[737px] md:h-[28px] w-[328px] h-[34px] font-[400] text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] md:leading-[17px]
          text-[10px] leading-[16px] md:text-start mt-2 text-center md:flex hidden"
          >
            Empower your teams to build better processes, for a better
            workplace.
          </p>
        </div>

        <Link onClick={scrollToTop} to="expertise/explore-expertise">
          <button className="md:w-[147px] md:h-[40px] md:flex items-center justify-center hidden flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
            Explore More
          </button>
        </Link>
      </div>

      <div className="flex p-[1rem] gap-[1rem] sm:p-[4rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-1 md:ml-0 ml-[-5px] md:mt-0 mt-[-1.5rem]">
        {expertise_data.slice(0, 3).map((expert, id) => {
          return (
            <Link onClick={scrollToTop} to="/subscription/ra-detail"
                key={expert.id}
                className="md:w-[384px] md:h-[400px] w-[172px] h-[270px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <div className="w-[72px] h-[98px] sm:w-[384px] sm:h-[219px]  relative profile-image_1 mb-4">
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

                <div className="w-[154px] h-[22px] sm:w-[319px] sm:h-[40px] flex justify-between px-[5px] sm:px-[1rem]">
                  <div className="flex flex-col h-[22px] w-full md:h-[40px] gap-2">
                    <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                      {expert.name}
                    </span>
                    <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                      {expert.title}
                    </span>
                  </div>
                  <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
                    <img
                      src={expert.ratingIcon}
                      className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                      alt="rating"
                    />
                    <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[8px] leading-[10px]">
                      {expert.rating}
                    </span>
                  </div>
                </div>

                <div className="md:w-[256px] w-[143px] h-[44px] flex items-start md:mt-2 mt-4 justify-between">
                  <div className="flex flex-col md:w-[78px] w-[43px] h-[22px] items-center justify-between">
                    <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                      {expert.experience}
                    </span>
                    <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                      {expert.totalExp}
                    </span>
                  </div>
                  <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                  <div className="flex">
                    <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                        {expert.followers}
                      </span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                        {expert.totalFollowers}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-[300px] md:h-[72px] w-[144px] h-[42px] mb-4 sm:block contents md:pl-[5px]">
                    <span className="text-dimWhite md:text-[14px] text-[11px] sm:leading-[24px] md:leading-[12px] leading-[14px] md:pl-0 pl-1.5">
                      {expert.content}
                    </span>
                  </div>

                <div className="md:w-[211px] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0">
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={expert.telegram}
                    alt="Telegram"
                    className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                  />
                  <button className="text-white font-[400] md:text-[15px] text-[10px] leading-[19px]">
                    {expert.greet}
                  </button>
                  <img
                    src={expert.arrowIcon}
                    alt="arrow"
                    className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
                  />
                </div>
              </div>
              </Link>
          );
        })}
        <div className="md:hidden flex flex-col w-[171px] h-[150px] mt-[4rem] justify-evenly px-[0.5rem]">
          <p
            className="font-inter md:w-[737px] md:h-[28px] w-[171px] h-[66px] font-[400] text-dimWhite md:text-[18px] text-[14px] md:leading-[28px]
            leading-[22px] md:text-start text-center md:hidden flex items-start text-start"
          >
            Empower your teams to build better processes, for a better
            workplace.
          </p>
          <Link onClick={scrollToTop} to="expertise/explore-expertise">
            <button className="md:flex items-center justify-center md:hidden flex w-[110px] h-[30px] rounded-[4.5px] bg-lightWhite text-[10px] font-[500] leading-[12px] md:ml-0">
              Explore More
            </button>
          </Link>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default EquityExpertise;
