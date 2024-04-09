import React, { useState, useEffect } from "react";
import { expertise_data } from '../../constants'

const Interest = () => {
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
    <div className="flex flex-col md:w-[1204px] w-[393px] md:px-[7rem] px-[2rem] py-5">
      <div className="flex flex-col text-center">
        <span className="md:w-[540px] h-[52px] font-inter font-bold md:text-[50px] text-[30px] text-gradient-2 leading-[51px]">
          Similar To Your Interest
        </span>
        <span className="md:w-[615px] md:h-[56px] w-[328px] h-[34px] font-[400] md:text-[18px] text-[12px] md:leading-[28px] leading-[17px] text-dimWhite text-center">
          Empower your teams to build better processes, for a better workplace.
        </span>
      </div>

      <div className="md:gap-[12rem] gap-0 md:p-0 md:p-[1rem] p-[1.5rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-2">
        {smallScreen
          ? expertise_data.slice(0, 4).map((expert, id) => {
              return (
                <div
                  key={expert.id}
                  className=":w-[172px] :h-[210px] gap-[3px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
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
                        alt="rating"
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
            })
          : expertise_data.slice(0, 3).map((expert, id) => {
              return (
                <div
                  key={expert.id}
                  className="w-[384px] h-[385px] gap-[3px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
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
                        alt="rating"
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
      </div>
    </div>
  );
};

export default Interest;
