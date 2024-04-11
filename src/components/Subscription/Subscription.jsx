import React from "react";
import styles from "../../style";
import Card from "./Profile_Component";
import CourseList from "./CourseList";
import ProfileCard from "./Profile_Card";
// import ContinueCards from "./ContinueCards";
// import CompletedCards from "./CompletedCards";
// import ContinueCardsCarousel from "./ContinueCardsCarousel ";
// import CompletedCardsCarousel from "./CompletedCardsCarousel";
import CourseCardsCarousel from "./CourseCardsCarousel";
import "../Hero.css";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="background-img-div">
      <section
        id="subscription"
        className={`flex md:flex-row flex-col ${styles.paddingY} `}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:bottom-[10rem] text-center`}
        >
          <div className="justify-between items-center w-full">
            <span className="flex-1 font-poppins font-semibold md:text-[62px] text-[36px] text-gradient md:leading-[84px] leading-[48px]">
              Explore Our <br /> Premium Groups
            </span>
            <p className="mt-4 text-center text-white md:text-xl text-sm md:block hidden">
              Access premium insights from our expert team, guiding you
              <br />
              towards successful trades and informed decisions in the markets.
            </p>

            <p className="mt-4 text-center text-white md:text-xl text-sm md:hidden">
              Take your team up a level with easy-to-use tools, effortless{" "}
              templates, and efficient workflows.
            </p>
          </div>
        </div>
      </section>

      <section className=" w-full text-center md:px-16 md:mb-12">
        <h2 className="md:text-[50px] text-[30px] md:leading-[50px] text-left leading-[51px] md:mb-6 px-4 subheading-color">
          Our Expertise
        </h2>
        <p className="font-normal text-[#A1A1AACC] md:text-[18px] text-left text-[11px] md:leading-[28px] leading-[17px] mb-8 px-4">
          Dive into the expertise of our SEBI registered research analysts,
          guiding you towards trading success with precision and insight.
        </p>
        <div className="md:px-10 flex flex-row justify-center">
          <ProfileCard />
        </div>
      </section>

      {/* <section className="text-white py-5">
        <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-3 md:px-[80px]">
          <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6">
            Continue Course
          </div>
          <div className="flex-col-6 font-normal md:text-left text-center text-[#A1A1AACC] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
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

      <section className={`${styles.emptySection} w-full md:px-20 text-white`}>
        <div className="mb-4 md:mb-8">
          <h2 className="font-semibold text-4xl text-center md:text-left md:text-5xl pb-4 subheading-color">
            Similar Your Interest Expertises
          </h2>
          <p className="font-normal text-[#A1A1AACC] md:px-[2px] px-[10px] text-center md:text-left md:text-[18px] text-[14px] md:leading-[28px] leading-[17px]">
            Discover related analysts with similar expertise to enhance your
            trading decisions and broaden your market insights.
          </p>
        </div>
        <div className="flex justify-center">
          <Card />
        </div>
      </section>

      <section
        className={`${styles.emptySection} w-full text-center md:px-16 md:my-12 text-white`}
      >
        <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-1 md:px-[50px]">
          <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6">
            Course By Expertise
          </div>
          <div className="flex-col-6 font-normal md:text-left text-center text-[#A1A1AACC] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
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
      </section>

      {/* <section className={`w-full md:px-5 text-white`}>
      <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-1 md:px-50">
       <div className="flex-col-6 text-left font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6 md:mx-[10rem]">
            Course By Expertise
          </div>
          <span className="md:w-[508px] md:h-[84px] flex-col-6 font-normal md:text-left text-center text-[#A1A1AACC] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
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
       <section className="w-full text-center md:px-16 md:mb-12">
       
      </section>
    </div>
    
  );
};

export default Subscription;
