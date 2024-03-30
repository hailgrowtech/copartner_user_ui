import React, { useState, useEffect } from "react";
import { expertise_data, expertise_type } from "../../constants";
import { telegram } from "../../assets";
import PrivateCall from "./PrivateCall";

const Expertise = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`flex flex-col sm:py-[4rem] py-6`}>
        <div
          className={`{styles.flexStart} flex-col gap-2 xl:px-0`}
        >
          <div className="flex flex-row md:h-[52px] h-[34px] justify-center md:justify-between items-center">
            <span
              className="font-poppins font-[700] md:text-[50px] text-[30px]
                    text-gradient-2 leading-[51px]"
            >
              Our Expertise
            </span>
          </div>

          <p
            className="font-poppins md:w-[1136px] md:h-[28px] w-[328px] h-[34px] font-[400] text-dimWhite sm:text-[18px] text-[11px] md:leading-[28px] sm:leading-[17px]
                 leading-[16px] sm:text-start mt-2 text-center"
          >
            Dive into the expertise of our SEBI registered research analysts, guiding you towards trading success with precision and insight.
          </p>
        </div>

        <div className="flex p-[1rem] gap-[1rem] sm:p-[4rem] p-[1.5rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-2">
          {expertise_data.map((expert, id) => {
            return (
              <div
                key={expert.id}
                className="sm:w-[384px] sm:h-[460px] w-[172px] h-[229px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <div className="w-[72px] h-[98px] sm:w-[384px] sm:h-[219px]  relative profile-image mb-4">
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
                  <span className="text-dimWhite sm:text-[14px] text-[7px] sm:w-[278px] sm:h-[24px] sm:leading-[24px] leading-[11px] mb-[5px]">
                    {expert.content}
                  </span>
                </div>

                <div className="sm:w-[211px] sm:h-[40px] w-[96px] h-[18px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)]">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src={telegram}
                      alt="Telegram"
                      className="sm:w-[24px] sm:h-[24px] w-[11px] h-[11px]"
                    />
                    <button className="text-lightWhite font-[400] sm:text-[15px] text-[7px] sm:leading-[28px] leading-[13px]">
                      {expert.greet}
                    </button>
                    <img
                      src={expert.arrowIcon}
                      alt="arrow"
                      className="sm:w-[16px] sm:h-[16px] w-[7px] h-[7px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`sm:flex grid-cols-1 sm:items-center sm:gap-6 gap-3 xl:px-0`}
        >
          <div className="flex flex-col md:gap-[2rem] gap-[5px]">
            <div className="flex flex-row md:h-[52px] h-[34px] justify-center md:justify-between items-center">
              <span
                className="font-poppins font-[700] md:text-[50px] text-[30px]
                     text-gradient-2 leading-[51px]"
              >
                Expertise Type
              </span>
            </div>

            <p
              className="font-poppins md:w-[349px] md:h-[84px] w-[328px] h-[34px] font-[400] text-dimWhite sm:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                   text-[10px] leading-[16px] sm:text-start text-center"
            >
              In Expert Hands, Your Wealth Thrives: Redefining Investment
              Success in the Stock Market Arena
            </p>
          </div>

          <div className="sm:flex sm:space-x-4 sm:space-y-4 grid grid-cols-2">
            {expertise_type.map((type) => (
              <div
                key={type.id}
                className={`w-[176px] h-[248px] sm:w-[290px] sm:h-[386px] flex flex-col items-baseline justify-evenly sm:my-4 ${
                  type.id === 3 && isSmallScreen
                    ? "md:w-[290px] md:h-[386px] w-[361px] h-[198px]"
                    : ""
                }`}
              >
                <img
                  alt="Expertise_Type"
                  className={`${
                    type.id === 3 && isSmallScreen
                      ? "sm:w-[290px] sm:h-[164px] w-[361px] h-[99.5px]"
                      : ""
                  } bg-expertise_type`}
                  src={
                    type.id === 3 && isSmallScreen ? type.image2 : type.image
                  }
                />
                <div
                  className={`flex justify-between ${
                    isSmallScreen && type.id === 3
                      ? "flex-row sm:flex-col"
                      : "flex-col sm:flex-row"
                  } ${isSmallScreen && type.id === 3 ? 'gap-[8rem]' : 'gap-0'}`}
                >
                  <span className="text-lightWhite sm:w-[139px] sm:h-[16px] w-[162px] h-[26px] font-[600] sm:text-[18px] text-[16px] sm:leading-[25px] leading-[15px]">
                    {type.title}
                  </span>
                  <span className="text-dimWhite sm:h-[26px] h-[16px] font-[600] sm:text-[13px] text-[8px] sm:leading-[25px] leading-[15px]">
                    {type.followers}
                  </span>
                </div>
                <div className="sm:block contents">
                  <span
                    className={`text-dimWhite font-[400] ${
                      isSmallScreen && type.id === 3
                        ? "w-[330px] h-[28px]"
                        : "md:w-[147px] md:h-[55px]"
                    } sm:text-[15px] text-[9px] sm:leading-[23px] leading-[13.7px]`}
                    // style={{
                    //   width: isSmallScreen && type.id === 3 ? "330px" : "147px",
                    //   height: isSmallScreen && type.id === 3 ? "28px" : "55px",
                    // }}
                  >
                    {type.describe}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-lightWhite sm:h-[27px] h-[17px] font-normal sm:text-[14px] text-[8.6px] sm:leading-[26px] leading-[16px]">
                    {type.button}
                  </button>
                  <img
                    src={type.arrowIcon}
                    alt="arrow"
                    className="w-[15px] h-[15px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PrivateCall />
    </>
  );
};

export default Expertise;
