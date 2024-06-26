import React, { useState, useEffect, useContext } from "react";
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
import { Link, useSearchParams } from "react-router-dom";
import { useUserData } from "../../constants/context";
import { useUserSession } from "../../constants/userContext";
import KYCPopup from "../Subscription RA/KYCPopup";
import { SubscriptionContext } from "../../constants/subscriptionContext";
import SignUp from "../SignUp";

const Hero = ({ hasVisitedSignUp, token }) => {
  const [showDialog, setShowDialog] = useState(false);
  const userData = useUserData();
  const dataUser = useUserSession().userData;
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [showKYCDialog, setShowKYCDialog] = useState(false);
  const { transactionTable } = useContext(SubscriptionContext);
  const [showSignUp, setShowSignUp] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const apid = searchParams.get("apid");
    const raid = searchParams.get("raid");
    const landingPageUrl = searchParams.get("apurl");

    if (apid) {
      sessionStorage.setItem("apid", apid);
    }

    if (raid) {
      sessionStorage.setItem("raid", raid);
    }

    if (landingPageUrl) {
      sessionStorage.setItem("landingPageUrl", landingPageUrl);
    }
  }, [searchParams]);

  const getExpertType = (typeId) => {
    switch (typeId) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Futures & Options";
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

    const patchData = [
      {
        path: "/name",
        op: "replace",
        value: nameData,
      },
      {
        path: "/email",
        op: "replace",
        value: emailData,
      },
    ];

    try {
      const resUser = await fetch(
        `https://copartners.in:5131/api/User?Id=${token}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patchData),
        }
      );

      if (!resUser.ok) {
        throw new Error(`HTTP error! status: ${resUser.status}`);
      }

      const data = await resUser.json();

      if (!data.isSuccess) {
        console.log("Error messages:", data.errorMessages);
      } else {
        console.log("Success! User saved successfully");
        setShowDialog(false);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (dataUser) {
        if (!dataUser?.name || !dataUser?.email) {
          setShowDialog(true);
        } else {
          sessionStorage.setItem("isDialogClosed", "true");
          setShowDialog(false);
        }
      }
    };

    const KYCCheck = () => {
      if (
        (dataUser?.isKYC === null || dataUser?.isKYC === false) &&
        transactionTable.length > 0
      ) {
        setShowKYCDialog(true);
      } else {
        setShowKYCDialog(false);
      }
    };

    const isDialogClosed = sessionStorage.getItem("isDialogClosed");

    if (dataUser) {
      setNameData(dataUser.name || "");
      setEmailData(dataUser.email || "");
    }

    if (!hasVisitedSignUp && isDialogClosed !== "true") {
      fetchUserData();
    }

    if (dataUser && transactionTable && dataUser?.name && dataUser?.email) {
      KYCCheck();
    }
  }, [dataUser, hasVisitedSignUp, transactionTable]);

  const handleClosed = (e) => {
    e.stopPropagation();
    sessionStorage.setItem("isDialogClosed", "true");
    setShowDialog(false);
  };

  const handleTelegram = (e, link) => {
    e.stopPropagation();
    if (token) {
      window.open(link);
    } else {
      setShowSignUp(true);
    }
  };

  const handleSignUpComplete = (e, link) => {
    e.stopPropagation();
    setShowSignUp(false);
    window.open(link, "_blank");
    window.location.reload();
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slicedData = isMobile ? userData.slice(0, 5) : userData.slice(0, 3);

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
      {showKYCDialog && <KYCPopup />}

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

        <div className="md:pt-[2rem] pt-[1rem] grid grid-cols-2 gap-4 md:flex">
          {userData &&
            slicedData.map((expert, id) => {
              return (
                <div
                  key={expert.id}
                  className="flex flex-col hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out rounded-[11px] p-2"
                >
                  <Link
                    onClick={scrollToTop}
                    to={`/ra-detail/${expert.id}`}
                    key={expert.id}
                    className="md:w-[256px] md:h-[265px] sm:w-[172px] h-[230px] gap-[3px] relative flex flex-col items-center"
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
                          {expert.experience}+
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
                        <span>SEBI:</span>{" "}
                        <span className="text-white md:ml-2">
                          {expert.sebiRegNo}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="md:w-[211px] mx-auto bg-[#0081F1] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0">
                    <div
                      onClick={(e) => handleTelegram(e, expert.telegramChannel)}
                      className="flex justify-center items-center gap-2"
                    >
                      <img
                        src={telegram}
                        alt="Telegram"
                        className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                      />
                      <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
                        Get Free Calls
                      </button>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
                      />
                    </div>
                    {showSignUp && (
                      <SignUp
                        onComplete={(e) =>
                          handleSignUpComplete(e, expert.telegramChannel)
                        }
                      />
                    )}
                  </div>
                </div>
              );
            })}

          <div className="md:px-[3rem] flex flex-col md:gap-4 gap-3 md:p-4 p-2">
            <span className="font-[600] md:text-[30px] text-lg leading-5 text-lightWhite">
              Experience Matters
            </span>

            <span className="text-dimWhite font-[400] md:text-[16px] text-[14px] md:leading-[21px] leading-[18px]">
              Connect with India’s SEBI registered Research Analysts, guiding
              you thoroughly to maximising profits in the dynamic world of stock
              trading.
            </span>
            <Link onClick={scrollToTop} to="expertise">
              <button className="md:px-6 md:py-3 px-4 py-2 rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
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
