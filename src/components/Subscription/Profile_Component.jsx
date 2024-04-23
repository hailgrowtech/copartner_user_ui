import React from "react";
import "../css/card.css";
// import backgroundImage from "../../assets/userBck.png";
import { expertise_data } from "../../constants";
// import { arrow, stars, telegram } from "../../assets";
import { Link } from "react-router-dom";

// const formatFollowers = (followers) => {
//   if (followers > 999) {
//     return (followers / 1000).toFixed(1) + "K";
//   } else {
//     return followers.toFixed(0);
//   }
// };

const ExpertCard = ({ expert }) => {
  return (
    <div
      key={expert.id}
      className="sm:w-[384px] sm:h-[460px] w-[172px] h-[250px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
    >
      <div className="w-[72px] h-[98px] sm:w-[384px] sm:h-[219px]  relative profile-image_1 mb-4">
        <img
          src={expert.icon}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
        />
        <img
          src={expert.userImg}
          alt="User"
          className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
        />
      </div>

      <div className="w-[154px] h-[22px] sm:w-[319px] sm:h-[40px] flex justify-between px-[5px] sm:px-[1rem]">
        <div className="flex flex-col w-[68px] h-[22px] sm:w-[101px] sm:h-[40px] gap-2">
          <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
            {expert.name}
          </span>
          <span className="sm:text-[13px] text-[8px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
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

      <div className="sm:w-[256px] sm:h-[50px] w-[143px] h-[22px] flex items-start mt-2 justify-between">
        <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
          <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[8px] leading-[10px]">
            {expert.experience}
          </span>
          <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[8px] leading-[10px]">
            {expert.totalExp}
          </span>
        </div>
        <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
        <div className="flex">
          <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
            <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[8px] leading-[10px]">
              {expert.followers}
            </span>
            <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[8px] leading-[10px]">
              {expert.totalFollowers}
            </span>
          </div>
        </div>
      </div>

      <div className="sm:w-[300px] sm:h-[72px] w-[144px] h-[32px] mb-4 sm:block contents">
        <span className="text-dimWhite sm:text-[14px] text-[7px] sm:w-[278px] sm:h-[24px] sm:leading-[24px] leading-[11px] mb-[5px]">
          {expert.content}
        </span>
      </div>

      <div className="md:w-[211px] md:h-[40px] w-[146px] h-[32px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0">
        <div className="flex justify-center items-center gap-2">
          <img
            src={expert.telegram}
            alt="Telegram"
            className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
          />
          <button className="text-white font-[400] md:text-[15px] text-[10px] leading-[19px]">
            {expert.greet}
          </button>
          <img
            src={expert.arrowIcon}
            alt="arrow"
            className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
          />
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="section px-1 md:px-5">
      <div className="expert-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {expertise_data.map((expert) => (
          <Link onClick={scrollToTop} to="/subscription/ra-detail">
            <ExpertCard key={expert.id} expert={expert} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
