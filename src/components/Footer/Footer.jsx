import React from "react";
import { logo, facebook, linkedin, twitter, instagram } from "../../assets";
const ProductList = [
  "About Us",
  "FAQ's",
  "Privacy Policy",
  "Terms of Service",
  "Disclaimer",
  "Submit Grievance",
  "Features",
];
const CommunityList = ["Subscription", "Courses", "Webinar"];
const Footer = () => {
  return (
    <div className="md:w-[1440px] w-full md:h-[198px] h-[506px] md:pt-[6rem] pt-[1rem] justify-around border-t border-solid border-white border-opacity-10 flex md:flex-row flex-col items-center">
      <div className="flex flex-col gap-[1rem]">
        <img src={logo} alt="" className="md:w-56 w-40" />
        <span className="md:w-[296px] w-[296px] md:h-[84px] h-[66px] font-normal md:text-[16px] text-[14px] md:leading-[28px] leading-[22px] text-dimWhite">
          Our partnerships have delivered great value to our projects and we’re
          happy to share some of their feedback below
        </span>
        <div className="flex gap-7 rounded-full">
          <a href="">
            <img src={facebook} alt="Facebook" className="w-8" />
          </a>
          <a href="">
            <img src={linkedin} alt="LinkeDin" className="w-8" />
          </a>
          <a href="">
            <img src={twitter} alt="Twitter" className="w-8" />
          </a>
          <a href="">
            <img src={instagram} alt="Instagram" className="w-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-[4rem]">
        <div className="flex flex-col justify-around w-full h-[220px]">
          <span className="w-[48px] h-[15px] font-medium text-[1.2rem] leading-[14.7px] mb-4 text-white">
            Product
          </span>
          {ProductList.map((product) => (
            <span
              key={product}
              className="font-normal text-[0.9rem] leading-[14.7px] text-dimWhite hover:text-white"
            >
              {product}
            </span>
          ))}
        </div>
        <div className="flex flex-col justify-between w-[117px] h-[110px]">
          <span className="w-[48px] h-[15px] font-medium text-[1.2rem] leading-[14.7px] mb-4 text-white">
            Community
          </span>
          {CommunityList.map((community) => (
            <span
              key={community}
              className="font-normal text-[0.9rem] leading-[14.7px] text-dimWhite hover:text-white"
            >
              {community}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
