import React, { useState, useEffect } from "react";
import StockPlatform from "./StockPlatform";
import ExpertiseCourse from "./ExpertiseCourse";
import { courseExpertise_data } from "../../constants";
import "./CourseList.css";
import ContinueCardsCarousel from "./ContinueCardsCarousel";
const CourseList = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="{`flex flex-col items-center justify-center md:py-[4rem] py-[0]`}">
        <div className="flex sm:justify-between justify-center items-center flex-col sm:flex-row gap-2">
          <span className="font-poppins h-[52px] font-[700] md:text-[50px] text-[30px] sm:text-start text-center text-gradient-2 leading-[51px]">
            Course By Expertise
          </span>
          <span className="md:w-[600px] md:h-[56px] w-[328px] h-[34px] font-[400] md:text-[18px] text-[12px] md:leading-[28px] leading-[17px] text-dimWhite sm:text-start text-center">
            Dive into our expert-led stock market courses to navigate through
            the{" "}
            <span className="text-lightWhite">
              stock market world with a profitable setup.
            </span>
          </span>
        </div>
      </div>

      <div>
        {isSmallScreen ? (
          <div className="md:hidden flex">
            {courseExpertise_data.map((course, index) => (
              <ContinueCardsCarousel key={index} courseData={course} />
            ))}
          </div>
        ) : (
          <div className="md:flex hidden flex-wrap justify-center courseCard">
            {courseExpertise_data.map((course, index) => (
              <ExpertiseCourse key={index} courseData={course} />
            ))}
          </div>
        )}
      </div>

      <button className="md:w-[147px] md:h-[40px] md:flex hidden items-center justify-center hidden flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px] mx-[34rem]">
          Explore More
      </button>

      <StockPlatform />
    </>
  );
};
export default CourseList;
