import React, { useState, useEffect } from "react";
import styles from "../../style";
import {
  arrow,
  closeImg,
  telegram,
  userBck,
  stars,
  feeback,
} from "../../assets";
import Expertise from "./Expertise";
import { expertise_data } from "../../constants";
import { Link } from "react-router-dom";
import { useUserData } from "../../constants/context";

const Hero = ({hasVisitedSignUp, token}) => {
  const [showDialog, setShowDialog] = useState(false);
  const [rating, setRating] = useState(null);
  const [ratingColor, setRatingColor] = useState(null);
  const userData = useUserData();
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");

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

  const handleUserSave = async (e) => {
    e.preventDefault();

    const postData = {
      name: nameData,
      email: emailData,
      // mobileNumber: mobileNumber,
    };

    try {
      const resUser = await fetch("https://copartners.in:5131/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!resUser.ok) {
        throw new Error(`HTTP error! status: ${resUser.status}`);
      }

      const data = await resUser.json();

      if (!data.isSuccess) {
        console.log("Error messages:", data.errorMessages);
      } else {
        console.log("Success! User saved successfully");
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  useEffect(() => {
    const isDialogClosed = sessionStorage.getItem("isDialogClosed");
    if (hasVisitedSignUp || isDialogClosed === "true") {
      setShowDialog(false);
    } else {
      const activate = setTimeout(() => {
        setShowDialog(true);
      }, 4000);
      return () => clearTimeout(activate);
    }
  }, []);

  const handleClosed = (e) => {
    e.stopPropagation();
    sessionStorage.setItem("isDialogClosed", "true");
    setShowDialog(false);
  };

  const handleTelegram = (link) => {
    token && window.open(link);
  };

  return (
    <div
      className={`flex md:flex-col ${styles.paddingX} flex-col ${styles.paddingY} background-img-div`}
    >
      {showDialog && (
        <div className="fixed bg-black bg-opacity-50 inset-0 z-50 flex items-center justify-center">
          <div className="md:w-[416px] md:h-[381px] w-[340px] h-[360px] flex flex-col gap-2 bg-[#18181B] text-center p-8 rounded-lg shadow-lg">
            <button
              onClick={handleClosed}
              className="font-[700] text-[20px] flex md:ml-[20rem] ml-[15rem] z-50"
            >
              <img
                src={closeImg}
                alt="CloseIcon"
                className="w-[32px] h-[32px] flex items-end"
              />
            </button>
            <div className="flex flex-col md:w-[342px] md:h-[69px] flex flex-row items-center gap-[1rem] md:mt-[-1rem] mt-[-2rem] pb-4">
              <h2 className="text-[24px] leading-[24px] font-[500] text-white z-10">
                Profile Details
              </h2>
              <p className="text-lightWhite font-[400] text-[16px] leading-[16px]">
                Please fill the below data.
              </p>
            </div>
            <div className="flex flex-col md:w-[342px] md:h-[290px] md:gap-3 gap-5">
              <input
                onChange={(e) => setNameData(e.target.value)}
                value={nameData}
                type="text"
                placeholder="Enter Your Name"
                className="border border-solid border-[#666666] rounded-[12px] md:w-[342px] h-[60px] text-center p-1 bg-[#18181B] text-start md:pl-[15px] pl-[10px]"
                style={{ color: "white" }}
              />
              <input
                onChange={(e) => setEmailData(e.target.value)}
                type="email"
                value={emailData}
                placeholder="Enter Your Email ID"
                className="border border-solid border-[#666666] rounded-[12px] md:w-[342px] h-[60px] text-center p-1 bg-[#18181B] text-start md:pl-[15px] px-[15px]"
                style={{ color: "white" }}
              />
              <button
                onClick={handleUserSave}
                type="submit"
                className="bg-white text-black font-[500] md:w-[342px] md:h-[60px] h-[60px] text-[16px] rounded-[12px]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`${styles.flexStart} flex-col relative`}>
        <div className="flex flex-col justify-between md:w-[603px]">
          <span
            className="font-inter md:text-[72px] text-[36px] md:w-full md:h-full w-[340px] h-[95px]
          text-gradient md:leading-[74px] leading-[48px] font-[700]"
          >
            Invest, Learn and Earn
          </span>
          <p className="font-inter md:w-[876px] md:h-[28px] sm:w-[360px] sm:h-[17px] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] leading-[16px]">
            Get partnered with our SEBI Registered Research Analysts to start
            your profitable trading journey.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-[1rem]">
          <Link to="/about">
            <button className="text-white font-normal text-[15px] leading-[28px]">
              Explore More
            </button>
          </Link>
          <img src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
        </div>

        <div className="md:pt-[2rem] pt-[1rem] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:flex">
          {userData &&
            userData.slice(0, 3).map((expert, id) => {
              return (
                <Link
                  onClick={scrollToTop}
                  to={`/ra-detail/${expert.id}`}
                  key={expert.id}
                  className="md:w-[256px] md:h-[285px] sm:w-[172px] h-[230px] gap-[3px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
                >
                  <div className="w-[72px] h-[98px] md:w-[256px] md:h-[146px]  relative profile-image_1 mb-4">
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

                  <div className="flex md:w-[212px] md:h-[26px] w-full sm:h-[22px] justify-between md:gap-0">
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] leading-[12px] font-[500] text-white">
                        {expert.channelName}
                      </span>
                      <span className="text-[12px] leading-[10px] font-[400] text-dimWhite">
                      {expert.name} - {getExpertType(expert.expertTypeId)}
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
                        {expert.experience}
                      </span>
                    </div>
                    <div className="md:w-[1.4px] md:h-[25px] w-[1px] h-[22px] bg-lightWhite"></div>
                    <div className="flex">
                      <div className="flex flex-col w-[52px] h-[33px] items-center">
                        <span className="text-dimWhite font-[400] text-[8.6px] leading-[10px]">
                          Followers
                        </span>
                        <span className="text-lightWhite font-[600] text-[10px] leading-[12px]">
                          {`${expert.telegramFollower / 1000}k`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:mb-1 ml-0 mr-auto md:pl-3">
                    <div className="text-dimWhite md:text-xs text-xs flex md:flex-row flex-col md:pl-0 pl-[2px]">
                      <span>SEBI:</span> <span className="text-white md:ml-2">{expert.sebiRegNo}</span>
                    </div>
                  </div>

                  <div
                    onClick={() => handleTelegram(expert.telegramChannel)}
                    className="md:w-[211px] bg-[#0081F1] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0"
                  >
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

          <div className="md:w-[365px] md:h-[226px] w-[171px] h-[256px] md:px-[3rem] flex flex-col md:gap-2">
            <span className="md:w-[365px] md:h-[36px] w-[171px] h-[36px] font-[600] md:text-[30px] text-[18px] leading-[36px] text-lightWhite">
              Experience Matters
            </span>

            <span className="text-dimWhite md:w-[365px] md:h-[86px] w-[171px] h-[80px] font-[400] md:text-[16px] text-[14px] md:leading-[28px] md:leading-[21px] leading-[18px]">
              Connect with India’s leading SEBI registered Research Analysts,
              guiding you thoroughly to maximising profits in the dynamic world
              of stock trading.
            </span>
            <Link onClick={scrollToTop} to="expertise">
              <button className="md:w-[147px] md:h-[40px] w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px] md:mt-12 mt-[4rem]">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Expertise token={token} />
    </div>
  );
};

export default Hero;
