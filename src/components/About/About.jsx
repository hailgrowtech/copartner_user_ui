import React from "react";
import styles from "../../style";
import { about_us } from "../../assets";
import { mission_vision, aboutUs_data } from "../../constants";
import FAQs from "./FAQs";
import Testimonials from "../Home/Testimonials";

const About = () => {
  return (
    <div
      className={`flex md:flex-col flex-col ${styles.paddingY} md:px-[7rem] px-0 expertise-Bg`}
    >
      <div className="flex flex-col md:gap-[2rem] gap-[1rem]">
        <div className="flex md:flex-row items-center flex-col justify-center gap-[1rem]">
          <div className={`flex-col text-center md:gap-[2rem] gap-0`}>
            <div className="flex flex-col justify-between items-center">
              <span className="font-poppins font-[700] md:text-[72px] text-[44px] text-gradient md:leading-[84px] leading-[48px]">
                Invest, Learn and <br /> Earn
              </span>

              <p className="md:w-[702px] md:h-[56px] w-[341px] h-[32px] font-inter font-[500] mt-4 text-lightWhite md:text-[18px] text-[12px] md:leading-[28px] leading-[16px]">
                Get partnered with our SEBI Registered Research Analysts to
                start your profitable trading journey.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center md:mt-[0rem] mt-[1rem]">
          <img
            src={about_us}
            alt="About_Us"
            className="md:w-[596px] md:h-[320px] w-[425px] h-[215px]"
          />
          <div className="md:w-[570px] md:h-[196px] flex flex-col justify-center items-center md:text-start text-center">
            <span className="md:w-[570px] md:h-[72px] w-[380px] h-[50px] font-inter font-[600] md:text-[30px] text-[16px] text-lightWhite md:leading-[36px] leading-[20px] md:px-0 px-[8px]">
              WELCOME TO COPARTNER
            </span>
            <span className="md:w-[570px] md:h-[144px] w-[380px] h-[180px] font-inter font-[500] md:text-[16px] text-[12px] text-dimWhite leading-[24px] md:px-0 px-[8px]">
              Welcome to Copartner, where traders and analysts unite to redefine
              the stock market experience. Whether you're a new trader seeking
              expert insights or an analyst looking to showcase your expertise,
              our platform is your gateway to success. Join our vibrant
              community, where collaboration, knowledge sharing and financial
              growth thrive. Get ready to embark on a journey of discovery,
              empowerment and endless possibilities.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] py-[2rem]">
          <div className="flex flex-col md:flex-start md:items-start flex-center items-center">
            <span className="md:w-[385px] h-[52px] font-inter font-[700] md:text-[50px] text-[30px] text-gradient-2 leading-[51px]">
              Mission & Vision
            </span>
            <span className="md:w-[1190px] md:h-[56px] w-[328px] h-[34px] font-[400] md:text-[18px] text-[12px] md:leading-[28px] leading-[17px] text-dimWhite md:text-start text-center">
              We're dedicated to helping traders and analysts succeed through
              our platform, while also aiming to transform the stock market
              landscape by creating a supportive community focused on sharing
              knowledge and achieving financial goals.
            </span>
          </div>

          <div className="flex flex-col md:py-0 py-[2rem]">
            {mission_vision.map((mission) => {
              return (
                <div
                  key={mission.id}
                  className={`md:w-[1280px] md:h-[500px] flex`}
                >
                  <div
                    className={`flex items-center gap-[1rem] ${
                      mission.id % 2 === 0
                        ? "md:flex-row-reverse"
                        : "md:flex-row"
                    } flex-col`}
                  >
                    <img
                      src={mission.image}
                      alt="MISSION_IMAGE"
                      className="md:w-[545px] md:h-[500px] w-[245px] h-[200px]"
                    />
                    {/* <div className="w-[1px] h-[180px] bg-white"></div> */}
                    <div className="flex flex-col md:w-[655px] md:h-[198px] w-[400px] h-[170px] md:px-[1rem] md:text-start text-center justify-evenly">
                      <span className="md:w-[615px] md:h-[48px] w-[390px] font-inter font-[500] md:text-[32px] text-[24px] text-lightWhite md:leading-[48px] leading-[24px]">
                        {mission.title}
                      </span>
                      <span className="md:w-[615px] md:h-[140px] w-[390px] font-inter font-[400] md:text-[15px] text-[12px] text-dimWhite md:leading-[28px] leading-[16px] md:px-0 px-[10px]">
                        {mission.des}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:py-[6rem]">
          <span className="md:w-[208px] h-[52px] font-inter font-[700] md:text-[50px] text-[30px] text-gradient-2 leading-[51px] md:text-start text-center">
            Features
          </span>
          <span className="md:w-[615px] md:h-[28px] w-[398px] h-[34px] font-[400] md:text-[18px] text-[12px] md:leading-[28px] leading-[17px] text-dimWhite md:text-start text-center">
            Empower your teams to build better processes, for a better
            workplace.
          </span>

          <div className="md:w-[1076px] md:h-[380px] w-[337px] h-[1170px] md:gap-[5rem] gap-[1rem] flex flex-col sm:flex-row md:py-[2rem] py-[1rem] mx-auto">
            {aboutUs_data.map((aboutus) => (
              <div
                key={aboutus.id}
                className="flex flex-col gap-[1rem] py-[8px] items-center md:w-[337px] md:h-[393px] w-[335px] h-[338px] rounded-[11px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <img
                  src={aboutus.img}
                  alt="STOCK_IMAGES"
                  className="md:w-[289px] md:h-[151px] w-[288px] h-[150px]"
                />
                <div className="flex flex-col gap-[1rem]">
                  <span className="text-lightWhite md:w-[190px] md:h-[27px] w-[164px] h-[27px] font-[600] md:text-[20px] text-[18px] leading-[27px] md:text-start text-left">
                    {aboutus.title}
                  </span>
                  <span className="text-dimWhite w-[257px] h-[96px] text-[16px] font-[400] leading-[24px] text-left">
                    {aboutus.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <FAQs />
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
