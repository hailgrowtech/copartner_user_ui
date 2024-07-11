import React from 'react'
import LiveChatCards from './LiveChatCards'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import './LiveChat.css'

const LiveChatSection = () => {
  return (
    <div className='flex flex-col md:mt-[100px] mt-5'>
      
      <Marquee
        fade={true}
        direction="left"
        reverse={false}
        speed={50}  // Increase this value to make the marquee content move faster
        className="text-white bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 py-2 [--duration:5s]"
        innerClassName="px-4"
      >
        <div>🥳 Celebrating 1 Million+ Learners 🥳 Special Offer!</div>
      </Marquee>
      
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

      
    </div>
  )
}

export default LiveChatSection
