// src/components/assets/expertise/expertise.js

import React from 'react';
import './Expertise.css';
import clientImg from '../assets/Expertise/image 11.png';
import backgroundImage from '../assets/Expertise/background.png'
import { FaTelegram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const expertsData = [
  {
    id: 1,
    image: clientImg,
    name: 'John Doe',
    role: 'Stock Market',
    rating: 4.5,
    experience: '10+',
    followers: 5289,
    description: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    prize: '5000',
  },

  {
    id: 2,
    image: clientImg,
    name: 'John Doe',
    role: 'Stock Market',
    rating: 4.5,
    experience: '10+',
    followers: 5289,
    description: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    prize: '5000',
  },


  {
    id: 3,
    image: clientImg,
    name: 'John Doe',
    role: 'Stock Market',
    rating: 4.5,
    experience: '10+',
    followers: 5289,
    description: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    prize: '5000',
  },
  
  {
    id: 4,
    image: clientImg,
    name: 'John Doe',
    role: 'Stock Market',
    rating: 4.5,
    experience: '10+',
    followers: 5289,
    description: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    prize: '5000',
  },

  {
    id: 5,
    image: clientImg,
    name: 'John Doe',
    role: 'Stock Market',
    rating: 4.5,
    experience: '10+',
    followers: 5289,
    description: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    prize: '5000',
  },

  {
    id: 6,
    image: clientImg,
    name: 'John Doe',
    role: 'Stock Market',
    rating: 4.5,
    experience: '10+',
    followers: 5289,
    description: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    prize: '5000',
  },


  

];

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + 'K';
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCard = ({ expert }) => {
  return (
    <div className='profile-div rounded-2xl pt-4'>
      <div className="background-wrapper">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <div className='dark-overlay'>
          <img src={expert.image} alt={`Profile of ${expert.name}`} className="profile-image" />
        </div>
      </div>
      <div className="info">
        <div className="name-rating mb-6">
          <div className="name-role text-white">
            <h3>{expert.name}</h3>
            <p>{expert.role}</p>
          </div>
          <div className="rating text-white">🌟{expert.rating}</div>
        </div>
        <div className="experience-followers text-white mb-5">
          <div className="experience"> <span>Experience</span> <br/>{expert.experience}</div>
          <div className="followers"> <span>Followers </span><br/>{formatFollowers(expert.followers)}</div>
        </div>
        <div className="description text-[#A1A1AACC] mb-6 text-[15px]">{expert.description}</div>
        <div className="prize-subscription text-white">
          <button className='flex items-center mx-auto py-1.5 px-6 border-solid border-2 border-[#4e4e4ecc] rounded-3xl'><FaTelegram className='text-[#2297d0] bg-[white] rounded-[50%] text-[1.5rem] me-3' />Join Telegram<IoIosArrowForward className='ms-3'/></button>
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
