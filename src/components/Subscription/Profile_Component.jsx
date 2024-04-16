import React from "react";
import "../css/card.css";
import backgroundImage from "../../assets/userBck.png";
import { expertsData } from "../../constants";
import { arrow, stars, telegram } from "../../assets";
import { Link } from "react-router-dom";

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + "K";
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCard = ({ expert }) => {
  return (
    <div className="profile-div rounded-2xl p-1 md:p-4 mb-8">
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
            className="profile-image md:max-h-48 mx-auto"
          />
        </div>
      </div>
      <div className="info">
        <div className="name-rating md:mb-6 mb-1">
          <div className="name-role text-white">
            <h3>{expert.name}</h3>
            <p>{expert.role}</p>
          </div>
          <div className="rating text-white">
            <div className='flex items-center gap-1'>
              <img src={stars} alt="stars" className="w-[11.5px] h-[11.5px]" />{expert.rating}
            </div>
          </div>
        </div>
        <div className="experience-followers text-white md:mb-5 mb-1">
          <div className="experience"> <span>Experience</span> <br/>{expert.experience}</div>
          <div className="followers"> <span>Followers </span><br/>{formatFollowers(expert.followers)}</div>
        </div>
        <div className="description text-[#A1A1AACC] md:mb-6 mb-1 md:text-[15px] text-[8px]">{expert.description}</div>
        <div className="prize-subscription text-white">
          <button className='flex justify-center items-center mx-auto md:py-1.5 py-1 md:px-6 w-full border-solid border-2 border-[#4e4e4ecc] rounded-3xl'>
            <img width={"24rem"} src={telegram} alt='telegram' className='rounded-[50%] text-[1.5rem] telegram me-2' />
              <span className='text-xs py-0.5'>Join Telegram</span>
            <img width={"17rem"} src={arrow} alt='arrow' className='ms-2'/></button>
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
        {expertsData.map((expert) => (
          <Link onClick={scrollToTop} to="/subscription/ra-detail">
            <ExpertCard key={expert.id} expert={expert} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
