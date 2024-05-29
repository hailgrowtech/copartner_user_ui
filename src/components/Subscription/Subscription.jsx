import React from "react";
import styles from "../../style";
import ProfileCard from "./Profile_Card";
import "../Hero.css";
import { Link } from "react-router-dom";
import { useUserData } from "../../constants/context";
import { arrow, stars, telegram, userBck, logout } from "../../assets";

const Subscription = ({userId}) => {
  const userData = useUserData();

  const getExpertType = (typeId) => {
    switch (typeId) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Options";
      default:
        return "Unknown";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const token = sessionStorage.getItem("userId");
  
  return (
    <div className="expertise-Bg">
      <section
        id="subscription"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:bottom-[10rem] text-center`}
        >
          <div className="justify-between items-center w-full">
            <span className="font-inter font-[700] md:text-[62px] text-[36px] text-gradient md:leading-[74px] leading-[48px]">
              Explore Our <br /> Premium Groups
            </span>
            <p className="mt-2 text-center text-dimWhite md:text-[18px] text-[13px] md:block hidden">
              Access premium insights from our expert team, guiding you
              <br />
              towards successful trades and informed decisions in the markets.
            </p>

            <p className="text-center text-dimWhite md:text-xl text-[13px] md:hidden">
              Take your team up a level with easy-to-use tools, effortless{" "}
              templates, and efficient workflows.
            </p>
          </div>
        </div>
      </section>

      <div className={`{styles.flexStart} flex-col gap-2 ${styles.paddingX}`}>
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
        <div className="flex flex-row justify-center">
          { token ? <ProfileCard userId={userId} /> : <div className="text-center flex flex-col gap-8 mt-12 text-dimWhite md:text-4xl text-lg"><img className="md:w-96 w-60 mx-auto" src={logout} alt="" /><Link to={"/signup"}>Login to see your Subscriptions!</Link></div>}
        </div>
      </div>

      {/* <section className="text-white py-5">
        <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-3 md:px-[80px]">
          <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6">
            Continue Course
          </div>
          <div className="flex-col-6 font-normal md:text-left text-center text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
            Dive into the expertise of our{" "}
            <span className="text-white">
              Ready to resume your journey towards mastering the markets?
              <br /> Dive back into our comprehensive course and pick up right
              where you left off.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row justify-center mx-auto w-full md:w-3/3 mb-8">
          <div className="md:block hidden">
            <ContinueCards />
          </div>
        </div>

        <div className="flex md:flex-row justify-center mx-auto w-full md:w-3/3 mb-8">
          <div className="md:hidden">
            <ContinueCardsCarousel />
          </div>
        </div>
      </section> */}

      <div
        className={`flex flex-col sm:py-[4rem] py-[30px] ${styles.paddingX}`}
      >
        <div className={`{styles.flexStart} flex-col gap-2 xl:px-0`}>
          <div className="flex flex-row md:h-[52px] h-[34px] md:justify-between items-center">
            <span
              className="font-inter font-[700] md:text-[50px] text-[30px]
              text-gradient-2 md:leading-[51px] md:ml-0 ml-2"
            >
              Similar To Your Interest
            </span>
          </div>

          <p
            className="font-inter md:w-[1136px] md:h-[28px] sm:w-[328px] h-[34px] font-[400] text-dimWhite sm:text-[18px] text-[13px] md:leading-[28px] sm:leading-[17px]
                 leading-[16px] sm:text-start mt-2 text-center"
          >
            Discover related analysts with similar expertise to enhance your trading decisions and broaden your market insights.
          </p>
        </div>

        <div className="flex p-[1rem] gap-[1rem] sm:p-[4rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-1 md:ml-0 ml-[-5px] md:mt-[-2rem]">
          {userData &&
            userData.map((expert, id) => {
              return (
                <Link
                  onClick={scrollToTop}
                  to={`/ra-detail/${expert.id}`}
                  key={expert.id}
                  className="md:w-[384px] md:h-[400px] sm:w-[172px] h-[270px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
                >
                  <div className="w-[72px] h-[98px] sm:w-[384px] sm:h-[219px]  relative profile-image_1 mb-4">
                    <img
                      src={userBck}
                      alt="background"
                      className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                    />
                    <img
                      src={expert.expertImagePath}
                      alt="User"
                      className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                    />
                  </div>

                  <div className="w-[154px] h-[22px] sm:w-[319px] sm:h-[40px] flex justify-between px-[5px] sm:px-[1rem]">
                    <div className="flex flex-col h-[22px] w-full md:h-[40px] gap-2">
                      <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                        {expert.channelName}
                      </span>
                      <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                        {expert.name} - {getExpertType(expert.expertTypeId)}
                      </span>
                    </div>
                    <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
                      <img
                        src={stars}
                        className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                        alt="rating"
                      />
                      <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[10px] leading-[10px]">
                        {expert.rating}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[256px] w-[143px] h-[44px] flex items-start md:mt-2 mt-4 justify-between">
                    <div className="flex flex-col md:w-[78px] w-[43px] h-[22px] items-center justify-between">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                        Experience
                      </span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                        {expert.experience}+
                      </span>
                    </div>
                    <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                    <div className="flex">
                      <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                        <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                          Followers
                        </span>
                        <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                          {`${expert.telegramFollower / 1000}k`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-[300px] md:h-[32px] md:mt-2 w-full md:pl-[5px]">
                    <div className="text-dimWhite md:text-[14px] flex md:flex-row flex-col text-[11px] md:leading-[18px] leading-[14px] md:pl-0 pl-[2px]">
                      <span>SEBI:</span>{" "}
                      <span className="text-white md:ml-2">
                        {expert.sebiRegNo}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-[211px] md:h-[40px] bg-[#0081F1] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0">
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src={telegram}
                        alt="Telegram"
                        className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                      />
                      <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
                        {/* {expert.greet} */}
                        Get Free Calls
                      </button>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      {/* <section
        className={`${styles.emptySection} w-full text-center md:px-16 md:my-12 text-white`}
      >
        <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-1 md:px-[50px]">
          <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6">
            Course By Expertise
          </div>
          <div className="flex-col-6 font-normal md:text-left text-center text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
            Dive into the expertise of our{" "}
            <span className="text-white">
              Uncover trading secrets with courses led by <br /> SEBI Registered
              research analysts.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row justify-center mx-auto w-full md:w-3/3 mb-8">
          <div className="md:block hidden">
            <CourseList />
          </div>
          <div className="md:hidden">
            <CourseCardsCarousel />
          </div>
        </div>
        <Link to="/courses/explore-courses">
          <button className="bg-white rounded-md hover:bg-white text-base text-black py-2 px-8">
            Explore More
          </button>
        </Link>
      </section> */}

      {/* <section className={`w-full md:px-5 text-white`}>
      <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-1 md:px-50">
       <div className="flex-col-6 text-left font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6 md:mx-[10rem]">
            Course By Expertise
          </div>
          <span className="md:w-[508px] md:h-[84px] flex-col-6 font-normal md:text-left text-center text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
            Great job completing your course! Keep an eye on your inbox for a
            detailed summary of <span className="text-lightWhite">
            your progress and valuable insights to continue
            your trading journey with confidence.
            </span>
          </span>
        </div>
        <div className="flex justify-center">
          <div className="md:block hidden">
            <CompletedCards />
          </div>
        </div>
        <div className="flex md:flex-row justify-center mx-auto w-full md:w-3/3 mb-8">
          <div className="md:hidden">
            <CompletedCardsCarousel />
          </div>
        </div>
      </section> */}

      {/* New section */}
      <section className="w-full text-center md:px-16 md:mb-12"></section>
    </div>
  );
};

export default Subscription;
