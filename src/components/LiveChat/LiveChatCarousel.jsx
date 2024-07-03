import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useUserData } from '../../constants/context';
import { arrow, stars, telegram, userBck } from '../../assets';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LiveChatCarousel = () => {
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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
          <div key={expert.id} className="p-2">
            <Link
              onClick={scrollToTop}
              to={`/ra-detail/${expert.id}`}
              className="animated-border md:w-[384px] md:h-[400px] sm:w-[172px] h-[220px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] card-bg hover:opacity[50%] transition duration-150 ease-in-out"
            >
              <div className="w-[72px] h-[98px] sm:w-[384px] sm:h-[219px] relative profile-image_1 mb-4">
                <img
                  src={userBck}
                  alt="background"
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                />
                <img
                  src={expert.expertImagePath}
                  alt="User"
                  className="absolute top-0 left-0 w-full h-full md:object-contain object-cover rounded-t-[11px]"
                />
              </div>

              <div className="w-[154px] h-[22px] sm:w-[319px] sm:h-[40px] flex justify-between px-[5px] sm:px-[1rem]">
                <div className="flex flex-col h-[22px] w-full md:h-[40px] gap-2">
                  <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                    {expert.channelName}
                  </span>
                  <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                    {expert.name} - {getExpertType(expert.expertTypeId)}
                  </span>
                </div>
                <div className="w-[40px] h-[15px] flex justify-end">
                  <img
                    src={stars}
                    className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                    alt="rating"
                  />
                  <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[10px] leading-[10px]">
                    {expert.rating}
                  </span>
                </div>
              </div>

              <div className="md:w-[256px] w-[143px] h-[34px] flex items-start md:mt-4 mt-4 justify-between">
                <div className="flex flex-col md:w-[78px] w-[43px] h-[22px] items-center justify-between">
                  <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                    Experience
                  </span>
                  <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                    {expert.experience}+
                  </span>
                </div>
                <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                <div className="flex">
                  <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                    <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                      Followers
                    </span>
                    <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                      {`${expert.telegramFollower / 1000}k`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-[320px] bg-[#0081F1] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-3">
                <div
                  onClick={() => handleTelegram(expert.telegramChannel)}
                  className="flex justify-center items-center gap-2 btn-animate"
                >
                  <img
                    src={telegram}
                    alt="Telegram"
                    className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                  />
                  <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
                    Live Chat Now
                  </button>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LiveChatCarousel;
