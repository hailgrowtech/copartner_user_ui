import React, { useState, useEffect } from "react";
import { expertise_data } from "../../constants";
import { Ads, mobBanner2, webBanner2 } from "../../assets";
import CommodityExpertise from "./CommodityExpertise";
import { Link } from "react-router-dom";

const OptionExpertise = () => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={`flex flex-col sm:mt-[6rem] mt-[30px]`}>
      <div className="flex flex-row justify-between xl:px-0">
        <div className="flex flex-col md:h-[52px] h-[34px] justify-center md:justify-between md:items-start">
          <div className="flex flex-row md:h-[52px] h-[34px] justify-center md:justify-between items-center">
            <span
              className="font-poppins font-[700] md:text-[50px] text-[30px]
            text-gradient-2 md:leading-[51px] leading-[35px] text-center"
            >
              Futures & Options Expertise
            </span>
          </div>

          <p
            className="font-poppins md:w-[615px] md:h-[28px] w-[328px] h-[34px] font-[400] text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] md:leading-[17px]
          text-[10px] leading-[16px] md:text-start mt-2 text-center md:flex hidden"
          >
            Expert guidance for navigating derivatives markets.
          </p>
        </div>

        <Link to="expertise/explore-expertise">
          <button className="md:w-[147px] md:h-[40px] md:flex items-center justify-center hidden flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
            Explore More
          </button>
        </Link>
      </div>

      <div className="flex p-[1rem] gap-[1rem] sm:p-[4rem] p-[1.5rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-2">
        {expertise_data.slice(0, 3).map((expert, id) => {
          return (
            <Link
              to="/subscription/ra-detail"
              key={expert.id}
              className="sm:w-[384px] sm:h-[460px] w-[172px] h-[250px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
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
                <div className="flex flex-col w-[68px] h-[22px] sm:w-[101px] sm:h-[40px] gap-2">
                  <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                    {expert.name}
                  </span>
                  <span className="sm:text-[13px] text-[8px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
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

              <div className="sm:w-[256px] sm:h-[50px] w-[143px] h-[22px] flex items-start mt-2 justify-between">
                <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                  <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[8px] leading-[10px]">
                    {expert.experience}
                  </span>
                  <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[8px] leading-[10px]">
                    {expert.totalExp}
                  </span>
                </div>
                <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                <div className="flex">
                  <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                    <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[8px] leading-[10px]">
                      {expert.followers}
                    </span>
                    <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[8px] leading-[10px]">
                      {expert.totalFollowers}
                    </span>
                  </div>
                </div>
              </div>

              <div className="sm:w-[300px] sm:h-[72px] w-[144px] h-[32px] mb-4 sm:block contents">
                <span className="text-dimWhite sm:text-[14px] text-[8px] sm:w-[278px] sm:h-[24px] sm:leading-[24px] leading-[11px] mb-[5px]">
                  {expert.content}
                </span>
              </div>

              <div className="md:w-[211px] md:h-[40px] w-[146px] h-[32px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0">
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
          <Link to="expertise/explore-expertise">
            <button className="md:flex items-center justify-center md:hidden flex w-[110px] h-[30px] rounded-[4.5px] bg-lightWhite text-[10px] font-[500] leading-[12px] md:ml-0">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      {smallScreen ? (
        <div className="flex justify-center items-center w-full md:mt-[4rem] mt-[30px]">
          <img
            src={mobBanner2}
            alt="Advertisement"
            className="max-w-full max-h-full rounded-[6px]"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full md:mb-[4rem] mb-[0]">
          <img
            src={webBanner2}
            alt="Advertisement"
            className="max-w-full max-h-full rounded-[6px]"
          />
        </div>
      )}
      <CommodityExpertise />
    </div>
  );
};

export default OptionExpertise;
