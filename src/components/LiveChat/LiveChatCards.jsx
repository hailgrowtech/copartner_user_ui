import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import { useUserData } from '../../constants/context';
import { LiveChat, arrow, stars, telegram, userBck } from '../../assets';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LiveChatCards = () => {
  const userData = useUserData();

  const getExpertType = (typeId) => {
    switch (typeId) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Futures & Options";
      default:
        return "Unknown";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleTelegram = (channel) => {
    window.open(channel, "_blank");
  };

  const TypingAnimation = ({ name, type }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [typingPhase, setTypingPhase] = useState('name');
    const [delay, setDelay] = useState(false);

    useEffect(() => {
      if (delay) {
        const delayTimeout = setTimeout(() => {
          setDelay(false);
          setIndex(0);
        }, 2000); // Delay of 2 seconds
        return () => clearTimeout(delayTimeout);
      }

      const text = typingPhase === 'name' ? name : type;
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        if (index < text.length) {
          setIndex(index + 1);
        } else {
          setDelay(true);
          setTypingPhase(typingPhase === 'name' ? 'type' : 'name');
        }
      }, 100);

      return () => clearTimeout(timeout);
    }, [index, typingPhase, delay, name, type]);

    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayedText}
      </motion.span>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {userData?.map((expert, id) => (
          <div key={expert.id} className=" text-white ">
            <Link
              onClick={scrollToTop}
              to={`/ra-detail/${expert.id}`}
              className="rounded-[11px] md:w-[250px] md:mt-0 mt-[5px] p-1 relative flex flex-col items-center border-[1px] border-[#ffffff43] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
            >
              <div className="relative w-full  md:h-[300px] h-[220px] flex flex-col justify-end items-center overflow-hidden rounded-t-[11px]">
                <span className="absolute top-2 right-2 flex flex-row items-center card-bg bg-transparent border-[0px]  text-white text-xs px-2 py-[0.9px] animate-fade" style={{ zIndex: 2 }}><span className="w-[0.3rem] h-[0.3rem] bg-[#f62525] mr-1 rounded-full"></span>
                Live</span>
                <img src={userBck} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                <img src={expert.expertImagePath} alt={expert.name} className="absolute top-0 w-full h-auto object-contain mt-2" style={{ zIndex: 1, maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)" }} />
                <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center p-1 bg-gradient-to-t from-black via-transparent" style={{ zIndex: 2 }}>
                  <div className='flex flex-col justify-start items-start w-full'>
                    <span className="text-left md:text-[16px] text-[14px]">Live Chat With</span>
                    <motion.h3 className=" font-bold md:text-[16px] text-[14px] text-white text-left text-gradient md:h-[30px]">
                      {/* <TypingAnimation name={expert.name} type={getExpertType(expert.expertTypeId)} /> */}
                      {expert.name}
                    </motion.h3>
                  </div>
                  <div className="flex items-center md:mt-[0.5px] text-[10px] text-[#ffffff9c] justify-between w-full">
                    {/* <div className="flex flex-col items-center justify-between">
                      <span className="text-dimWhite font-[400] text-[13px]">Experience</span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">{expert.experience}+</span>
                    </div>
                    <div className="sm:w-[1.4px] sm:h-[30px] flex items-center justify-center w-[0.4px] h-[16px] bg-[#ffffff85]"></div>
                    <div className="flex">
                      <div className="flex flex-col items-center">
                        <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">Followers</span>
                        <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">{`${expert.telegramFollower / 1000}k`}</span>
                      </div>
                    </div> */}
                    SEBI: {expert.sebiRegNo}
                  </div>
                  <button
                    className="mt-2 w-full flex items-center justify-center text-[#fff] hover:underline"
                    onClick={() => handleTelegram(expert.telegram)}
                    style={{ background: "#2BDE70", padding: '0.5rem 1rem', borderRadius: '2rem' }}
                  >
                    <span className='flex items-center justify-center btn-animate text-[13px] font-bold'>
                      <img src={LiveChat} alt="Live Chat" className="w-4 h-4 mr-1" />
                      Chat Now
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center mt-3'>
      
      <button className="md:flex items-center justify-center md:hidden flex w-[110px] h-[30px] rounded-[4.5px] bg-lightWhite text-[10px] font-[500] leading-[12px] md:ml-0">
                Show More
              </button>      
      </div>
    </div>
  );
};

export default LiveChatCards;