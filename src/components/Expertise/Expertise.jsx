import React from "react";
import styles from "../../style";
import Card from "./Profile_Component";
import SingleCard from './Single_Card';

const Expertise = () => {
  return (
    <section
      className={`flex md:flex-row flex-col md:px-0 px-3 ${styles.paddingY} expertise-Bg`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 z-10 md:bottom-[10rem]`}
      >
        <section className="w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <span
              className="flex-1 font-inter font-bold md:text-[72px] text-[36px]
      text-gradient md:leading-[88px] leading-[44px] text-center md:mb-8 mb-2"
            >
              Your Team, <br /> Reimagined.
            </span>
          </div>
          <div className="flex flex-row justify-between items-center w-full mb-8">
            <span
              className="flex-1 font-inter font-medium md:text-[18px] text-[12px]
      text-[#FFFFFF] md:leading-[28px] leading-[16px] text-center"
            >
              Take your team up a level with easy-to-use tools, effortless{" "}
              <br />
              templates and efficient workflows.
            </span>
          </div>
          <div className="md:flex md:flex-row grid grid-cols-2 justify-between items-center w-full md:pt-6 md:gap-x-2 gap-2">
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <div className="flex-col-3 mx-auto">
              <div className="font-inter font-semibold md:text-[30px] text-[18px] md:leading-[36px] leading-[18px] text-white md:mb-6 mb-2">
                Experience Matters
              </div>
              <div className="font-inter font-normal md:text-[16px] text-[10px] md:leading-[28px] leading-[12px] text-white text-opacity-60 md:mb-6 mb-4">
                Empower your teams to build better processes, for a better
                workplace.
              </div>
              <button className="font-inter text-black font-semibold bg-[#FFFFFF] md:text-[14px] text-[10px] md:leading-[16px] leading-[12px] p-2 rounded border-[#000000]-950 border-2">
                Explore More
              </button>
            </div>
          </div>
        </section>
        <section className="Our-expertise w-full">
          <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-3">
            <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-gradient md:leading-[50px] leading-[51px] text-white md:mb-6">
              Our Expertise
            </div>
            <div className="flex-col-6 font-normal text-[#A1A1AACC] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
              With Cobalt, managing your business finances is effortless, <br />{" "}
              empowering.{" "}
              <span className="text-white">
                Say no to spreadsheets and tools designed in the 80s.
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl p-3">
            <div className="md:flex-col-6 md:text-[16px] text-[10px] flex flex-row my-auto">
              <button className="text-white md:flex-col-3 md:mx-6 mx-2">
                All
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 text-[#A1A1AACC] hover:text-white">
                Futures & Options
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 text-[#A1A1AACC] hover:text-white">
                Commodity
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 text-[#A1A1AACC] hover:text-white">
                Investor
              </button>
            </div>
            <div className="md:flex-col-6 ms-auto flex flex-row">
              <select
                name="cars"
                id="cars"
                className="text-white bg-gray-800 bg-opacity-50 rounded-lg md:text-[16px] text-[10px] md:ps-6 ps-2 md:pe-20 md:py-2 py-1 border-2 border-[#4e4e4ecc]"
              >
                <option disabled>Price</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Alto</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="w-full md:flex hidden md:flex-row my-8">
            <div className="flex-col-5 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl">
              <img src="./card1.png" alt="card1" />
            </div>
            <div className="flex-col-7 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl mx-auto">
              <img src="./card1.png" alt="card2" />
            </div>
          </div>
          <Card />
        </section>
        <section className="top-expertise w-full">
          <div className="mt-16 mb-8 md:text-left text-center">
            <div className="font-inter font-bold md:text-[50px] text-[30px] subheading-gradient md:leading-[50px] leading-[51px] text-white md:mb-6">
              Top Expertise
            </div>
            <div className="font-normal text-[#A1A1AACC] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
              Empower your teams to build better processes, for a better
              workplace.
            </div>
          </div>
          <div>
            <Card />
          </div>
        </section>
        <section className="similar-interest w-full">
          <div className="mt-16 mb-8 md:text-left text-center">
            <div className="font-inter font-bold md:text-[50px] text-[30px] subheading-gradient md:leading-[50px] leading-[51px] text-white md:mb-6">
              Similar To Your Interest
            </div>
            <div className="font-normal text-[#A1A1AACC] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
              Empower your teams to build better processes, for a better
              workplace.
            </div>
          </div>
          <div>
            <Card />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Expertise;
