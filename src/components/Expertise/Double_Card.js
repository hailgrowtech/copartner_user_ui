import React from 'react';
import './Expertise.css';
import { clientImg, userBck } from '../../assets';
import { FaTelegram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const SingleExpertCard = () => {
  return (
    <div className='profile-div rounded-xl'>
      <div className="background-wrapper">
        <img src={userBck} alt="Background" className="background-image" />
        <div>
          <img src={clientImg} alt="Default Profile" className="profile-image mx-auto" />
        </div>
      </div>
      <div className="info">
        <div className="name-rating md:mb-6 mb-2">
          <div className="name-role text-white">
            <h3>Arun Kumar</h3>
            <p>Futures & Options</p>
          </div>
          <div className="rating text-white">🌟4.4</div>
        </div>
        <div className="experience-followers text-white md:mb-5 mb-2">
          <div className="experience"> <span>Experience</span> <br/>7+</div>
          <div className="followers"> <span>Followers </span><br/>3.1k</div>
        </div>
        <div className="description text-[#A1A1AACC] md:mb-6 mb-2 text-[15px]">Have full control of your business finances on the go using our iOS</div>
        <div className="prize-subscription text-white">
          <button className='flex items-center mx-auto md:py-1.5 py-1 md:px-6 px-2 border-solid border-2 border-[#4e4e4ecc] rounded-3xl'><FaTelegram className='text-[#2297d0] bg-[white] rounded-[50%] text-[1.5rem] telegram me-3' />Join Telegram<IoIosArrowForward className='ms-3'/></button>
        </div>
      </div>
    </div>
  );
};

export default SingleExpertCard;
