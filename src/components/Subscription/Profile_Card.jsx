import React, { useState, useEffect } from "react";
import { arrow, logout, telegram, userBck } from "../../assets";
import { Link } from "react-router-dom";

const Expertise = ({ userId }) => {
  console.log(userId);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  const [subscriberData, setSubscriberData] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchSubscriberData = async () => {
      try {
        const response = await fetch(
          `https://copartners.in:5009/api/Subscriber/${userId}`
        );
        const data = await response.json();
        setSubscriberData(data.data);
      } catch (error) {
        console.error("Error fetching subscriber data:", error);
      }
    };

    if (userId) {
      fetchSubscriberData();
    }
  }, []);

  return (
    <>
      <div className={`flex flex-col`}>
        <div className="flex p-[1rem] gap-[1rem] sm:pt-[2rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-1 md:ml-0 ml-[-5px] md:mt-[-2rem]">
          {subscriberData ? subscriberData.map((expert, id) => {
            return (
              <Link
                to={`/subscription/buy/${expert.id}`}
                onClick={scrollToTop}
                key={expert.id}
                className="md:w-[384px] md:h-[400px] w-[172px] h-[270px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
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
                      {expert.title}
                    </span>
                  </div>
                  <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
                    <img
                      src={expert.ratingIcon}
                      className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                      alt="rating"
                    />
                    <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[8px] leading-[10px]">
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
                      {expert.experience}
                    </span>
                  </div>
                  <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                  <div className="flex">
                    <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                        Followers
                      </span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                        {/* {`${subscriberData.telegramFollower / 1000}k`} */}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-[300px] md:h-[72px] w-[144px] h-[42px] mb-4 sm:block contents md:ml-2 ml-4">
                  <span className="text-dimWhite md:text-[14px] text-[11px] sm:leading-[24px] md:leading-[12px] leading-[14px]">
                    {expert.content}
                  </span>
                </div>

                <div className="md:w-[220px] md:h-[50px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] bg-[#ffffff30] mt-2 md:mt-0">
                  <div className="flex justify-center items-center gap-2">
                    <button className="text-white font-[400] md:text-[15px] text-[10px] leading-[19px]">
                      1 month subscription
                    </button>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
                    />
                  </div>
                </div>
                <span className="text-[#fff] py-2 md:text-[15px] text-[10px]">
                  21 Days Left
                </span>
              </Link>
            );
          }) : <div className="text-center flex flex-col gap-8 mt-12 col-span-3 text-dimWhite md:text-4xl text-lg"><img className="md:w-96 w-60 mx-auto" src={logout} alt="" />No Subscriptions Found!</div>}
        </div>
      </div>
    </>
  );
};

export default Expertise;
