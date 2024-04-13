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
  return (
    <Link to="/subscription/ra-detail">
      <div className="profile-div rounded-2xl p-1 md:p-1">
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
              className="profile-image mx-auto"
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
          <div className="experience-followers text-white mb-2">
            <div className="experience">
              {" "}
              <span>Experience</span> <br />
              {expert.experience}
            </div>
            <div className="followers">
              {" "}
              <span>Followers </span>
              <br />
              {formatFollowers(expert.followers)}
            </div>
          </div>
          <div className="description text-[#A1A1AACC] mb-2 text-sm md:text-base text-left leading-3">
            {expert.description}
          </div>
          <div className="flex flex-col">
            <div className=" w-[90%] flex md:items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)] md:me-auto md:ms-0 mx-auto bg-[#ffffff32] mb-2">
              <div className="flex justify-center items-center gap-2">
                <button className="text-white font-[400] text-[10px] leading-[19px] py-0.5">
                  1 Month Subscription
                </button>
              </div>
            </div>
            <div className="md:ms-auto flex items-center mx-auto text-gray-500 text-[10px]">
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
