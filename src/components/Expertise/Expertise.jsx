import React from "react";
import styles from "../../style";
import Card from "./Profile_Component";
import { Link } from "react-router-dom";
import { expertise_data } from "../../constants";

const Expertise = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`flex md:flex-row flex-col md:px-0 px-3 ${styles.paddingY} expertise-Bg`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-28 z-10 md:bottom-[10rem]`}
      >
        <section className="w-full">
          <div className="flex flex-col items-center w-full">
            <span
              className="font-inter font-[700] md:text-[72px] text-[36px]
      text-gradient md:leading-[88px] leading-[44px] text-center md:mb-2 mb-2"
            >
              Analyst Expertise Across <br /> Market Segments
            </span>

            <span
              className="font-inter md:text-xl text-[13px]
      text-dimWhite md:leading-[28px] leading-[16px] text-center"
            >
              Take your team up a level with easy-to-use tools, effortless{" "}
              <br />
              templates and efficient workflows.
            </span>
          </div>
          <div className="md:flex md:flex-row grid grid-cols-2 justify-between items-center w-full md:pt-6 md:gap-x-6 gap-3">
          {expertise_data.slice(0, 3).map((expert, id) => {
              return (
                <div
                  key={expert.id}
                  className="md:w-[256px] md:h-[285px] w-[172px] h-[230px] gap-[3px] rounded-[11px] p-3 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
                >
                  <Link onClick={scrollToTop} to="/subscription/buy">
                    <div className="w-[72px] h-[98px] md:w-[256px] md:h-[146px] relative profile-image_1 mb-4">
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

                    <div className="flex md:w-[212px] md:h-[26px] sm:w-[157px] sm:h-[22px] justify-between md:gap-0 gap-[2.2rem]">
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] leading-[12px] font-[500] text-white">
                          {expert.name}
                        </span>
                        <span className="text-[12px] leading-[10px] font-[400] text-dimWhite">
                          {expert.title}
                        </span>
                      </div>
                      <div className="w-[32px] h-[15px] flex">
                        <img
                          src={expert.ratingIcon}
                          className="w-[11.5px] h-[11.5px]"
                          alt="rating"
                        />
                        <span className="text-white font-[600] text-[11.5px] leading-[14px]">
                          {expert.rating}
                        </span>
                      </div>
                    </div>

                    <div className="md:w-[171px] md:h-[33px] w-[125px] h-[23px] flex justify-between mr-[1rem] mt-2">
                      <div className="flex flex-col w-[52px] h-[33px] items-center">
                        <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                          {expert.experience}
                        </span>
                        <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                          {expert.totalExp}
                        </span>
                      </div>
                      <div className="md:w-[1.4px] md:h-[25px] w-[1px] h-[22px] bg-lightWhite"></div>
                      <div className="flex">
                        <div className="flex flex-col w-[52px] h-[33px] items-center">
                          <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                            {expert.followers}
                          </span>
                          <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                            {expert.totalFollowers}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="md:w-[140px] md:h-[26px] w-[146px] h-[32px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src={expert.telegram}
                        alt="Telegram"
                        className="w-[16px] h-[16px]"
                      />
                      <button
                        onClick={() => console.log("clicked")}
                        className="text-white font-[400] text-[10px] leading-[19px]"
                      >
                        {expert.greet}
                      </button>
                      <img
                        src={expert.arrowIcon}
                        alt="arrow"
                        className="w-[11px] h-[11px]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex-col-3 mx-auto md:w-2/4">
              <div className="font-inter font-semibold md:text-[30px] text-[18px] md:leading-[36px] leading-[18px] text-white md:mb-6 mb-2">
                Experience Matters
              </div>
              <div className="font-inter font-normal md:text-[16px] text-[10px] md:leading-[28px] leading-[12px] text-white text-opacity-60 md:mb-6 mb-4">
                Connect with India’s leading SEBI registered Research Analysts,
                guiding you thoroughly to maximising profits in the dynamic
                world of stock trading.
              </div>
              <Link
                onClick={scrollToTop}
                to="explore-expertise"
                className="font-inter text-black font-semibold bg-[#FFFFFF] md:text-[14px] text-[10px] md:leading-[16px] leading-[12px] p-2 rounded border-[#000000]-950 border-2"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>
        <section className="Our-expertise w-full">
          <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-3">
            <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-gradient md:leading-[50px] leading-[51px] text-white md:mb-6">
              Our Expertise
            </div>
            <div className="flex-col-6 font-normal md:text-left text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] leading-[17px]">
              Dive into the expertise of our{" "}
              <span className="text-white">
                SEBI registered research analysts, guiding you towards
                trading success with precision and insight.
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl p-3">
            <div className="md:flex-col-6 md:text-[16px] text-[10px] flex flex-row my-auto">
              <button className="text-white md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px]">
                All
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-dimWhite hover:text-white">
                Futures & Options
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-dimWhite hover:text-white">
                Commodity
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-dimWhite hover:text-white">
                Investor
              </button>
            </div>
            <div className="md:flex-col-6 ms-auto flex flex-row">
              <select
                name="cars"
                id="cars"
                className="text-white bg-gray-800 bg-opacity-50 rounded-lg md:text-[16px] text-[10px] md:ps-1 ps-2 md:pe-20 md:py-2 py-1 border-2 border-[#4e4e4ecc]"
              >
                <option disabled>Price</option>
                <option value="volvo">High-to-Low</option>
                <option value="saab">Low-to-High</option>
                <option value="saab">Top Rated</option>
              </select>
            </div>
          </div>
          <div className="w-full md:flex hidden md:flex-row my-8">
            <Card />
          </div>
        </section>
        <section className="top-expertise w-full">
          <div className="mt-16 mb-8 md:text-left text-center">
            <div className="font-inter font-bold md:text-[50px] text-[30px] subheading-gradient md:leading-[50px] leading-[51px] text-white md:mb-6">
              Top Expertise
            </div>
            <div className="font-normal text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] leading-[17px]">
              Access top-tier, highly skilled SEBI Registered experts for
              unparalleled trading guidance.
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
            <div className="font-normal text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] leading-[17px]">
              Discover related analysts with similar expertise to enhance your
              trading decisions and broaden your market insights.
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
