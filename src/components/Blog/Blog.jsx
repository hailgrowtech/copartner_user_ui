import React from "react";
import styles from "../../style";
import BlogGrid from "./BlogGrid";

const Blog = () => {
  return (
    <section id="" className={`flex flex-col ${styles.paddingY} `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:bottom-[10rem] text-center`}
      >
        <div className="justify-between items-center w-full">
          <span className="flex-1 font-poppins font-semibold md:text-[62px] text-[36px] text-gradient md:leading-[84px] leading-[48px]">
            Your team, <br /> reimagined.
          </span>
          <p className="mt-4 text-center text-white md:text-xl text-sm md:block hidden">
            Take your team up a level with easy-to-use tools, effortless
            <br />
            towards successful templates and efficient workflows.
          </p>

          <p className="mt-4 text-center text-white md:text-xl text-sm md:hidden">
            Take your team up a level with easy-to-use tools, effortless{" "}
            templates, and efficient workflows.
          </p>
        </div>
      </div>

      <section className=" w-full text-center md:px-16 md:mb-12 mt-20">
        <h2 className="md:text-[50px] text-[30px] md:leading-[50px] text-left leading-[51px] md:mb-6 px-4 subheading-color">
          Our Expertise
        </h2>
        <p className="font-normal text-[#A1A1AACC] md:text-[18px] text-left text-[11px] md:leading-[28px] leading-[17px] mb-8 px-4">
          Dive into the expertise of our SEBI registered research analysts,
          guiding you towards trading success with precision and insight.
        </p>
        <BlogGrid />
      </section>
    </section>
  );
};

export default Blog;
