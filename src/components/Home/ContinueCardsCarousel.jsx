import React, { useState, useRef, useEffect } from "react";
// import { AiOutlineRight } from "react-icons/ai";
import { courseExpertise_data } from "../../constants";
import { stars, telegram } from "../../assets";

const ContinueCardsCarousel = () => {
  const [startX, setStartX] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const carouselItems = courseExpertise_data.slice(0, 5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, isHovered, carouselItems.length]);
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    if (!startX) return;
    const diff = e.touches[0].clientX - startX;
    // Update currentIndex based on touch movement
    if (diff > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
      );
      setStartX(null);
    } else if (diff < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
      setStartX(null);
    }
  };
  const handleTouchEnd = () => {
    setStartX(null);
  };
  const handleHover = (hovering) => {
    setIsHovered(hovering);
  };

  return (
    <div
      className="flex items-center justify-center mt-[20px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="carousel-slide">
              <div className="w-full md:w-1/3 p-3 rounded-md mb-8 md:mb-0">
                <div className="w-full overflow-hidden relative rounded-lg bg-[#18181ba6] border border-solid border-[#f4f4f51d]">
                  <img
                    src={item.cardImg}
                    alt="Course_Image"
                    className="w-full h-60 object-cover rounded-md"
                    style={{
                      maskImage:
                        "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
                    }}
                  />
                  <div className="absolute top-0 right-0 m-2 flex items-center justify-center rounded-full bg-opacity-50 text-white">
                    <img src={stars} alt="Star" className="w-4 h-4 mr-1" />
                    <span className="mr-1">{item.rating}</span>
                  </div>
                  <div className="px-4">
                    <div className="mt-4 custom-progress-bar">
                      <div className="progress"></div>
                    </div>
                  </div>
                  <div className="p-4 relative z-10">
                    <h3 className="text-2xl text-left text-lightWhite">
                      {item.title}
                    </h3>
                    <div className="flex items-center mt-4">
                      <div className="flex-1 flex items-center">
                        <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                          <img
                            src={item.image}
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-[#A1A1AACC]">
                          {item.userName}
                        </p>
                        <div className="flex-1 flex justify-end">
                          <span className="join-Telegram flex text-dimWhite text-[13px] font-[400] leading-[20px] text-center">
                            Join{" "}
                            <img
                              src={telegram}
                              alt="Telegram"
                              className="w-4 h-4 ml-1"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-white mt-2 pt-1 flex justify-center">
                      <div className="border-r border-white px-[80px] text-center">
                        <p className="mb-1 text-dimWhite">{item.experience}</p>
                        <p className="text-lightWhite">{item.totalExp}</p>
                      </div>
                      <div className="px-[80px] text-center">
                        <p className="mb-1 text-[#A1A1AACC]">
                          {item.followers}
                        </p>
                        <p>{item.totalFollowers}</p>
                      </div>
                    </div>
                    <div className="mt-2 pt-3 flex justify-between">
                      <div className="pl-1">
                        <p className="mb-1 text-[#A1A1AACC]">
                          <span className="text-white">{item.callTime}</span>{" "}
                        </p>
                      </div>
                      <div className="px-4">
                        <p className="mb-1 text-[#A1A1AACC] text-right">
                          <span className="text-white">{item.callSession}</span>
                        </p>
                      </div>
                    </div>
                    {/* <div className="pl-1">
                      <p className="mb-1 text-[#A1A1AACC]">
                        Completed Session: <span className="text-white">{item.completedSession}</span>{" "}
                      </p>
                    </div> */}
                    <div className="mt-4 pt-3 flex justify-center items-center">
                      <button className="bg-transparent border rounded-3xl border-[#ffffff6b] text-base text-white py-2 px-8 flex items-center">
                        {item.btn}
                        {/* <AiOutlineRight className="ml-1" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[10px] px-[7rem]">
          {courseExpertise_data.map((_, index) => (
            <button
              key={index}
              className={`w-[8px] h-[8px] rounded-[4px] ${
                index === currentIndex
                  ? "bg_three-dots_active"
                  : "bg_three-dots"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContinueCardsCarousel;
