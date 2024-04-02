import React from "react";
import styles from "../style";
import "./SubscriptionRA.css";
import {
  anywhereAccess,
  arrow,
  bookmark,
  courseImg,
  duration,
  layer,
  level,
  lifetimeAccess,
  sessions,
  stars,
  telegram,
  tick,
  userImg,
} from "../assets";

const SubscriptionRA = () => {
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
            <div className="text-white flex items-center md:w-[400px] md:justify-between md:gap-0 gap-4 md:mb-5 mb-3">
              <div className="subheading-gradient md:text-3xl text-base font-bold">
                Basic
              </div>
              <div className="flex">
                <span className="md:text-5xl text-2xl font-bold">₹2,999/</span>
                <span className="text-lg mt-auto opacity-60 md:inline hidden">
                  1 Month Access
                </span>
              </div>
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
          <div>
            <img className="w-6 h-6 absolute md:bottom-6 bottom-10 md:right-8 right-5" src={bookmark} alt="" />
          </div>
          <div className="md:hidden block absolute bottom-3 right-4 text-white">
              <button className="flex items-center md:text-base text-xs">
                Explore More{" "}
                <img className="w-4 ms-3" src={arrow} alt="arrow" />
              </button>
            </div>
        </section>
        <section className="w-full">
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl md:p-3 p-2">
            <div className="md:flex-col-6 md:text-[16px] text-[12px] flex flex-row my-3 md:mx-px mx-auto">
              <button className="text-white md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px]">
                Subscriptions Plans
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-[#A1A1AACC] hover:text-white">
                Key Highlights
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-[#A1A1AACC] hover:text-white">
                About Subscriptions
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[9.5px] text-[#A1A1AACC] hover:text-white">
                Courses
              </button>
              <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] md:inline hidden text-[9.5px] text-[#A1A1AACC] hover:text-white">
                Reviews
              </button>
            </div>
          </div>
        </section>
        <section className="w-full flex md:flex-row flex-col my-14">
          <div className="text-white my-auto w-1/2 items-center">
            <div className="subheading-gradient text-5xl font-bold pb-4">
              Subscriptions Plans
            </div>
            <div className="text-[#A1A1AACC] text-lg">
              With Cobalt, managing your business finances is effortless,
              empowering, and anything but boring. Our intuitive platform
              bringsclarity to your cash flow, simplifies your.{" "}
              <span className="text-white">
                Say no to spreadsheets and tools designed in the 80s.
              </span>
            </div>
          </div>
          <div className="text-white flex my-auto w-1/2 gap-8">
            <div className="flex-1 rounded-2xl bg-[#18181B80] p-5">
              <div className="text-right opacity-60">21 Days Left</div>
              <div className="text-3xl font-bold subheading-gradient mb-4">
                Basic
              </div>
              <div className="text-5xl font-bold mb-3">₹2,999/-</div>
              <div className="text-lg mt-auto opacity-60 mb-6">
                1 Month Access
              </div>
              <div className="mb-8">
                <div className="flex mb-4 font-medium">
                  <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
                  Voice messages anywhere
                </div>
                <div className="flex mb-4 font-medium">
                  <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
                  Voice messages anywhere
                </div>
                <div className="flex mb-4 font-medium">
                  <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
                  Voice messages anywhere
                </div>
              </div>
              <div className="text-center">
                <button className="bg-white text-black px-12 py-2 rounded-lg border-gray-700 border-4">
                  Renew
                </button>
              </div>
            </div>
            <div className="flex-1 bg-opacity-5 p-5">
              <div className="text-3xl font-bold subheading-gradient mb-4 mt-6">
                Standard
              </div>
              <div className="text-5xl font-bold mb-3">₹5,999/-</div>
              <div className="text-lg mt-auto opacity-60 mb-6">
                3 Month Access
              </div>
              <div className="mb-8">
                <div className="flex mb-4 font-medium">
                  <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
                  Voice messages anywhere
                </div>
                <div className="flex mb-4 font-medium">
                  <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
                  Voice messages anywhere
                </div>
                <div className="flex mb-4 font-medium">
                  <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
                  Voice messages anywhere
                </div>
              </div>
              <div className="text-center">
                <button className="text-white px-12 py-2 rounded-lg border-white border-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full my-8 flex gap-20 mb-24">
          <div className="flex flex-col w-2/3 text-white">
            <div className="subheading-gradient text-5xl font-bold pb-4">
              Key highlights to join this subscription
            </div>
            <div className="text-[#A1A1AACC] mb-9">
              With Cobalt, managing your business finances is effortless,
              empowering.
            </div>
            <div className="flex gap-8">
              <div className="flex-1 flex flex-col gap-6">
                <div className="rounded-xl flex py-6 px-5 gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-[60px] h-[60px] border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] text-lg">Lorem Ipsum Dolor</p>
                    <p className="text-[#A1A1AACC] text-sm">
                      Have full control of your business finances on{" "}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl flex py-6 px-5 gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-[60px] h-[60px] border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] text-lg">Lorem Ipsum Dolor</p>
                    <p className="text-[#A1A1AACC] text-sm">
                      Have full control of your business finances on{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div className="rounded-xl flex py-6 px-5 gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-[60px] h-[60px] border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] text-lg">Lorem Ipsum Dolor</p>
                    <p className="text-[#A1A1AACC] text-sm">
                      Have full control of your business finances on{" "}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl flex py-6 px-5 gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-[60px] h-[60px] border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] text-lg">Lorem Ipsum Dolor</p>
                    <p className="text-[#A1A1AACC] text-sm">
                      Have full control of your business finances on{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-white">
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
                <button className="bg-white text-black px-12 py-2 rounded-lg border-gray-700 border-4">
                  Renew
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-24 border-2 rounded-2xl border-[#f4f4f50e] p-8">
          <p className="subheading-gradient text-5xl font-bold pb-8">
            Subscriptions Details
          </p>
          <div className="text-[#A1A1AACC] flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur. Et fames faucibus sed
              porttitor. In amet at et sit donec. Eleifend dui rhoncus sit non
              nunc vitae faucibus lectus molestie. Rhoncus mattis commodo ac
              lectus at egestas ipsum mi volutpat. Orci nisi vestibulum eu orci.
              Elit orci pellentesque ornare suscipit. Et quis placerat etiam
              nunc sed risus erat volutpat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam
              sagittis nisl faucibus. Sed adipiscing condimentum volutpat cursus
              in risus sed sit. Ipsum aliquam urna porttitor eu. Volutpat ac sit
              at semper tortor vulputate. Purus pulvinar vestibulum cras odio.
              Congue amet sagittis dui pellentesque consectetur pellentesque et
              fermentum. Arcu elementum tempor nulla quis aenean fusce ut
              vulputate. A quam vitae magna pellentesque. Ut volutpat adipiscing
              purus faucibus duis orci. Accumsan venenatis eu vitae interdum
              dolor. Nunc at nibh habitant condimentum vitae. Semper luctus
              vulputate lacinia sit diam tellus id vitae. Morbi aliquet bibendum
              scelerisque vestibulum aliquet venenatis eu et. Proin bibendum
              eget lectus consequat id vitae. Eu hendrerit lobortis turpis quam
              ornare egestas tincidunt donec nulla. Justo nisi ac diam mauris
              cursus turpis lacus. Vulputate cras sem nec id eget. Cras lectus
              vestibulum dictum enim. Mauris ultrices etiam ac facilisis
              malesuada. Odio accumsan fringilla malesuada faucibus fusce
              pellentesque. Non nunc cursus nisl odio. Pellentesque laoreet
              molestie proin tincidunt cursus. Integer non odio turpis ac sem
              aliquam in ante congue. Erat pharetra sed semper duis duis
              penatibus. Ut congue interdum cras convallis eu nibh quis. Arcu at
              accumsan neque ultricies tellus massa leo nulla sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et fames faucibus sed
              porttitor. In amet at et sit donec. Eleifend dui rhoncus sit non
              nunc vitae faucibus lectus molestie.{" "}
            </p>
          </div>
          <button className="text-white flex items-center gap-4 py-6">
            Explore More <img className="w-4 h-4" src={arrow} alt="" />
          </button>
        </section>
        <section className="border-2 rounded-2xl border-[#f4f4f50e] p-10 text-white">
          <p className="text-5xl subheading-gradient font-bold mb-9">Courses</p>
          <div className="flex gap-20 mb-12">
            <div className="flex-1 border-2 rounded-2xl border-[#FFFFFF0D] bg-[#FFFFFF0D] bg-opacity-5 relative">
              <img src={courseImg} alt="" />
              <span className="flex items-center gap-1 absolute top-3 right-7">
                <img className="w-3 text-xl" src={stars} alt="" />
                4.4
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-3xl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex gap-2 items-center">
                  <img className="w-5 h-5" src={level} alt="" />
                  <span className="text-[#e4e4e781]">Level:</span>Medium
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-5 h-5" src={duration} alt="" />
                  <span className="text-[#e4e4e781]">Duration:</span>7hr 20m
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-5 h-4" src={sessions} alt="" />
                  <span className="text-[#e4e4e781]">Sessions:</span>10
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-5 h-5" src={lifetimeAccess} alt="" />
                  <span className="text-[#e4e4e781]">Access:</span>Lifetime
                  Access
                </div>
                <div className="flex gap-2 items-center col-start-1 col-end-3">
                  <img className="w-5 h-5" src={anywhereAccess} alt="" />
                  <span className="text-[#e4e4e781]">
                    Access From Any Computer, Tablet or Mobile
                  </span>
                </div>
              </div>
              <div className="flex gap-16 items-center">
                <span className="text-5xl font-bold">₹2,999/-</span>
                <button className="bg-white text-black px-12 py-2 rounded-lg border-gray-700 border-4">
                  Buy Now
                </button>
              </div>
              <button className="flex items-center text-base">
                Explore More{" "}
                <img className="w-4 ms-3" src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="">
            <p className="subheading-gradient text-3xl font-bold mb-4">
              About Course
            </p>
            <div className="text-[#A1A1AACC] mb-6">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur. Et fames faucibus sed
                porttitor. In amet at et sit donec. Eleifend dui rhoncus sit non
                nunc vitae faucibus lectus molestie. Rhoncus mattis commodo ac
                lectus at egestas ipsum mi volutpat. Orci nisi vestibulum eu
                orci. Elit orci pellentesque ornare suscipit. Et quis placerat
                etiam nunc sed risus erat volutpat.
              </p>
              <ul className="list-outside list-disc mb-5 leading-loose ps-6">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam
                  sagittis nisl faucibus. Sed adipiscing condimentum volutpat.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam
                  sagittis nisl faucibus.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam
                  sagittis nisl faucibus. Sed adipiscing condimentum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam
                  sagittis nisl faucibus. Sed adipiscing condimentum volutpat,
                  Nibh lectus aliquam sagittis nisl faucibus. Sed adipiscing
                  condimentum volutpat.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam
                sagittis nisl faucibus. Sed adipiscing condimentum volutpat
                cursus in risus sed sit. Ipsum aliquam urna porttitor eu.
                Volutpat ac sit at semper tortor vulputate. Purus pulvinar
                vestibulum cras odio. Congue amet sagittis dui pellentesque
                consectetur pellentesque et fermentum. Arcu elementum tempor
                nulla quis aenean fusce ut vulputate. A quam vitae magna
                pellentesque. Ut volutpat adipiscing purus faucibus duis orci.
                Accumsan venenatis eu vitae interdum dolor. Nunc at nibh
                habitant condimentum vitae. Semper luctus vulputate lacinia sit
                diam tellus id vitae. Morbi aliquet bibendum scelerisque
                vestibulum aliquet venenatis eu et. Proin bibendum eget lectus
                consequat id vitae. Eu hendrerit lobortis turpis quam ornare
                egestas tincidunt donec nulla. Justo nisi ac diam mauris cursus
                turpis lacus. Vulputate cras sem nec id eget. Cras lectus
                vestibulum dictum enim. Mauris ultrices etiam ac facilisis
                malesuada. Odio accumsan fringilla malesuada faucibus fusce
                pellentesque. Non nunc cursus nisl odio. Pellentesque laoreet
                molestie proin tincidunt cursus. Integer non odio turpis ac sem
                aliquam in ante congue. Erat pharetra sed semper duis duis
                penatibus. Ut congue interdum cras convallis eu nibh quis. Arcu
                at accumsan neque ultricies tellus massa leo nulla sed.
              </p>
            </div>
            <button className="flex items-center">
              Close <img className="w-4 ms-3" src={arrow} alt="arrow" />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SubscriptionRA;
