import React, { useState } from "react";
import styles from "../../style";
import "./SubscriptionRA.css";
import {
  arrow,
  bookmark,
  layer,
  stars,
  telegram,
  tick,
  userImg,
} from "../../assets";

const SubscriptionRA = () => {
  const [backgroundColor, setBackgroundColor] = useState("#18181B80");

  const handleMouseOver = () => {
    setBackgroundColor("transparent");
  };

  const handleMouseOut = () => {
    setBackgroundColor("#18181B80");
  };

  return (
    <section
      className={`flex md:flex-row flex-col md:px-0 px-3 ${styles.paddingY} expertise-Bg`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-28 z-10 md:bottom-[10rem] font-inter`}
      >
        <section className="subscription-RA-bg flex flex-row justify-between bg-[#18181B80] relative w-full md:p-[30px] p-[16px] border-2 border-[#f4f4f50e] rounded-xl mb-8">
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
              Take your team up a level with easy-to-use tools, effortless
              templates and efficient workflows.
            </div>
            <div className="border-[1px] border-[#f4f4f535] border-opacity-30 md:rounded-3xl rounded-2xl md:w-44 w-32 md:mb-6">
              <button className="flex mx-auto md:py-2 py-1 items-center">
                <img
                  className="md:w-6 w-4 me-3"
                  src={telegram}
                  alt="telegram icon"
                />
                <span className="md:text-base text-xs">Telegram</span>
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
          <div className="absolute md:bottom-6 bottom-8 md:right-8 right-3 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:bg-[#ffffff5e] hover:rounded-full p-2">
            <img src={bookmark} alt="Save icon" className="w-6 h-6" />
          </div>
          <div className="md:hidden block absolute bottom-3 right-4 text-white">
            <button className="flex items-center md:text-base text-xs">
              Explore More <img className="w-4 ms-3" src={arrow} alt="arrow" />
            </button>
          </div>
        </section>
        <section className="w-full">
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl md:p-3 p-2">
            <div className="md:flex-col-6 md:text-[16px] text-[12px] flex flex-row my-3 md:mx-px mx-auto">
              <button className="text-white md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px]">
                Subscriptions Plans
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-dimWhite hover:text-white">
                Key Highlights
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-dimWhite hover:text-white">
                About Subscriptions
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] md:inline hidden text-[9.5px] text-[#A1A1AACC] hover:text-white">
                Reviews
              </button>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col md:my-14 my-10">
          <div className="text-white md:text-left text-center md:flex md:justify-between w-full md:mb-8">
            <div className="subheading-gradient md:text-5xl text-3xl font-bold pb-4 md:w-1/2">
              Subscriptions Plans
            </div>
            <div className="text-[#A1A1AACC] md:text-lg text-xs md:mb-0 mb-4 md:w-1/2">
              Discover our subscription plans tailored for traders like you.
              Gain access to exclusive features, expert insights and community
              support to elevate your trading journey.{" "}
              <span className="text-white">
                Choose the plan that suits your needs and start trading with
                confidence today.
              </span>
            </div>
          </div>
          <div className="text-white md:flex grid grid-cols-2 my-auto gap-x-8 gap-y-4">
            <div
              style={{ backgroundColor }}
              className="flex-1 rounded-2xl bg-[#18181B80] p-5 basic-div"
            >
              <div className="text-right opacity-60 md:flex hidden">
                21 Days Left
              </div>
              <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
                Basic
              </div>
              <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex">
                ₹2,999/<span className="md:flex hidden">-</span>
                <span className="md:hidden flex font-normal">mo</span>
              </div>
              <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
                1 Month Access
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
                <button className="text-white border-solid md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white hover:border-gray-700 border-[1px]">
                  Buy Now
                </button>
              </div>
            </div>
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="flex-1 rounded-2xl p-5 hover:bg-[#18181B80] basic-div"
            >
              <div className="text-right opacity-60 md:flex hidden">
                21 Days Left
              </div>
              <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
                Basic
              </div>
              <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex">
                ₹2,999/<span className="md:flex hidden">-</span>
                <span className="md:hidden flex font-normal">mo</span>
              </div>
              <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
                1 Month Access
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
                <button className="text-white border-solid md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white hover:border-gray-700 border-[1px]">
                  Buy Now
                </button>
              </div>
            </div>
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className="flex-1 rounded-2xl hover:bg-[#18181B80] p-5 basic-div"
            >
              <div className="text-right opacity-60 md:flex hidden">
                21 Days Left
              </div>
              <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
                Basic
              </div>
              <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex">
                ₹2,999/<span className="md:flex hidden">-</span>
                <span className="md:hidden flex font-normal">mo</span>
              </div>
              <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
                1 Month Access
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
                <button className=" text-white border-solid md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white hover:border-gray-700 border-[1px]">
                  Buy Now
                </button>
                {showBasicDialog && (
                  <div className="fixed inset-0 z-50 grid place-items-center bg-black bg-opacity-60">
                    <div className="md:min-w-[25%] min-w-[75%] rounded-lg bg-[#18181B] opacity-[80%] font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
                      <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                        Basic Subscription Details
                      </div>
                      <div className="flex flex-col gap-4 md:justify-center md:items-center p-4 border-t border-b">
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[141px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Subscription
                          </span>
                          <span className="text-white md:w-[93px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            Basic
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[115px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Name
                          </span>
                          <span className="text-white md:w-[101px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            Rohit Aggi
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[115px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Amout
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹1,999
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-white md:w-[115px] md:h-[9px] font-inter font-[700] text-[14px] leading-[8.4px] text-start">
                            Subtotal
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹1,999
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[124px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            GST 18%
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹342
                          </span>
                        </div>
                        <hr />
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[115px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Total
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹2,241
                          </span>
                        </div>
                      </div>
                      <div className="flex md:flex-row flex-col flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                        <button
                          onClick={() => setShowBasicDialog(false)}
                          className="md:w-[100px] w-full px-6 py-3 font-inter text-xs font-bold uppercase bg-white text-black rounded-[12px]"
                        >
                          Pay
                        </button>
                        <button
                          onClick={() => setShowBasicDialog(false)}
                          className="px-6 py-3 mr-1 font-inter text-xs font-bold text-dimWhite uppercase transition-all rounded-lg hover:bg-red-500/10 active:bg-red-500/30"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="flex-1 bg-opacity-5 p-5 hover:bg-[#18181B80] rounded-2xl standard-div"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1 md:mt-6 mt-0">
                Standard
              </div>
              <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex">
                ₹5,999/<span className="md:flex hidden">-</span>
                <span className="md:hidden flex font-normal">mo</span>
              </div>
              <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
                3 Month Access
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
                <button className="text-white border-solid md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white hover:border-gray-700 border-[1px]">
                  Buy Now
                </button>
                {showStandardDialog && (
                  <div className="fixed inset-0 z-50 grid place-items-center bg-black bg-opacity-60">
                    <div className="md:min-w-[25%] min-w-[75%] rounded-lg bg-[#18181B] opacity-[80%] font-inter text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
                      <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                        Standard Subscription Details
                      </div>
                      <div className="flex flex-col gap-4 md:justify-center md:items-center p-4 border-t border-b">
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[141px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Subscription
                          </span>
                          <span className="text-white md:w-[93px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            Basic
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[115px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Name
                          </span>
                          <span className="text-white md:w-[101px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            Rohit Aggi
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[115px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Amout
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹5,999
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-white md:w-[115px] md:h-[9px] font-inter font-[700] text-[14px] leading-[8.4px] text-start">
                            Subtotal
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹5,999
                          </span>
                        </div>
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[124px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            GST 18%
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹702
                          </span>
                        </div>
                        <hr />
                        <div className="flex flex-rows justify-between md:w-[316px] md:h-[9px]">
                          <span className="text-dimWhite md:w-[115px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-start">
                            Total
                          </span>
                          <span className="text-white md:w-[67px] md:h-[9px] font-inter font-[500] text-[14px] leading-[8.4px] text-end">
                            ₹6,701
                          </span>
                        </div>
                      </div>
                      <div className="flex md:flex-row flex-col flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                        <button
                          onClick={() => setStandardDialog(false)}
                          className="md:w-[100px] w-full px-6 py-3 font-inter text-xs font-bold uppercase bg-white text-black rounded-[12px]"
                        >
                          Pay
                        </button>
                        <button
                          onClick={() => setStandardDialog(false)}
                          className="px-6 py-3 mr-1 font-inter text-xs font-bold text-dimWhite uppercase transition-all rounded-lg hover:bg-red-500/10 active:bg-red-500/30"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full md:my-8 my-2 flex gap-20 md:mb-24 mb-16">
          <div className="flex flex-col md:w-2/3 w-full text-white">
            <div className="subheading-gradient md:text-5xl text-3xl font-bold pb-4 md:text-left text-center">
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
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
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
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
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
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
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
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
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
              <div className="flex rounded-2xl p-4 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Basic</p>
                  <p className="text-[#C6CDD5] text-sm">1 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹2,999</p>
              </div>
              <div className="flex rounded-2xl p-4 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Standard</p>
                  <p className="text-[#C6CDD5] text-sm">3 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹5,999</p>
              </div>
              <div className="text-center">
                <button className="bg-white text-black px-12 py-2 rounded-lg border-gray-700 border-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-2 rounded-2xl border-[#f4f4f50e] md:p-8 px-4 py-6 md:mb-24 mb-12">
          <p className="subheading-gradient md:text-5xl text-3xl font-bold pb-8">
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
    </section>
  );
};

export default SubscriptionRA;
