import React from "react";
import styles from "../style";
import "../Hero.css"
import { hero, userImg, userBck, stars, telegram } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} background-img-div`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 relative md:bottom-[1rem]`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <span
            className="flex-1 font-poppins font-semibold md:text-[62px] text-[36px]
      text-gradient md:leading-[84px] leading-[48px]"
          >
            Unlock Financial Potential
          </span>
        </div>

        <p
          className="font-poppins font-[500] text-[#7a7a7a] md:text-[15px] md:leading-[28px]
    text-[10px] leading-[16px] mt-5"
        >
          Transform Your Future with Strategic Stock Market Insights!"
        </p>

        <button className="text-white font-normal text-[15px] leading-[28px] mt-8">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Hero;
