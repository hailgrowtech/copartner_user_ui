import React from "react";
import { Ads } from "../../assets";
import ExpertiseCourse from "./ExpertiseCourse";
import CourseList from "./CourseList";

const PrivateCall = () => {
  return (
    <>
    <div className="{`flex flex-col items-center justify-center`}">
      {/* <div className="flex sm:justify-between justify-center items-center flex-col sm:flex-row gap-2">
        <span className="font-poppins h-[52px] font-[700] md:text-[50px] text-[30px] sm:text-start text-center text-gradient-2 leading-[51px]">
          Private Calls Availability
        </span>
        <span className="w-[419px] h-[56px] text-[18px] leading-[28px] text-dimWhite sm:text-start text-center">
          With Cobalt, managing your business finances is effortless,
          empowering.
        </span>
      </div> */}

      <div className="flex justify-center items-center sm:w-full sm:h-[400px] w-full h-[192px] md:mb-[4rem] mb-[0] rounded-[12px]">
        <img src={Ads} alt="Advertisement" className="max-w-full max-h-full" />
      </div>
    </div>
    <CourseList />
    </>
  );
};

export default PrivateCall;
