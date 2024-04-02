import React from 'react';
import './css/card.css';
import backgroundImage from '../assets/userBck.png';
import { expertsData } from '../constants';
import starImage from "../assets/Stars Minimalistic.png";
import telegramImage from "../assets/telegram.png";
import { arrow } from '../assets';

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + 'K';
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCard = ({ expert }) => {
  return (
    <div className='profile-div rounded-2xl p-1 md:p-4 mb-8'>
      <div className="background-wrapper">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <div>
          <img src={expert.image} alt={`Profile of ${expert.name}`} className="profile-image mx-auto" />
        </div>
      </div>
      <div className="info">
        <div className="name-rating mb-2">
          <div className="name-role text-white">
            <h3>{expert.name}</h3>
            <p>{expert.role}</p>
          </div>
          <div className="flex rating text-white">
            <img src={starImage} alt="Star" className="w-4 h-4 mr-1" />
            <div className='text-[12px]'>{expert.rating}</div>
          </div>
        </div>
        <div className="experience-followers text-white mb-2">
          <div className="experience">
            <span>Experience</span> <br/>{expert.experience}
          </div>
          <div className="followers">
            <span>Followers</span><br/>{formatFollowers(expert.followers)}
          </div>
        </div>
        <div className="description text-[#A1A1AACC] mb-2 text-sm md:text-base">
          {expert.description}
        </div>
        <div className="prize-subscription text-white">
          <button className='flex items-center mx-auto py-1.5 px-5 border-solid border-2 border-[#4e4e4ecc] rounded-3xl'>
            <img src={telegramImage} alt="Telegram" className='md:w-6 md:h-6 w-4 h-4 me-3' />
            <p className='text-[8px] md:text-lg'>Join Telegram</p>
            <div className="w-5 h-5">
            <img src={arrow} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <section className="section px-1 md:px-5">
      <div className="expert-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {expertsData.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
