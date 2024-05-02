import React, { useEffect, useState } from "react";
import styles from "../../style";
import "./SubscriptionRA.css";
import { ToastContainer, toast } from "react-toastify";
import {
  arrow,
  bookmark,
  bookmarkFill,
  stars,
  userImg,
} from "../../assets";
import SubscriptionPaymentPopup from "./SubscriptionPaymentPopup";
import FAQs2 from "../About/FAQs2";
import CoursePaymentPopup from "./CoursePaymentPopup";
import MobileCourse from "./MobileCourse";

const SubscriptionRA = () => {
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [activeHoverIndex, setActiveHoverIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#18181B80");
  const [showMonthlyPopup, setShowMonthlyPopup] = useState(false);
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState(null);
  const [planMonthlyPrice, setPlanMonthlyPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planPrice, setPlanPrice] = useState(2999);
  const [activeTab, setActiveTab] = useState("subscriptions");
  const [showMobilePopup, setShowMobilePopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50;
      if (scrollPosition > threshold) {
        setShowMobilePopup(true);
      } else {
        setShowMobilePopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelectPlan = (plan, price) => {
    setSelectedPlan(plan);
    setPlanPrice(price);

    console.log(`User has chosen: ${plan} plan with price ₹${price}`);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSaveCard = () => {
    // Toggle the isCardSaved state
    setIsCardSaved(!isCardSaved);

    // Show toast notification based on the new state
    if (!isCardSaved) {
      toast.success("RA has been saved", {
        position: "top-right",
      });
    } else {
      toast.info("RA has been unsaved", {
        position: "top-right",
      });
    }
  };

  const handleMouseOver = () => {
    setBackgroundColor("transparent");
  };

  const handleMouseOut = () => {
    setBackgroundColor("#18181B80");
  };

  const handleBuyNowClick = (plan, price) => {
    setSelectedMonthlyPlan(plan);
    setPlanMonthlyPrice(price);
    setShowMonthlyPopup(true);
  };

  const handleMouseEnter = (index) => {
    setActiveHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveHoverIndex(0);
  };

  const handleClosePopup = () => {
    setShowMonthlyPopup(false);
  };

  return (
    <section
      className={`flex md:flex-row flex-col md:px-0 px-3 ${styles.paddingY} expertise-Bg`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-28 md:bottom-[10rem] font-inter`}
      >
        <section className="subscription-RA-bg flex flex-row justify-between bg-[#18181B80] relative w-full md:p-[30px] p-[16px] md:pb-0 pb-[3rem] border-2 border-[#f4f4f50e] rounded-xl md:mb-8">
          <div className="text-white">
            <div className="flex flex-col md:mb-6 mb-1">
              <div className="flex justify-between items-center w-full">
                <span
                  className="flex-1 font-bold md:text-[72px] text-[26px]
      text-gradient md:leading-[88px] leading-[30px] md:pb-3"
                >
                  Arun Kumar
                </span>
              </div>
              <span className="font-normal opacity-60 md:leading-[28px] md:text-[22px] text-[12px]">
                Futures & Options.
              </span>
            </div>
            <div className="flex justify-between md:w-[350px] w-[176px] md:h-16 h-10 md:mb-6 mb-3">
              <div className="flex flex-col items-center justify-around">
                <div className="text-[12px] text-[#C6CDD5]">Experience</div>
                <div className="md:text-xl text-xs font-semibold">7+</div>
              </div>
              <div className="w-[1px] md:h-16 h-10 bg-white"></div>
              <div className="flex flex-col items-center justify-around">
                <div className="text-[12px] text-[#C6CDD5]">Followers</div>
                <div className="md:text-xl text-xs font-semibold">3.1k</div>
              </div>
            </div>
            <div className="md:text-lg text-sm md:font-semibold md:w-[508px] md:mb-4 mb-2">
              <span className="text-dimWhite">SEBI:</span> 987987892479
            </div>
            <div className="bg-[#0081F1] md:block hidden md:rounded-3xl rounded-2xl md:w-44 w-32 md:mb-6">
              <button className="flex mx-auto md:py-2 py-1 items-center">
                {/* <img
                  className="md:w-6 w-4 me-3"
                  src={telegram}
                  alt="telegram icon"
                /> */}
                <span className="md:text-base text-xs">Get Free Calls</span>
                <img className="w-4 ms-3" src={arrow} alt="arrow icon" />
              </button>
            </div>
            <div className="md:block hidden">
              <button className="flex items-center md:text-base text-xs">
                Explore More{" "}
                <img className="w-4 ms-3" src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="flex mx-auto">
            <img
              className="subscription-RA-img md:w-[400px] w-[470px] my-auto"
              src={userImg}
              alt=""
            />
          </div>
          <div className="flex text-white items-end absolute top-6 right-6">
            <img
              className="md:w-8 w-4 md:h-8 h-4 me-1"
              src={stars}
              alt="star icon"
            />
            <span className="md:text-3xl text-sm">4.4</span>
          </div>
          <div
            onClick={handleSaveCard}
            className={`absolute md:bottom-6 bottom-12 md:right-8 right-3 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:bg-[#ffffff5e] hover:rounded-full p-2`}
          >
            {!isCardSaved ? (
              <img src={bookmark} alt="Save icon" className="w-6 h-6" />
            ) : (
              <img
                src={bookmarkFill}
                alt="Save fill icon"
                className="w-6 h-6"
              />
            )}
          </div>
          <div className="bg-[#0081F1] md:hidden w-[90%] block absolute bottom-3 border-opacity-30 md:rounded-3xl rounded-2xl md:w-44 md:mb-6">
            <button className="flex mx-auto text-white md:py-2 py-2 items-center">
              {/* <img
                className="md:w-6 w-4 me-3"
                src={telegram}
                alt="telegram icon"
              /> */}
              <span className="md:text-base text-xs">Get Free Calls</span>
              <img className="w-4 ms-3" src={arrow} alt="arrow icon" />
            </button>
          </div>
        </section>
        <section className="w-full md:block hidden">
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl">
            <div className="md:flex-col-6 md:text-[16px] text-[12px] flex flex-row md:mx-px mx-auto">
              <button
                onClick={() => handleTabClick("subscriptions")}
                className={`hover:text-white text-dimWhite md:flex-col-3 rounded-full p-2 md:px-6 md:py-5 mx-2 md:text-[1rem] text-[9.5px] ${
                  activeTab === "subscriptions" ? "bg-[#ffffff5e]" : ""
                }`}
              >
                Subscriptions Plans
              </button>
              <button
                onClick={() => handleTabClick("highlights")}
                className={`md:flex-col-3 md:px-6 md:py-5 mx-2 rounded-full p-2 md:text-[1rem] text-[9.5px] text-dimWhite hover:text-white ${
                  activeTab === "highlights" ? "bg-[#ffffff5e]" : ""
                }`}
              >
                Key Highlights
              </button>
              <button
                onClick={() => handleTabClick("about")}
                className={`md:flex-col-3 md:px-6 md:py-5 mx-2 rounded-full p-2 md:text-[1rem] text-[9.5px] text-dimWhite hover:text-white ${
                  activeTab === "about" ? "bg-[#ffffff5e]" : ""
                }`}
              >
                About Subscriptions
              </button>
              <button
                onClick={() => handleTabClick("reviews")}
                className={`md:flex-col-3 md:px-6 md:py-5 mx-2 rounded-full p-2 md:text-[1rem] md:inline hidden text-[9.5px] text-dimWhite hover:text-white ${
                  activeTab === "reviews" ? "bg-[#ffffff5e]" : ""
                }`}
              >
                Reviews
              </button>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:my-14 my-10">
          <div className="text-white md:text-left text-center md:flex md:justify-between w-full md:mb-8">
            <div className="text-white md:text-5xl text-3xl font-bold pb-4 md:w-1/2">
              Subscriptions Plans
            </div>
            <div className="text-[#A1A1AACC] md:text-lg text-xs md:mb-0 mb-4 md:w-1/2">
              <span className="text-white">
                Choose the plan that suits your needs and start trading with
                confidence today.
              </span>
            </div>
          </div>
          <div className="text-white flex flex-wrap justify-center md:gap-8 gap-2 w-full subscription-cards">
            <div
              onClick={() => handleBuyNowClick("Monthly", 1999)}
              className={`flex-1 rounded-2xl p-5 basic-div max-w-[400px] ${
                activeHoverIndex === 0 ? "hover:bg-[#18181B80]" : ""
              }`}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="text-center opacity-60 hidden">21 Days Left</div>
              <div className="text-center md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
                Monthly
              </div>
              <div className="text-center md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex justify-center">
                ₹1,999/<span className="md:flex hidden">-</span>
                <span className="md:hidden flex font-normal">mo</span>
              </div>
              <div className="text-center md:text-lg text-xs mt-auto opacity-60 mb-6">
                1 Month Access
              </div>
              {/* <div className="text-center md:mb-8 mb-4">
      <div className="flex md:mb-4 mb-2 font-medium items-center md:justify-center text-left">
        <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
        <span className="md:text-base text-xs">
          Voice messages anywhere
        </span>
      </div>
      <div className="flex md:mb-4 mb-2 font-medium items-center md:justify-center text-left">
        <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
        <span className="md:text-base text-xs">
          Voice messages anywhere
        </span>
      </div>
      <div className="flex md:mb-4 mb-2 font-medium items-center md:justify-center text-left">
        <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
        <span className="md:text-base text-xs">
          Voice messages anywhere
        </span>
      </div>
    </div> */}
              <div className="text-center">
                <button className="bg-white text-black md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-2">
                  Buy Now
                </button>
              </div>
            </div>

            <div
              onClick={() => handleBuyNowClick("Quarterly", 2999)}
              className="flex-1 rounded-2xl p-5 basic-div hover:bg-[#18181B80] relative"
              style={{ border: "2px solid #fff", backgroundColor }} // Added border style
            >
              <div className="text-center opacity-60 hidden">21 Days Left</div>
              <div className="text-center md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
                Quarterly
              </div>
              <div className="text-center md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex justify-center">
                ₹2,999/<span className="md:flex hidden">-</span>
                <span className="md:hidden flex font-normal">mo</span>
              </div>
              <div className="text-center md:text-lg text-xs mt-auto opacity-60 mb-6">
                3 Month Access
              </div>
              <div className="text-center md:mb-8 mb-4">
                {/* <div className="flex md:justify-center md:mb-4 mb-2 font-medium items-center text-left">
      <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
      <span className="md:text-base text-xs">
        Voice messages anywhere
      </span>
    </div>
    <div className="flex md:justify-center md:mb-4 mb-2 font-medium items-center text-left">
      <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
      <span className="md:text-base text-xs">
        Voice messages anywhere
      </span>
    </div>
    <div className="flex justify-center md:mb-4 mb-2 font-medium items-center text-left">
      <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
      <span className="md:text-base text-xs">
        Voice messages anywhere
      </span>
    </div> */}
              </div>
              <div className="text-center">
                <button className="text-white md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white border-2">
                  Buy Now
                </button>
              </div>
              <div className="absolute top-1 md:left-[6.5rem] left-[6.8rem] md:text-md text-xs transform -translate-x-2/3 -translate-y-2/3 bg-[#ffffff] text-[#000] px-3 py-1 font-semibold rounded-lg">
                Recommended
              </div>
            </div>

            {/* <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={`flex-1 bg-opacity-5 p-5 hover:bg-[#18181B80] rounded-2xl standard-div ${
              activeHoverIndex === 3 ? "hover:bg-[#18181B80]" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1 md:mt-1 mt-0">
              Half-Yearly
            </div>
            <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex">
              ₹5,999/<span className="md:flex hidden">-</span>
              <span className="md:hidden flex font-normal">mo</span>
            </div>
            <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
              6 Month Access
            </div>
            <div className="md:mb-8 mb-4">
              <div className="flex md:mb-4 mb-2 font-medium items-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
            </div>
            <div className="text-center">
              <button className="text-white md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white border-2" onClick={() => handleBuyNowClick("Half-Yearly", 5999)}>
               Buy Now
              </button>
            </div>
          </div> */}

            <div
              onClick={() => handleBuyNowClick("Yearly", 9999)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className={`flex-1 bg-opacity-5 p-5 hover:bg-[#18181B80] rounded-2xl standard-div ${
                activeHoverIndex === 4 ? "hover:bg-[#18181B80]" : ""
              } text-center`}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1 md:mt-1 mt-0">
                Yearly
              </div>
              <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex justify-center">
                ₹9,999/<span className="md:flex hidden">-</span>
                <span className="md:hidden flex font-normal">mo</span>
              </div>
              <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
                12 Month Access
              </div>
              <div className="md:mb-8 mb-4">
                {/* <div className="flex md:mb-4 mb-2 font-medium items-center justify-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center justify-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center justify-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div> */}
              </div>
              <div className="text-center">
                <button className="text-white md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white border-2">
                  Buy Now
                </button>
              </div>
            </div>
            {showMonthlyPopup && (
              <SubscriptionPaymentPopup
                onClose={handleClosePopup}
                selectedMonthlyPlan={selectedMonthlyPlan}
                planMonthlyPrice={planMonthlyPrice}
                // expertName={expertData.name}
              />
            )}
          </div>
        </section>
        <section className="w-full md:my-8 my-2 flex gap-20 md:mb-24 mb-16">
          <FAQs2 />
        </section>

        <section className="w-full md:my-8 my-2 flex gap-20 md:mb-24 mb-16">
          <div className="flex flex-col md:w-2/3 w-full text-white">
            <div className="text-white md:text-5xl text-3xl font-bold pb-4 md:text-left text-center">
              Key highlights to join this subscription
            </div>
            <div className="text-dimWhite md:mb-9 mb-4 md:text-base text-xs md:text-left text-center">
              Experience the power of our subscription. Gain exclusive access to
              expert insights, advanced trading tools and personalised support.
            </div>
            <div className="flex md:flex-row flex-col md:gap-8 gap-3">
              <div className="flex-1 flex flex-col md:gap-6 gap-3">
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-28 h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    1.
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Expert Insights
                    </p>
                    <p className="text-dimWhite md:text-sm text-xs">
                      Gain exclusive access to expert analysis and insights from
                      SEBI Registered Research Analysts.{" "}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-28 h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    2.
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Risk Management
                    </p>
                    <p className="text-dimWhite md:text-sm text-xs">
                      Learn essential risk management techniques and gain access
                      to tools to help protect your investments.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col md:gap-6 gap-3">
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-28 h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    3.
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Performance Tracking
                    </p>
                    <p className="text-dimWhite md:text-sm text-xs">
                      Monitor your trading performance with detailed analytics
                      and reports to identify strengths and areas for
                      improvement.{" "}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-28 h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    4.
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Market Alerts
                    </p>
                    <p className="text-dimWhite md:text-sm text-xs">
                      Stay informed with real-time market alerts and
                      notifications to capitalise on opportunities. {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-white md:block hidden">
            <div className="rounded-2xl flex flex-col gap-4 bg-[#18181B80] p-8 text-center">
              <div className="text-3xl font-bold subheading-gradient mb-4">
                Subscription Plan
              </div>
              <div
                onClick={() => handleSelectPlan("Monthly", 1999)}
                className={`flex rounded-2xl p-4 ${
                  selectedPlan === "Monthly"
                    ? "bg-[#18181B80] border-2 border-[#F4F4F51A]"
                    : "hover:bg-[#18181B80]"
                }`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Monthly</p>
                  <p className="text-[#C6CDD5] text-sm">1 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹1,999</p>
              </div>
              <div
                onClick={() => handleSelectPlan("Quarterly", 2999)}
                className={`flex rounded-2xl p-4 hover:bg-[#18181B80] ${
                  selectedPlan === "Quarterly"
                    ? "border-2 border-[#F4F4F51A]"
                    : ""
                }`}
              >
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Quarterly</p>
                  <p className="text-[#C6CDD5] text-sm">3 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹2,999</p>
              </div>
              {/* <div
            onClick={() => handleSelectPlan('Half-Yearly', 5999)}
            className={`flex rounded-2xl p-4 hover:bg-[#18181B80] ${
              selectedPlan === 'Half-Yearly' ? 'border-2 border-[#F4F4F51A]' : ''
            }`}
          >
            <div className="flex-1 text-left">
              <p className="text-lg subheading-gradient">Half-Yearly</p>
              <p className="text-[#C6CDD5] text-sm">6 Month Access</p>
            </div>
            <p className="flex-1 text-3xl font-bold">₹5,999</p>
          </div> */}
              <div
                onClick={() => handleSelectPlan("Yearly", 9999)}
                className={`flex rounded-2xl p-4 hover:bg-[#18181B80] ${
                  selectedPlan === "Yearly" ? "border-2 border-[#F4F4F51A]" : ""
                }`}
              >
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Yearly</p>
                  <p className="text-[#C6CDD5] text-sm">12 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹9,999 </p>
              </div>
              <div className="text-center">
                <button
                  className="bg-white text-black md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-2"
                  onClick={() => setShowPopup(true)}
                >
                  Buy Now
                </button>
                {showPopup && (
                  <CoursePaymentPopup
                    onClose={handleClose}
                    selectedPlan={selectedPlan}
                    planPrice={planPrice}
                    // expertName={expertData.name}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="border-2 rounded-2xl border-[#f4f4f50e] md:p-8 px-4 py-6 md:mb-24 mb-12">
          <p className="text-white md:text-5xl text-3xl font-bold pb-8">
            Subscriptions Details
          </p>
          <div className="text-dimWhite">
            <p>
              Welcome to our subscription plans, tailored to cater to traders of
              all levels. Our plans are designed to provide you with the tools,
              resources and support you need to thrive in this dynamic world of
              trading. Whether you're a new trader, looking to learn the basics
              or an experienced trader seeking advanced analytics, there's a
              plan that's right for you. Each of our subscription plans offers a
              unique set of benefits. With our basic plan, you'll gain access to
              essential features such as market news updates and basic analytics
              tools. Our intermediate plan takes it a step further, offering
              access to expert insights and more advanced trading tools and
              exclusive access to in-depth market analysis and priority customer
              support. No matter which plan you choose, you'll also become part
              of our vibrant community of traders. Here, you can connect with
              fellow traders, share ideas and learn from each other's
              experiences. Our community is a valuable resource for support,
              inspiration and collaboration.
            </p>
          </div>
          <button className="text-white md:text-base text-xs flex items-center gap-4 md:py-6 pt-6">
            Explore More <img className="w-4 h-4" src={arrow} alt="" />
          </button>
        </section>
      </div>
      <ToastContainer />
      <div className="md:hidden block">
        <MobileCourse
          handleBuyNowClick={handleBuyNowClick}
          showMobilePopup={showMobilePopup}
        />
      </div>
    </section>
  );
};

export default SubscriptionRA;
