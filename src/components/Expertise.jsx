import React from "react";
import styles from "../style";
import Card from "./Profile_Component";
import Testimonials from "./Testimonials";

const Expertise = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:bottom-[10rem]`}
      >
        <section className="w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <span
              className="flex-1 font-poppins font-bold md:text-[72px] text-[36px]
      text-gradient md:leading-[88px] leading-[48px] text-center mb-8"
            >
              Your team, <br /> reimagined.
            </span>
          </div>
          <div className="flex flex-row justify-between items-center w-full mb-8">
            <span
              className="flex-1 font-inter font-medium md:text-[18px] text-[36px]
      text-[#FFFFFF] md:leading-[28px] leading-[16px] text-center"
            >
              Take your team up a level with easy-to-use tools, effortless{" "}
              <br />
              templates and efficient workflows.
            </span>
          </div>
          <div className="flex flex-row justify-between items-center w-full pt-6 gap-x-5">
            <div className="flex-col-3 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl">
              <img src="./Div [order-2].png" alt="img1" />
            </div>
            <div className="flex-col-3 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl">
              <img src="./Div [order-2].png" alt="img2" />
            </div>
            <div className="flex-col-3 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl">
              <img src="./Div [order-2].png" alt="img3" />
            </div>
            <div className="flex-col-3">
              <div className="font-inter font-semibold md:text-[30px] text-[24px] md:leading-[36px] leading-[18px] text-white mb-6">
                Lorem ipsum dolor sit <br /> amet consectetur.
              </div>
              <div className="font-inter font-normal md:text-[16px] text-[10px] md:leading-[28px] leading-[12px] text-white text-opacity-60 mb-6">
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
          <div className="flex flex-row justify-between w-full mt-16 mb-8">
            <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[24px] subheading-gradient md:leading-[50px] leading-[18px] text-white mb-6">
              Our Expertise
            </div>
            <div className="flex-col-6 font-normal text-[#A1A1AACC] md:text-[18px] md:leading-[28px]">
              With Cobalt, managing your business finances is effortless, <br />{" "}
              empowering.{" "}
              <span className="text-white">
                Say no to spreadsheets and tools designed in the 80s.
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl p-4">
            <div className="flex-col-6 my-auto">
              <button className="text-white flex-col-3 mx-6">All</button>
              <button className="flex-col-3 mx-6 text-[#A1A1AACC] hover:text-white">
                Futures & Options
              </button>
              <button className="flex-col-3 mx-6 text-[#A1A1AACC] hover:text-white">Commodity</button>
              <button className="flex-col-3 mx-6 text-[#A1A1AACC] hover:text-white">Investor</button>
            </div>
            <div className="flex-col-6 ms-auto me-6">
              <select
                name="cars"
                id="cars"
                className="text-white bg-gray-800 bg-opacity-50 rounded-xl ps-6 pe-20 py-2 border-2 border-[#4e4e4ecc]"
              >
                <option disabled>Price</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Alto</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-row my-8">
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
          <div className="mt-16 mb-8">
            <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[24px] subheading-gradient md:leading-[50px] leading-[18px] text-white mb-6">
              Top Expertise
            </div>
            <div className="flex-col-6 font-normal text-[#A1A1AACC] md:text-[18px] md:leading-[28px]">
              Empower your teams to build better processes, for a better
              workplace.
            </div>
          </div>
          <div>
            <Card />
          </div>
        </section>
        <section className="similar-interest w-full">
          <div className="mt-16 mb-8">
            <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[24px] subheading-gradient md:leading-[50px] leading-[18px] text-white mb-6">
              Similar To Your Interest
            </div>
            <div className="flex-col-6 font-normal text-[#A1A1AACC] md:text-[18px] md:leading-[28px]">
              Empower your teams to build better processes, for a better
              workplace.
            </div>
          </div>
          <div className="flex flex-row w-full justify-around">
            <div className="flex-col-4 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl">
              <img className="w-96" src="./card1.png" alt="" />
            </div>
            <div className="flex-col-4 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl">
              <img className="w-96" src="./card1.png" alt="" />
            </div>
            <div className="flex-col-4 hover:bg-[#18181B] hover:opacity[70%] rounded-2xl">
              <img className="w-96" src="./card1.png" alt="" />
            </div>
          </div>
        </section>
        <section className="our-users-say w-full">
          <div className="mt-16 mb-8 text-center">
            <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[24px] subheading-gradient md:leading-[50px] leading-[18px] text-white mb-6">
              What Our Users Say
            </div>
            <div className="flex-col-6 font-normal text-[#A1A1AACC] md:text-[18px] md:leading-[28px]">
              Empower your teams to build better processes, for a better <br /> workplace.
            </div>
          </div>
        </section>
        <section className="Users-testimonials">
          <Testimonials />
        </section>
      </div>
    </section>
  );
};

export default Expertise;
