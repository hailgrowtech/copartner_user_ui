import React from "react";
import styles from "../../style";
import Card from "./Profile_Component";
import { Link } from "react-router-dom";
import { expertise_data } from "../../constants";
import { arrow, closeImg, telegram, userBck, stars } from "../../assets";

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
          <div className="flex flex-col items-center w-full md:mb-0">
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
          <div className="md:pt-[2rem] pt-[1rem] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:flex">
            {expertise_data.slice(0, 3).map((expert, id) => {
              return (
                <Link
                  onClick={scrollToTop}
                  to={`/ra-detail/${expert.id}`}
                  key={expert.id}
                  className="md:w-[256px] md:h-[285px] sm:w-[172px] h-[230px] gap-[3px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
                >
                  <div className="w-[72px] h-[98px] md:w-[256px] md:h-[146px]  relative profile-image_1 mb-4">
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

                  <div className="flex md:w-[212px] md:h-[26px] w-full sm:h-[22px] justify-between md:gap-0">
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
                        src={stars}
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
                        Experience
                      </span>
                      <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                        {expert.totalExp}
                      </span>
                    </div>
                    <div className="md:w-[1.4px] md:h-[25px] w-[1px] h-[22px] bg-lightWhite"></div>
                    <div className="flex">
                      <div className="flex flex-col w-[52px] h-[33px] items-center">
                        <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                          Followers
                        </span>
                        <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                          {expert.totalFollowers}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-[211px] bg-[#0081F1] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src={expert.telegram}
                        alt="Telegram"
                        className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                      />
                      <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
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

            <div className="md:w-[365px] md:h-[226px] w-[171px] h-[256px] md:px-[3rem] flex flex-col md:gap-2">
              <span className="md:w-[365px] md:h-[36px] w-[171px] h-[36px] font-[600] md:text-[30px] text-[18px] leading-[36px] text-lightWhite">
                Experience Matters
              </span>

              <span className="text-dimWhite md:w-[365px] md:h-[86px] w-[171px] h-[80px] font-[400] md:text-[16px] text-[14px] md:leading-[28px] md:leading-[21px] leading-[18px]">
                Connect with India’s leading SEBI registered Research Analysts,
                guiding you thoroughly to maximising profits in the dynamic
                world of stock trading.
              </span>
              <Link onClick={scrollToTop} to="explore-expertise">
                <button className="md:w-[147px] md:h-[40px] w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px] md:mt-12 mt-[4rem]">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full md:py-[4rem] py-[30px]">
          <div className={`{styles.flexStart} flex-col gap-2 xl:px-0`}>
            <div className="flex flex-row md:h-[52px] h-[34px] justify-center md:justify-between items-center">
              <span
                className="font-inter font-[700] md:text-[50px] text-[30px]
                    text-gradient-2 leading-[51px]"
              >
                Our Expertise
              </span>
            </div>

            <p
              className="font-inter md:w-[1136px] md:h-[28px] sm:w-[328px] h-[34px] font-[400] text-dimWhite sm:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                 leading-[16px] sm:text-start mt-2 text-center"
            >
              Dive into the expertise of our SEBI registered research analysts,
              guiding you towards trading success with precision and insight.
            </p>
          </div>
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl p-3 mt-6">
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

          <div className="flex p-[1rem] gap-[1rem] sm:p-[4rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-1 md:ml-0 ml-[-5px] md:mt-[-2rem]">
            {expertise_data.map((expert, id) => {
              return (
                <Link
                  onClick={scrollToTop}
                  to={`/ra-detail/${expert.id}`}
                  key={expert.id}
                  className="md:w-[384px] md:h-[400px] sm:w-[172px] h-[270px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
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
                    <div className="flex flex-col h-[22px] w-full md:h-[40px] gap-2">
                      <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                        {expert.name}
                      </span>
                      <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                        {expert.title}
                      </span>
                    </div>
                    <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
                      <img
                        src={expert.ratingIcon}
                        className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                        alt="rating"
                      />
                      <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[10px] leading-[10px]">
                        {expert.rating}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[256px] w-[143px] h-[34px] flex items-start md:mt-4 mt-4 justify-between">
                    <div className="flex flex-col md:w-[78px] w-[43px] h-[22px] items-center justify-between">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                        {expert.experience}
                      </span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                        {expert.totalExp}
                      </span>
                    </div>
                    <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                    <div className="flex">
                      <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                        <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                          {expert.followers}
                        </span>
                        <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                          {expert.totalFollowers}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-[300px] md:h-[32px] md:mt-2 w-full md:pl-[5px]">
                    <div className="text-dimWhite md:text-[14px] flex md:flex-row flex-col text-[11px] md:leading-[18px] leading-[14px] md:pl-0 pl-[2px]">
                      <span>SEBI:</span>{" "}
                      <span className="text-white md:ml-2">
                        {expert.content}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[211px] bg-[#0081F1] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src={expert.telegram}
                        alt="Telegram"
                        className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                      />
                      <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
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
          </div>
        </section>

        <section className="md:mt-[-3rem]">
          <div className={`{styles.flexStart} flex-col gap-2 xl:px-0`}>
            <div className="flex flex-row md:h-[52px] h-[34px] justify-center md:justify-between items-center">
              <span
                className="font-inter font-[700] md:text-[50px] text-[30px]
                    text-gradient-2 leading-[51px]"
              >
                Top Expertise
              </span>
            </div>

            <p
              className="font-inter md:w-[1136px] md:h-[28px] sm:w-[328px] h-[34px] font-[400] text-dimWhite sm:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                 leading-[16px] sm:text-start mt-2 text-center"
            >
              Access top-tier, highly skilled SEBI Registered experts for
              unparalleled trading guidance.
            </p>
          </div>
          <div className="flex p-[1rem] gap-[1rem] sm:p-[4rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-1 md:ml-0 ml-[-5px] md:mt-[-2rem]">
            {expertise_data.map((expert, id) => {
              return (
                <Link
                  onClick={scrollToTop}
                  to={`/ra-detail/${expert.id}`}
                  key={expert.id}
                  className="md:w-[384px] md:h-[400px] sm:w-[172px] h-[270px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
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
                    <div className="flex flex-col h-[22px] w-full md:h-[40px] gap-2">
                      <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                        {expert.name}
                      </span>
                      <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                        {expert.title}
                      </span>
                    </div>
                    <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
                      <img
                        src={expert.ratingIcon}
                        className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                        alt="rating"
                      />
                      <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[10px] leading-[10px]">
                        {expert.rating}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[256px] w-[143px] h-[34px] flex items-start md:mt-2 mt-4 justify-between">
                    <div className="flex flex-col md:w-[78px] w-[43px] h-[22px] items-center justify-between">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                        {expert.experience}
                      </span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                        {expert.totalExp}
                      </span>
                    </div>
                    <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                    <div className="flex">
                      <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                        <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                          {expert.followers}
                        </span>
                        <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                          {expert.totalFollowers}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-[300px] md:h-[32px] md:mt-2 w-full md:pl-[5px]">
                    <div className="text-dimWhite md:text-[14px] flex md:flex-row flex-col text-[11px] md:leading-[18px] leading-[14px] md:pl-0 pl-[2px]">
                      <span>SEBI:</span>{" "}
                      <span className="text-white md:ml-2">
                        {expert.content}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[211px] bg-[#0081F1] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src={expert.telegram}
                        alt="Telegram"
                        className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                      />
                      <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
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
          </div>
        </section>
        <section>
          <div className="mt-6 md:text-left text-center">
            <div className="font-inter font-bold md:text-[50px] text-[30px] subheading-gradient md:leading-[50px] leading-[51px] text-white md:mb-2">
              Similar To Your Interest
            </div>
            <div className="font-normal text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] leading-[17px]">
              Discover related analysts with similar expertise to enhance your
              trading decisions and broaden your market insights.
            </div>
          </div>
          <div className="flex p-[1rem] md:gap-[1rem] sm:gap-[1rem] sm:p-[4rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-1 md:ml-0 ml-[-5px] md:mt-[-2rem]">
            {expertise_data.map((expert, id) => {
              return (
                <Link
                  onClick={scrollToTop}
                  to={`/ra-detail/${expert.id}`}
                  key={expert.id}
                  className="md:w-[384px] md:h-[400px] sm:w-[172px] h-[270px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
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
                    <div className="flex flex-col h-[22px] w-full md:h-[40px] gap-2">
                      <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                        {expert.name}
                      </span>
                      <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                        {expert.title}
                      </span>
                    </div>
                    <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
                      <img
                        src={expert.ratingIcon}
                        className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                        alt="rating"
                      />
                      <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[10px] leading-[10px]">
                        {expert.rating}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[256px] w-[143px] h-[34px] flex items-start md:mt-2 mt-4 justify-between">
                    <div className="flex flex-col md:w-[78px] w-[43px] h-[22px] items-center justify-between">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                        {expert.experience}
                      </span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                        {expert.totalExp}
                      </span>
                    </div>
                    <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                    <div className="flex">
                      <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                        <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                          {expert.followers}
                        </span>
                        <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                          {expert.totalFollowers}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-[300px] md:h-[32px] md:mt-2 w-full md:pl-[5px]">
                    <div className="text-dimWhite md:text-[14px] flex md:flex-row flex-col text-[11px] md:leading-[18px] leading-[14px] md:pl-0 pl-[2px]">
                      <span>SEBI:</span>{" "}
                      <span className="text-white md:ml-2">
                        {expert.content}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[211px] md:h-[40px] bg-[#0081F1] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src={expert.telegram}
                        alt="Telegram"
                        className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                      />
                      <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
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
          </div>
        </section>
      </div>
    </section>
  );
};

export default Expertise;
