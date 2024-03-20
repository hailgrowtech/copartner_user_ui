import React from "react";
import styles from "../style";
import Card from "./Profile_Component";
import CourseList from "./CourseList";
import ProfileCard from "./Profile_Card";
import RetroCards from "./RetroCards";

const Subscription = () => {
  return (
    <>
      <section
        id="subscription"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:bottom-[10rem] text-center`}
        >
          <div className="justify-between items-center w-full">
            <span
              className="flex-1 font-poppins font-semibold md:text-[62px] text-[36px]
      text-gradient md:leading-[84px] leading-[48px]"
            >
              Your Team, <br /> reimagined.
            </span>
            <p className="mt-4 text-center">
              Take your team up a level with easy-to-use tools, effortless{" "}
              <br /> templates, and efficient workflows.
            </p>
          </div>
        </div>
            {" "}
      </section>

      <section className="Our-expertise w-full text-center md:px-16 md:mb-12">
        <h2 className="font-inter md:text-[50px] text-[30px] md:leading-[50px] text-left leading-[51px] md:mb-6 px-4 subheading-color">
          Our Expertise
        </h2>
        <p className="font-normal text-[#A1A1AACC] md:text-[18px] text-left text-[11px] md:leading-[28px] leading-[17px] mb-8 px-4">
          Empower your teams to build better processes, for a better workplace.
        </p>
        <ProfileCard />
      </section>

      <section className={`${styles.emptySection} w-full md:px-16 text-white`}>
      <div className="mb-4 md:mb-8">
          <div className="md:mr-4">
            <h2 className="font-semibold text-xl md:text-5xl pb-4 subheading-color">
            Similar Your Interest Expertises
            </h2>
          </div>
          <div className="font-normal text-[#A1A1AACC] text-left md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
          Empower your teams to build better processes, for a better workplace.
          </div>
        </div>
        <Card />
      </section>

      <section
        className={`${styles.emptySection} w-full text-center md:px-16 md:my-12 text-white`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-0">
          <div className="md:mr-4">
            <h2 className="font-semibold text-xl md:text-5xl pl-5 pb-4 subheading-color">
            Course By Expertise
            </h2>
          </div>
          <div className="flex-col-6 font-normal text-[#A1A1AACC] text-left md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
            With Cobalt, managing your business finances is  effortless, <br /> and empowering
            <span className="text-white">
              . Say no to spreadsheets and tools designed in the 80s.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row justify-center mx-auto w-full md:w-3/3 mb-8">
          <CourseList />
        </div>
        <button className="bg-white rounded-md hover:bg-white text-base text-black py-2 px-8">
          Explore More
        </button>
      </section>      

      <section className="text-white">
        <h2>Course By Expertise</h2>

        <div className="flex md:flex-row justify-center mx-auto w-full md:w-3/3">
          <RetroCards />
        </div>
      </section>
      <section className={styles.emptySection}>
        <h2>Course By Expertise</h2>
      </section>
    </>
  );
};

export default Subscription;
