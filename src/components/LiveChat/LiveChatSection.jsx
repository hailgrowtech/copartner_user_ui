import React from 'react';
import LiveChatCards from './LiveChatCards';
import Marquee from "react-fast-marquee";

const LiveChatSection = () => {
  return (
    <div className='flex flex-col md:mt-[100px] mt-5'>
      
      <div style={{ width: '100vw', margin: '0 -50vw', left: '50%', position: 'relative' }}>
        <Marquee gradient={false} style={{ background: 'linear-gradient(90.81deg, #0181F1 -6.15%, #5ABEE2 54.57%, #AF53AC 107.78%)', color: 'white', padding: '10px 0' }}>
          <p className='px-30'>🥳 Celebrating 1 Million+ Learners 🥳 Special Offer!</p>
          <p className='px-40'>🥳 Celebrating 1 Million+ Learners 🥳 Special Offer!</p>
          <p className='px-40'>🥳 Celebrating 1 Million+ Learners 🥳 Special Offer!</p>
          <p className='px-40'>🥳 Celebrating 1 Million+ Learners 🥳 Special Offer!</p>

        </Marquee>
      </div>
      
      <div className='flex md:flex-row flex-col md:justify-between items-center py-3 w-full'>
        <h1 className="subheading-color text-5xl">Live Chat</h1>
        <div className="md:w-[600px] md:text-left text-center text-[#ffffffa2] p-2">
          Guiding Your Investments to Greatness: Our Expertise, Your Financial Advantage! {" "}
          <span className="text-white">
            Say no to spreadsheets and tools designed in the 80s.
          </span>
        </div>
      </div>
      <div className='md:flex'>
        <LiveChatCards />
      </div>

      {/* <div className='md:hidden'>
        <LiveChatCarousel />
      </div> */}
    </div>
  );
}

export default LiveChatSection;
