import React from 'react';
import '../css/card.css';
import backgroundImage from '../../assets/userBck.png';
import { expertsData } from '../../constants';
import StarImage from '../../assets/Stars Minimalistic.png';
import { Link } from 'react-router-dom';

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + 'K';
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCardSub = ({ expert }) => {
  return (
    <div className='profile-div rounded-2xl p-1 md:p-1'>
      <div className="background-wrapper">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <div>
          <img src={expert.image} alt={`Profile of ${expert.name}`} className="profile-image mx-auto" />
        </div>
      </div>
      <div className="info">
        <div className="name-rating mb-2 flex items-center justify-between">
          <div className="name-role text-white">
            <h3>{expert.name}</h3>
            <p>{expert.role}</p>
          </div>
          <div className="rating text-white flex items-center">
            <img src={StarImage} alt="Star" className="md:w-[20px] md:h-[20px] w-[14px] h-[14px] mr-1" />
            {expert.rating}
          </div>
        </div>
        <div className="experience-followers text-white mb-2">
          <div className="experience"> <span>Experience</span> <br/>{expert.experience}</div>
          <div className="followers"> <span>Followers </span><br/>{formatFollowers(expert.followers)}</div>
        </div>
        <div className="description text-[#A1A1AACC] mb-2 text-sm md:text-base text-left leading-3">{expert.description}</div>
        <div className="prize-subscription text-white text-center gap-4">
          
          <button className='flex items-center bg-[#ffffff32] mx-auto my-2 py-1 px-2 md:py-2 md:px-6 border-solid border-2 border-[#4e4e4ecc] rounded-3xl md:block hidden'>1 month Subscription</button>
          <button className='flex items-center bg-[#ffffff32] mx-auto my-2 py-1 px-2 md:py-2 md:px-6 border-solid border-2 border-[#4e4e4ecc] rounded-3xl md:hidden'>1 month Subs.</button>
          
          <span className="text-[#A1A1AACC] block md:inline md:text-[15px] text-[10px]">21 Days Left</span>
        </div>
      </div>
    </div>
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
