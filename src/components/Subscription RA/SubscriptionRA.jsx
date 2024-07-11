import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../style";
import "./SubscriptionRA.css";
import { ToastContainer, toast } from "react-toastify";
import { arrow, bookmark, bookmarkFill, duration, stars } from "../../assets";
import SubscriptionPaymentPopup from "./SubscriptionPaymentPopup";
import FAQs2 from "../About/FAQs2";
import CoursePaymentPopup from "./CoursePaymentPopup";
import MobileCourse from "./MobileCourse";
import { useParams, useLocation } from "react-router-dom";
import { useUserSession } from "../../constants/userContext";
import SignUp2 from "../Signup2";
import Stock from "../Stock";

const SubscriptionRA = ({ userId }) => {
  const { id } = useParams();
  const location = useLocation();
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [expertData, setExpertData] = useState(null);
  const [activeHoverIndex, setActiveHoverIndex] = useState(0);
  const [showMonthlyPopup, setShowMonthlyPopup] = useState(false);
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState(null);
  const [planMonthlyPrice, setPlanMonthlyPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planPrice, setPlanPrice] = useState(2999);
  const [activeTab, setActiveTab] = useState("subscriptions");
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [mobileNum, setMobileNum] = useState("");
  const [filterTab, setFilterTab] = useState(location.state?.filterTab || "all");
  const [chatID, setChatID] = useState("");
  const { userData, loading } = useUserSession();
  const [subscriptionId, setSubscriptionId] = useState("");
  const [isCustom, setIsCustom] = useState("");
  const [durationMonth, setDurationMonth] = useState("");

  useEffect(() => {
    if (!loading && userData) {
      setMobileNum(userData.mobileNumber);
    }
    if (expertData) {
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
    }
  }, [expertData, loading, userData]);

  const handleSelectPlan = (
    subscriptionId,
    plan,
    price,
    isCustom,
    durationMonth
  ) => {
    setSelectedPlan(plan);
    setPlanPrice(price);
    setSubscriptionId(subscriptionId);
    setIsCustom(isCustom);
    setDurationMonth(durationMonth);
  };

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

  const fetchSubscriptions = async (expertId) => {
    try {
      const response = await fetch(
        `https://copartners.in:5009/api/Subscription/GetByExpertsId/${expertId}`
      );
      if (!response.ok) {
        throw new Error("Error in fetching subscriptions");
      }
      const data = await response.json();
      setSubscriptions(data.data);
    } catch (error) {
      console.error("Failed to fetch subscription plans:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://copartners.in:5132/api/Experts/${id}`
        );
        if (!response.ok) {
          throw new Error("Error in fetching API");
        }
        const data = await response.json();
        setChatID(data.data.chatId);
        fetchSubscriptions(data.data.id);
        setExpertData(data.data);
      } catch (error) {
        console.error("Error fetching expert data:", error);
        toast.error("Failed to fetch expert data", {
          position: "top-right",
        });
      }
    };

    fetchData();
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    document.getElementById(tab).scrollIntoView({ behavior: "smooth" });
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

  const handleBuyNowClick = (
    subscriptionId,
    plan,
    price,
    isCustom,
    durationMonth
  ) => {
    setSelectedMonthlyPlan(plan);
    setPlanMonthlyPrice(price);
    setShowMonthlyPopup(true);
    setSubscriptionId(subscriptionId);
    setIsCustom(isCustom);
    setDurationMonth(durationMonth);
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

  const handleTelegram = (link) => {
    window.open(link);
  };

  const calculateRemainingTime = (discountValidTo) => {
    const now = new Date();
    const validTo = new Date(discountValidTo);

    const timeDifference = validTo - now;

    if (timeDifference <= 0) {
      return "Expired";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (days > 0) {
      return `${days} days ${hours} hours`;
    } else if (hours > 0) {
      return `${hours} hours ${minutes} minutes`;
    } else if (minutes > 0) {
      return `${minutes} minutes`;
    } else {
      return "Less than a minute";
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!expertData) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <section
      className={`flex md:flex-row flex-col md:px-0 px-3 sm:pt-32 sm:pb-16 pt-[4rem] pb-12 expertise-Bg`}
    >
      <div
        key={expertData.id}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-28 md:bottom-[10rem] font-inter`}
      >
        <section className="subscription-RA-bg flex flex-row justify-between bg-[#18181B80] relative w-full md:p-[30px] p-[16px] md:pb-0 border-2 border-[#f4f4f50e] rounded-xl md:mb-8">
          <div className="text-white">
            <div className="flex flex-col md:mb-6 mb-1">
              <div className="flex justify-between items-center w-full">
                <span
                  className="flex-1 font-bold md:text-[72px] text-[26px]
                  text-gradient md:leading-[88px] leading-[30px] md:pb-3"
                >
                  {expertData.channelName}
                </span>
              </div>
              <span className="font-normal md:text-[22px] text-[12px]">
                {expertData.name} - {getExpertType(expertData.expertTypeId)}
              </span>
            </div>
            <div className="flex justify-between md:w-[350px] w-[176px] md:h-16 h-10 md:mb-6 mb-3">
              <div className="flex flex-col items-center justify-around">
                <div className="text-[15px] text-[#C6CDD5]">Experience</div>
                <div className="md:text-xl text-xs font-semibold">
                  {expertData.experience}+
                </div>
              </div>
              <div className="w-[1px] md:h-16 h-10 bg-white"></div>
              <div className="flex flex-col items-center justify-around">
                <div className="text-[15px] text-[#C6CDD5]">Followers</div>
                <div className="md:text-xl text-xs font-semibold">
                  {`${expertData.telegramFollower / 1000}k`}
                </div>
              </div>
            </div>
            <div className="md:text-lg text-sm md:font-semibold md:w-[508px] md:mb-4 mb-2">
              <span className="text-dimWhite">SEBI:</span>{" "}
              {expertData.sebiRegNo}
            </div>
            <div
              onClick={() => handleTelegram(expertData.telegramChannel)}
              className="bg-[#0081F1] md:block hidden md:rounded-3xl rounded-2xl md:w-44 w-32 md:mb-6"
            >
              <button className="flex mx-auto md:py-2 py-1 items-center">
                <span className="md:text-base text-xs">Get Free Calls</span>
                <img className="w-4 ms-3" src={arrow} alt="arrow icon" />
              </button>
            </div>
          </div>
          <div className="flex mx-auto">
            <img
              className="subscription-RA-img md:w-[400px] md:h-[350px] h-[132] w-[470px] my-auto"
              src={expertData.expertImagePath}
              style={{
                maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
              }}
              alt=""
            />
          </div>
          <div className="flex text-white items-end absolute top-6 right-6">
            <img
              className="md:w-8 w-4 md:h-8 h-4 me-1"
              src={stars}
              alt="star icon"
            />
            <span className="md:text-3xl text-sm">{expertData.rating}</span>
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
                Subscription Plans
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
            </div>
          </div>
        </section>
        <section
          id="subscriptions"
          className="w-full flex flex-col md:my-14 my-3"
        >
          <div className="text-white md:text-left text-center md:flex md:justify-between w-full md:mb-8">
            <div className="text-white md:text-5xl text-3xl font-bold pb-4 md:w-1/2">
              Subscription Plans
            </div>
          </div>
          {/* <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl p-3 mb-4 md:hidden">
            <div className="activeOptions md:flex-col-6 md:text-[16px] text-[10px] flex flex-row my-auto">
              <motion.button
                onClick={() => setFilterTab("futures")}
                className={`md:flex-col-3 md:mx-2 mx-2 md:text-[1rem] text-[15px] px-3 py-1 ${
                  filterTab === "futures"
                    ? "text-[#000] bg-[#fff] rounded-[5px]"
                    : "text-[#fff]"
                } hover:text-[#000] hover:bg-[#fff] rounded-[5px]`}
                initial={false}
                animate={filterTab === "futures" ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
              >
                Futures & Options
              </motion.button>
              <motion.button
                onClick={() => setFilterTab("commodity")}
                className={`md:flex-col-3 md:mx-2 mx-2 md:text-[1rem] text-[15px] px-3 py-1 ${
                  filterTab === "commodity"
                    ? "text-[#000] bg-[#fff] rounded-[5px]"
                    : "text-[#fff]"
                } hover:text-[#000] hover:bg-[#fff] rounded-[5px]`}
                initial={false}
                animate={filterTab === "commodity" ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
              >
                Commodity
              </motion.button>
              <motion.button
                onClick={() => setFilterTab("equity")}
                className={`md:flex-col-3 md:mx-2 mx-2 md:text-[1rem] text-[15px] px-3 py-1 ${
                  filterTab === "equity"
                    ? "text-[#000] bg-[#fff] rounded-[5px]"
                    : "text-[#fff]"
                } hover:text-[#000] hover:bg-[#fff] rounded-[5px]`}
                initial={false}
                animate={filterTab === "equity" ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
              >
                Equity
              </motion.button>
            </div>
          </div> */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filterTab}
              className="text-white flex grid md:grid-cols-3 grid-cols-2 justify-center md:gap-8 gap-4 w-full subscription-cards"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.5 }}
            >
              {subscriptions
                .slice()
                .sort((a, b) => a.amount - b.amount)
                .map((subscription, index) => {
                  const isDiscounted =
                    subscription.discountedAmount < subscription.amount;
                  const isRecommended =
                    subscriptions.every(
                      (sub) => sub.discountedAmount >= sub.amount
                    ) && index === 1;
                  const showBorder = isDiscounted || isRecommended;

                  const remainingTime = subscription.discountValidTo
                    ? calculateRemainingTime(subscription.discountValidTo)
                    : null;

                  return (
                    <div
                      key={subscription.id}
                      onClick={() =>
                        handleBuyNowClick(
                          subscription.id,
                          subscription.planType,
                          isDiscounted
                            ? subscription.discountedAmount
                            : subscription.amount,
                          subscription.isCustom,
                          subscription.durationMonth
                        )
                      }
                      className={`my-auto flex-1 rounded-2xl p-5 basic-div max-w-[400px] ${
                        activeHoverIndex === 0 ? "hover:bg-[#18181B80]" : ""
                      } relative ${showBorder ? "border-2" : ""}`}
                    >
                      <div className="text-center md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
                        {subscription.planType}
                        {isDiscounted && (
                          <span className="bg-gradient-to-r from-[#00c394] to-[#00a143] inline-block text-transparent bg-clip-text text-xs md:text-lg ml-2">
                            ({subscription.discountPercentage}% OFF)
                          </span>
                        )}
                      </div>
                      <div className="text-center md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex justify-center">
                        {isDiscounted ? (
                          <div className="flex flex-col text-center">
                            <span className="line-through text-gray-500 md:text-xl text-sm">
                              ₹{subscription.amount}
                            </span>
                            <span>₹{subscription.discountedAmount}</span>
                          </div>
                        ) : (
                          <span>₹{subscription.amount}</span>
                        )}
                      </div>
                      <div className="text-center md:text-lg text-xs mt-auto opacity-60 md:mb-6 mb-2">
                        {subscription.durationMonth}{" "}
                        {subscription.isCustom ? "Days" : "Month"} Access
                      </div>
                      <div className="text-center">
                        {remainingTime && isDiscounted ? (
                          <button className="md:px-12 px-6 bg-gradient-to-r from-[#6368FA] to-[#0081F1] md:text-base text-xs py-2 md:rounded-lg rounded border-2 animate-pulse">
                            Buy Now
                          </button>
                        ) : (
                          <button className="md:px-12 px-6 bg-gradient-to-r from-[#6368FA] to-[#0081F1] md:text-base text-xs py-2 md:rounded-lg rounded border-2">
                            Buy Now
                          </button>
                        )}
                      </div>
                      <div className="text-center mt-4">
                        {remainingTime && isDiscounted ? (
                          <div className="inline-block bg-gradient-to-r from-[#00c394] to-[#00a143] text-white py-1 px-3 rounded-lg md:text-sm text-[0.8rem] ">
                            <i className="fas fa-clock"></i>
                            Limited Time Offer
                          </div>
                        ) : null}
                      </div>
                      {isDiscounted ? (
                        <div className="absolute top-1 md:left-[6.5rem] left-[6.8rem] md:text-md text-xs transform -translate-x-2/3 -translate-y-2/3 bg-[#ffffff] text-[#000] px-3 py-1 font-semibold rounded-lg">
                          Discount
                        </div>
                      ) : (
                        isRecommended && (
                          <div className="absolute top-1 md:left-[6.5rem] left-[6.8rem] md:text-md text-xs transform -translate-x-2/3 -translate-y-2/3 bg-[#ffffff] text-[#000] px-3 py-1 font-semibold rounded-lg">
                            Recommend
                          </div>
                        )
                      )}
                    </div>
                  );
                })}
              {showMonthlyPopup && (
                <SubscriptionPaymentPopup
                  onClose={handleClosePopup}
                  selectedMonthlyPlan={selectedMonthlyPlan}
                  planMonthlyPrice={planMonthlyPrice}
                  expertName={expertData.channelName}
                  mobileNumber={mobileNum}
                  chatId={chatID}
                  subscriptionId={subscriptionId}
                  userId={userData.id}
                  isCustom={isCustom}
                  durationMonth={durationMonth}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </section>
        <section className="w-full md:my-8 my-2 flex gap-20 md:mb-24 mb-16">
          <FAQs2 />
        </section>

        <section
          id="highlights"
          className="w-full md:my-8 my-2 flex gap-20 md:mb-24 mb-16"
        >
          <div className="flex flex-col md:w-2/3 w-full text-white">
            <div className="text-white md:text-5xl text-3xl font-bold pb-4 md:text-left text-center">
              Key highlights to join this subscription
            </div>
            <div className="text-[#A1A1AACC] md:mb-9 mb-4 md:text-base text-xs md:text-left text-center">
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
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
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
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
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
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
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
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
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
              {subscriptions
                .slice()
                .sort((a, b) => a.amount - b.amount)
                .map((subscription, index) => {
                  const isDiscounted =
                    subscription.discountedAmount < subscription.amount;
                  const remainingTime = subscription.discountValidTo
                    ? calculateRemainingTime(subscription.discountValidTo)
                    : null;

                  return (
                    <div
                      key={subscription.id}
                      onClick={() =>
                        handleSelectPlan(
                          subscription.id,
                          subscription.planType,
                          isDiscounted
                            ? subscription.discountedAmount
                            : subscription.amount,
                          subscription.isCustom,
                          subscription.durationMonth
                        )
                      }
                      className={`flex rounded-2xl p-4 ${
                        selectedPlan === subscription.planType
                          ? "bg-[#18181B80] border-2 border-[#F4F4F51A]"
                          : "hover:bg-[#18181B80]"
                      }`}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex-1 text-left my-auto">
                        <p className="text-lg subheading-gradient">
                          {subscription.planType}
                        </p>
                        <p className="text-[#C6CDD5] text-sm">
                          {subscription.durationMonth}{" "}
                          {subscription.isCustom ? "Days" : "Month"} Access
                        </p>
                      </div>
                      <div className="flex-1 text-3xl font-bold">
                        {isDiscounted ? (
                          <div className="flex flex-col">
                            <span className="line-through text-gray-500 text-xl">
                              ₹{subscription.amount}
                            </span>
                            <span>₹{subscription.discountedAmount}</span>
                          </div>
                        ) : (
                          <span>₹{subscription.amount}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
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
                    expertName={expertData.channelName}
                    mobileNumber={mobileNum}
                    chatId={chatID}
                    subscriptionId={subscriptionId}
                    userId={userData.id}
                    isCustom={isCustom}
                    durationMonth={durationMonth}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="border-2 rounded-2xl border-[#f4f4f50e] md:p-8 px-4 py-6 md:mb-24 mb-12"
        >
          <p className="text-white md:text-5xl text-3xl font-bold pb-8">
            Subscriptions Details
          </p>
          <div className="text-[#A1A1AACC]">
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
        </section>
        <div className={`md:mt-[5rem] mt-[1.9rem] ${styles.boxWidth}`}>
          <Stock />
        </div>
        <ToastContainer />
        <div className="md:hidden block">
          {subscriptions.length !== 0 && (
            <MobileCourse
              handleBuyNowClick={handleBuyNowClick}
              showMobilePopup={showMobilePopup}
              subscriptions={subscriptions}
            />
          )}
        </div>
      </div>
      {!userId && <SignUp2 />}
    </section>
  );
};

export default SubscriptionRA;
