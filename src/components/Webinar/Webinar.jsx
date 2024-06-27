import React from "react";
import styles from "../../style";
import LiveWebinar from "./LiveWebinar";

const Webinar = () => {
  return (
    <div className="expertise-Bg text-white">
      <section
        id="subscription"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-[280px] md:px-28 z-10 md:bottom-[10rem]`}
        >
          <div className="flex flex-col justify-between items-center w-full">
            <span className="font-inter font-[700] md:text-[62px] text-[36px] text-gradient md:leading-[74px] leading-[48px]">
              Webinar
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

          <div className="flex flex-col justify-center items-center w-full mt-10">
            <div className="flex md:flex-row flex-col md:justify-between items-center py-3 w-full">
              <h1 className="subheading-color text-5xl">Currently Live</h1>
              <div className="w-[600px] text-left text-[#dededeba]">
                With Cobalt, managing your business finances is effortless,
                empowering.
                <span className="text-white">
                  Say no to spreadsheets and tools designed in the 80s.
                </span>{" "}
              </div>
            </div>

            {/* <LiveWebinar /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinar;
