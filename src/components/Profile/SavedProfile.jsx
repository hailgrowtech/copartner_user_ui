import React from 'react';
import Card from "../Subscription/Profile_Component";

const SavedProfile = () => {
  return (
    <div className="container bg-transparent mt-10 md:p-8 p-0 rounded-lg border-2 border-[#ffffff34]">
      <div className='md:pb-5'>
      <div className="subheading-color md:text-left text-center font-bold md:text-[50px] text-[30px] md:leading-[50px] leading-[51px]">Favorite Expertise
      </div>
      <p className="font-normal text-[#A1A1AACC] md:px-[2px] px-[10px] text-center md:text-left md:text-[18px] text-[14px] md:leading-[28px] leading-[17px]">
      Guiding Your Investments to Greatness: Our Expertise, Your Financial Advantage!
          </p>
          </div>
      <div className="heading">
        <Card />
      </div>
    </div>
  );
};

export default SavedProfile;
