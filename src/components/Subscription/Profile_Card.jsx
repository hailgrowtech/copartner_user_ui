import React from "react";
import "../css/card.css";
import backgroundImage from "../../assets/userBck.png";
import { expertsData } from "../../constants";
import StarImage from "../../assets/Stars Minimalistic.png";
import { Link } from "react-router-dom";

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + "K";
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCardSub = ({ expert }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link onClick={scrollToTop} to="/subscription/ra-detail">
      <div className="md:w-[384px] md:h-[400px] sm:w-[172px] sm:h-[300px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out rounded-2xl p-1 md:mt-8 md:ml-0 ml-[-0.5rem]">
        <div className="background-wrapper">
          <img
            src={backgroundImage}
            alt="Background"
            className="background-image"
          />
          <div>
            <img
              src={expert.image}
              alt={`Profile of ${expert.name}`}
              className="profile-image md:max-h-36 mx-auto"
            />
          </div>
        </div>
        <div className="info">
          <div className="name-rating mb-2 flex items-center justify-between">
            <div className="name-role text-white">
              <h3>{expert.name}</h3>
              <p>{expert.role}</p>
            </div>
            <div className="rating text-white flex items-center">
              <img
                src={StarImage}
                alt="Star"
                className="md:w-[20px] md:h-[20px] w-[14px] h-[14px] mr-1"
              />
              {expert.rating}
            </div>
          </div>
          <div className="md:w-[256px] w-[143px] md:h-[44px] h-[30px] flex items-start md:mt-2 mt-4 justify-between">
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
                  {expert.followers}
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-[300px] md:h-[24px] md:mt-2 mb-2 w-full md:pl-[5px]">
            <div className="text-dimWhite md:text-[14px] flex md:flex-row flex-col text-[11px] md:leading-[18px] leading-[14px] md:pl-0 pl-[2px]">
              <span>SEBI:</span> <span className="text-white md:ml-2">{expert.description}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className=" w-[90%] flex md:items-center md:py-1 justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] mx-auto bg-[#ffffff32] mb-2">
              <div className="flex justify-center items-center gap-2">
                <button className="text-white font-[400] md:text-sm text-[10px] leading-[19px] py-0.5">
                  1 Month Subscription
                </button>
              </div>
            </div>
            <div className="md:ms-auto flex items-center mx-auto text-gray-500 md:text-sm text-[10px]">
              21 Days Left
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Subscription = () => {
  return (
    <section className="section px-1 md:px-1">
      <div className="expert-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
        {expertsData.map((expert) => (
          <ExpertCardSub key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
};

export default Subscription;
