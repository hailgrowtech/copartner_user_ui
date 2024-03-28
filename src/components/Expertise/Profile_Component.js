// src/components/assets/expertise/expertise.js

import React from 'react';
import './Expertise.css';
import { expertsData } from '../../constants';
import { userBck, stars, arrow, telegram } from '../../assets';

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + 'K';
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCard = ({ expert }) => {
  return (
    <div className='profile-div rounded-xl'>
      <div className="background-wrapper">
        <img src={userBck} alt="Background" className="background-image" />
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
          <div className="rating text-white">
            <div className='flex items-center gap-1'>
              <img src={stars} alt="stars" className="w-[11.5px] h-[11.5px]" />{expert.rating}
            </div>
          </div>
        </div>
        <div className="experience-followers text-white md:mb-5 mb-2">
          <div className="experience"> <span>Experience</span> <br/>{expert.experience}</div>
          <div className="followers"> <span>Followers </span><br/>{formatFollowers(expert.followers)}</div>
        </div>
        <div className="description text-[#A1A1AACC] md:mb-6 mb-2 text-[15px]">{expert.description}</div>
        <div className="prize-subscription text-white">
          <button className='flex items-center mx-auto md:py-1.5 py-1 md:px-6 px-2 border-solid border-2 border-[#4e4e4ecc] rounded-3xl'>
            <img width={"24rem"} src={telegram} alt='telegram' className='rounded-[50%] text-[1.5rem] telegram me-3' />
              Join Telegram
            <img width={"17rem"} src={arrow} alt='arrow' className='ms-3'/></button>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <section className="section">
      <div className="expert-grid">
        {expertsData.map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;