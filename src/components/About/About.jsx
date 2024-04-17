import React, { useState, useEffect } from "react";
import styles from "../../style";
import { about_us } from "../../assets";
import { mission_vision, aboutUs_data, faq_data } from "../../constants";
import Testimonials from "../Home/Testimonials";
import { Link } from "react-router-dom";

const About = () => {
  const [expandedId, setExpandedId] = useState(1);

  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleAccordion = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div
      className={`flex md:flex-col flex-col ${styles.paddingY} md:px-[7rem] px-[16px] expertise-Bg`}
    >
      <div className="flex flex-col md:gap-[2rem] gap-[1rem]">
        <div className="flex md:flex-row items-center flex-col justify-center gap-[1rem]">
          <div className={`flex-col text-center md:gap-[2rem] gap-0`}>
            <div className="flex flex-col justify-between items-center">
              <span className="font-poppins font-[700] md:text-[72px] text-[44px] text-gradient md:leading-[84px] leading-[48px]">
                Invest, Learn and Earn
              </span>

              <p className="md:w-[702px] md:h-[56px] w-[341px] h-[32px] font-inter font-[500] mt-4 text-dimWhite md:text-[18px] text-[14px] md:leading-[28px] leading-[16px]">
                Get partnered with our SEBI Registered Research Analysts to
                start your profitable trading journey.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center md:mt-[0rem] mt-[-1rem]">
          <img
            src={about_us}
            alt="About_Us"
            className="md:w-[596px] md:h-[320px] w-[325px] h-[185px]"
          />
          <div className="md:w-[570px] md:h-[196px] flex flex-col justify-center items-center text-start">
            <span className="md:w-[570px] md:h-[72px] w-[380px] h-[30px] font-inter font-[600] md:text-[30px] md:text-[16px] text-[18px] text-lightWhite md:leading-[36px] leading-[20px] md:px-0 md:px-[8px] px-[20px]">
              WELCOME TO COPARTNER
            </span>
            <span className="md:w-[570px] md:h-[144px] w-[380px] h-[180px] font-inter font-[500] md:text-[16px] text-[14px] text-dimWhite md:leading-[24px] leading-[21px] md:px-0 md:px-[8px] px-[20px]">
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

        <div className="flex flex-col md:gap-[2rem] md:py-[2rem] md:mt-0 mt-[2rem] md:px-0 px-2">
          <div className="flex flex-col md:flex-start items-start flex-center">
            <span className="md:w-[385px] h-[52px] font-inter font-[700] md:text-[50px] text-[30px] text-gradient-2 leading-[51px]">
              Mission & Vission
            </span>
            <span className="md:w-[1190px] md:h-[56px] w-[328px] h-[95px] font-[400] md:text-[18px] text-[14px] md:leading-[28px] leading-[20px] text-dimWhite text-start">
              We're dedicated to helping traders and analysts succeed through
              our platform, while also aiming to transform the stock market
              landscape by creating a supportive community focused on sharing
              knowledge and achieving financial goals.
            </span>
          </div>

          <div className="flex flex-col md:gap-0 gap-4 md:py-0 py-[2rem]">
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
                      className="md:w-[505px] md:h-[450px] w-[340px] h-[240px]"
                    />
                    <div className="w-[1px] h-[180px] bg-white md:flex hidden"></div>
                    <div className="flex flex-col md:px-[1rem] text-start gap-2">
                      <span className="font-inter font-[500] md:text-[32px] text-[24px] text-lightWhite md:leading-[48px] leading-[24px] md:px-0 px-2">
                        {mission.title}
                      </span>
                      <span className=" font-inter font-[400] md:text-[15px] text-[14px] text-dimWhite md:leading-[28px] leading-[20px] md:px-0 px-[10px]">
                        {mission.des}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:py-[4rem] md:px-0 px-4"> 
          <span className="md:w-[208px] h-[52px] font-inter font-[700] md:text-[50px] text-[30px] text-gradient-2 leading-[51px] text-start">
            Features
          </span>
          <span className="md:w-[615px] md:h-[28px] w-[358px] h-[34px] font-[400] md:text-[18px] text-[14px] md:leading-[28px] leading-[17px] text-dimWhite text-start">
            Empower your teams to build better processes, for a better
            workplace.
          </span>

          <div className="md:w-[1076px] md:max-h-[580px] w-[337px] md:gap-[5rem] gap-[1rem] flex flex-col sm:flex-row md:mt-[6rem] md:py-0 py-[2rem] mx-auto">
            {aboutUs_data.map((aboutus) => (
              <div
                key={aboutus.id}
                className="flex flex-col gap-[1rem] py-[8px] items-center md:w-[337px] max-h-full rounded-[11px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <img
                  src={aboutus.img}
                  alt="STOCK_IMAGES"
                  className="md:w-[289px] w-[288px] h-[150px]"
                />
                <div className="flex flex-col md:gap-[1rem]">
                  <span className="text-lightWhite md:w-[190px] w-[164px] font-[600] md:text-[20px] text-[18px] md:leading-[27px] md:text-left">
                    {aboutus.title}
                  </span>
                  <span className="text-dimWhite w-[257px] max-h-full md:text-[16px] text-[14px] font-[400] md:leading-[24px] md:text-left">
                    {aboutus.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:items-center justify-center">
          <span className="md:w-[124px] h-[52px] font-inter font-[700] md:text-[50px] text-[30px] text-gradient-2 leading-[51px] text-start md:px-0 px-4">
            FAQs
          </span>
          <span className="md:w-[615px] md:h-[28px] w-[398px] h-[34px] font-[400] md:text-[18px] text-[14px] md:leading-[28px] leading-[17px] text-dimWhite text-start md:px-0 px-4">
            Empower your teams to build better processes, for a better
            workplace.
          </span>

          {smallScreen ? (
            <div className="grid grid-cols-1 mt-8 gap-4 px-[8px]">
              {faq_data.map((faq) => (
                <div
                  key={faq.id}
                  className="flex flex-col border py-6 gap-4 border-solid border-[rgba(255,255,255,0.3)] p-4 items-center rounded-md"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="text-lightWhite font-semibold text-lg outline-none focus:outline-none"
                  >
                    {faq.title}
                  </button>
                  {expandedId === faq.id && (
                    <>
                      <div className="w-full h-0.5 bg-[rgba(255,255,255,0.3)]"></div>
                      <p className="text-dimWhite text-base">{faq.des}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[1204px] h-[256px] grid grid-cols-2 mt-[2rem] mb-[12rem] gap-[1rem]">
              {faq_data.slice(0,4).map((faq) => {
                return (
                  <div className="w-[592px] h-[256px] flex flex-col border py-[3rem] gap-[1rem] border-solid border-[rgba(255,255,255,0.3)] p-[4rem] items-center rounded-[8px]">
                    <span className="text-lightWhite w-[517px] h-[21px] font-[500] text-[17px] leading-[20px]">
                      {faq.title}
                    </span>
                    <div className="w-[517px] h-[0.9px] bg-[rgba(255,255,255,0.3)]"></div>
                    <span className="text-dimWhite w-[517px] h-[15px] font-[400] text-[15px] leading-[22px]">
                      {faq.des}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          <Link to='/faqs'>
          <div className="flex items-center justify-center md:mt-[7rem] mt-[2rem]">
            <button className="w-[123px] h-[21px] flex font-[400] text-[14px] leading-[21px] items-center justify-center h-[49px] rounded-full bg-[rgba(255,255,255,0.3)] text-lightWhite">
              Load All FAQ's
            </button>
          </div>
          </Link>
        </div>

        <Testimonials />
      </div>
    </div>
  );
};

export default About;
