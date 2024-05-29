import React from "react";
import {
  logo,
  linkedin,
  instagram,
  exclamation,
  danger,
  arrow,
} from "../../assets";
import { Link } from "react-router-dom";
const ProductList = [
  { name: "About Us", link: "/about", id: 'about' },
  { name: "FAQ's", link: "/faqs", id: 'faqs' },
  { name: "Features", link: "/about", id: 'features' },
  { name: "Blog", link: "/blogs", id: 'blog' },
  { name: "Privacy Policy", link: "/privacy", id: 'privacy' },
  // { name: "Refund Policy", link: "/refund-policy", id: 'refund' },
  { name: "Terms of Service", link: "/terms_of_service", id: 'terms' },
];
const CommunityList = [
  { name: "Expertises", link: "/expertise" },
  { name: "Subscription", link: "/subscription" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="md:w-[1440px] w-full md:h-[198px] md:gap-0 h-[506px] md:pt-[8rem] pt-4 justify-around border-t border-solid border-white border-opacity-10 flex md:flex-row flex-col items-center">
        <div className="flex flex-col gap-[0.5rem]">
          <Link onClick={scrollToTop} to="/">
            <img src={logo} alt="" className="md:w-56 w-40" />
          </Link>
          <span className="md:w-[296px] w-[296px] md:h-[84px] h-[66px] font-normal md:text-[16px] text-[14px] md:leading-[20px] leading-[22px] text-dimWhite">
            Connecting India’s SEBI registered Research Analysts, guiding you thoroughly to maximising profits in the dynamic world of stock trading.
          </span>
          <div className="flex gap-7 rounded-full">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/copartnerindia/"
            >
              <img src={linkedin} alt="LinkeDin" className="w-8" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/copartner.in"
            >
              <img src={instagram} alt="Instagram" className="w-8" />
            </a>
          </div>
          <div className="justify-start flex-col md:block hidden items-start py-2 md:w-[296px] w-[296px] md:h-[80px] h-[66px] md:leading-[20px] leading-[14px]">
            <span className="flex items-start gap-2 md:text-[12px] text-[10px] text-[#c9c9c9] mt-[10px]">
              <img src={exclamation} className="w-5 h-5" alt="" />
              Disclaimer: Investments in securities market are subject to market
              risks, read all the related documents carefully before investing.
              For further disclosures.
            </span>
            <Link
              onClick={scrollToTop}
              className="text-white text-sm ml-7 flex items-center"
              to="disclaimer"
            >
              Read More <img className="w-4" src={arrow} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-[4rem]">
          <div className="flex flex-col justify-around w-full h-[210px]">
            <span className="w-[48px] h-[15px] font-medium md:text-[20px] text-[18px] leading-[14.7px] mb-4 text-white">
              Company
            </span>
            {ProductList.map((product) => (
              <Link
                onClick={scrollToTop}
                to={product.link}
                key={product.id}
                className="font-normal text-[0.9rem] text-left leading-[14.7px] text-dimWhite hover:text-white"
              >
                {product.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-between w-[117px] md:h-[89px] h-[79px] mt-[4px]">
            <span className="md:w-[140px] md:h-[15px] w-[125px] font-medium md:text-[20px] text-[18px] leading-[14.7px] mb-4 text-white">
              What We Offer
            </span>
            {CommunityList.map((community) => (
              <Link
                onClick={scrollToTop}
                to={community.link}
                key={community.link}
                className="font-normal text-[0.9rem] leading-[14.7px] text-dimWhite text-left hover:text-white"
              >
                {community.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="justify-start flex-col md:hidden block items-start py-2 md:w-[296px] md:h-[80px] mx-8 md:leading-[20px] leading-[14px]">
          <span className="flex items-start gap-2 md:text-[12px] text-xs text-[#c9c9c9] mt-[10px]">
            <img src={exclamation} className="w-5 h-5" alt="" />
            Disclaimer: Investments in securities market are subject to market
            risks, read all the related documents carefully before investing.
            For further disclosures.
          </span>
          <Link
            onClick={scrollToTop}
            className="text-white text-sm ml-7 flex items-center"
            to="disclaimer"
          >
            Read More <img className="w-4" src={arrow} alt="" />
          </Link>
        </div>
      </div>
      <span className="text-dimWhite flex justify-center md:w-full mx-auto items-center text-center font-[400] text-[12px] leading-[15px] md:mb-0 mb-4 md:mt-[11rem]">
        @Copyright 2024. All rights reserved
      </span>
      <div
        style={{
          backgroundImage:
            "linear-gradient(94.34deg, #FFFFFF 0%, #9BD0F5 100%)",
        }}
        className="md:mt-[2rem] w-full justify-around flex md:flex-row flex-col items-center"
      >
        <div className="border-[1px] p-2 md:px-[50px] rounded-md">
          <span className="flex gap-2 md:text-[16px] text-[15px] text-[##18181B] md:my-[10px] marquee">
            <img src={danger} className="w-5 h-5" alt="" />
            <span>
              Disclaimer: The investment advice, trading tips, strategies,
              courses, webinars, and other information provided by SEBI
              registered research analysts on the COPARTNER platform represent
              their individual views and opinions. COPARTNER does not endorse or
              validate these views, and users are encouraged to conduct their
              own research and exercise caution before acting upon any
              information provided.
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;
