// src/components/assets/expertise/expertise.js

import React from 'react';
import './Expertise.css';
import { expertsData } from '../../constants';
import backgroundImage from '../../assets/Expertise/background.png';
import { FaTelegram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + 'K';
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCard = ({ expert }) => {
  return (
    <div className='profile-div rounded-2xl'>
      <div className="background-wrapper">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <div>
          <img src={expert.image} alt={`Profile of ${expert.name}`} className="profile-image mx-auto" />
        </div>
      </div>
      <div className="info">
        <div className="name-rating md:mb-6 mb-2">
          <div className="name-role text-white">
            <h3>{expert.name}</h3>
            <p>{expert.role}</p>
          </div>
          <div className="rating text-white">🌟{expert.rating}</div>
        </div>
        <div className="experience-followers text-white md:mb-5 mb-2">
          <div className="experience"> <span>Experience</span> <br/>{expert.experience}</div>
          <div className="followers"> <span>Followers </span><br/>{formatFollowers(expert.followers)}</div>
        </div>
        <div className="description text-[#A1A1AACC] md:mb-6 mb-2 text-[15px]">{expert.description}</div>
        <div className="prize-subscription text-white">
          <button className='flex items-center mx-auto md:py-1.5 py-1 md:px-6 px-2 border-solid border-2 border-[#4e4e4ecc] rounded-3xl'><FaTelegram className='text-[#2297d0] bg-[white] rounded-[50%] text-[1.5rem] telegram me-3' />Join Telegram<IoIosArrowForward className='ms-3'/></button>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <section className="section">
      <div className="expert-grid md:px-6">
        {expertsData.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
