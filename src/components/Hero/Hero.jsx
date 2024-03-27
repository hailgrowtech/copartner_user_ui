import React from "react";
import styles from "../../style";
import "./Hero.css"

const Hero = () => {
  return (
    <div className={`flex md:flex-col flex-col ${styles.paddingY} background-img-div`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 relative`}
      >
        <div className="flex flex-row justify-between items-center sm:w-[603px] w-full h-[158px]">
          <span
            className="flex-1 font-poppins font-semibold md:text-[62px] text-[36px]
          text-gradient md:leading-[64px] leading-[48px]"
          >
            Home
          </span>
        </div>        
      </div>
    </div>
  );
};

export default Hero;
