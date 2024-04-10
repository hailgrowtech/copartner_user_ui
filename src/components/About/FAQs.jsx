import React, { useState, useEffect } from "react";
import { faq_data } from "../../constants";

const FAQs = () => {
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
    <div className="flex flex-col">
      <span className="md:w-[124px] h-[52px] font-inter font-[700] md:text-[50px] text-[30px] text-gradient-2 leading-[51px] md:text-start text-center">
        FAQs
      </span>
      <span className="md:w-[615px] md:h-[28px] w-[398px] h-[34px] font-[400] md:text-[18px] text-[12px] md:leading-[28px] leading-[17px] text-dimWhite md:text-start text-center">
        Empower your teams to build better processes, for a better workplace.
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
          {faq_data.map((faq) => {
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

      <div className="flex items-center justify-center md:mt-[7rem] mt-[2rem]">
        <button className="w-[123px] h-[21px] flex font-[400] text-[14px] leading-[21px] items-center justify-center h-[49px] rounded-full bg-[rgba(255,255,255,0.3)] text-lightWhite">
          Load All FAQ's
        </button>
      </div>
    </div>
  );
};

export default FAQs;
