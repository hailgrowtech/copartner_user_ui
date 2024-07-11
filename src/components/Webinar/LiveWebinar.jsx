import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { liveCourseData } from "../../constants";

const LiveWebinar = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {liveCourseData.map((course, index) => (
          <div key={index} className="p-2">
            <div className="box-border flex flex-col justify-start items-center w-full p-4 bg-[#18181B] border-[#ffffff21] border-[1px] rounded-xl relative">

              <div className="md:p-4 relative z-10 w-full">
                <h3 className="text-[28px] font-semibold text-lightWhite text-left">
                  {course.title}
                </h3>

                <div className="flex items-center mt-4">
                  <div className="flex-1 flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-2">
                      <img
                        src={course.image}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="text-[18px] font-medium text-dimWhite">
                      {course.instructor}
                    </p>
                  </div>

                  
                </div>
                <div className="border-white mt-2 pt-1 flex justify-center">
                    <div className="border-r border-white px-4 lg:px-12 text-center">
                      <p className="text-lightWhite">Experience</p>
                      <p className="mb-1 text-lightWhite">{course.experience}+</p>
                    </div>
                    <div className="px-4 lg:px-12 text-center">
                      <p className="text-lightWhite">Followers</p>
                      <p className="mb-1 text-lightWhite">{course.followers}k</p>
                    </div>
                  </div>

                <div className="mt-2 pt-3 flex flex-col justify-center text-left">
                  <div className="flex flex-row">
                    <p className="mb-1 text-dimWhite pr-1">Date & Time:</p>
                    <p>{course.date}🔴</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="mb-1 text-dimWhite pr-1">Duration:</p>
                    <p>{course.duration} hrs</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <button className="bg-[#006ADC] transition-all duration-300 w-full rounded-xl hover:bg-gray-200 hover:text-[#000] text-base text-white py-3 px-8">
                      Pay {course.prize}
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settings}>
        {liveCourseData.map((course, index) => (
          <div key={index} className="p-2">
            <div className="box-border flex flex-col justify-start items-center w-full p-4 bg-[#18181B] border-[#ffffff21] border-[1px] rounded-xl relative">

              <div className="md:p-4 relative z-10 w-full">
                <h3 className="text-[28px] font-semibold text-lightWhite text-left">
                  {course.title}
                </h3>

                <div className="flex items-center mt-4">
                  <div className="flex-1 flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-2">
                      <img
                        src={course.image}
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="text-[18px] font-medium text-dimWhite">
                      {course.instructor}
                    </p>
                  </div>

                  
                </div>
                <div className="border-white mt-2 pt-1 flex justify-center">
                    <div className="border-r border-white px-4 lg:px-12 text-center">
                      <p className="text-lightWhite">Experience</p>
                      <p className="mb-1 text-lightWhite">{course.experience}+</p>
                    </div>
                    <div className="px-4 lg:px-12 text-center">
                      <p className="text-lightWhite">Followers</p>
                      <p className="mb-1 text-lightWhite">{course.followers}k</p>
                    </div>
                  </div>

                <div className="mt-2 pt-3 flex flex-col justify-center text-left">
                  <div className="flex flex-row">
                    <p className="mb-1 text-dimWhite pr-1">Date & Time:</p>
                    <p>{course.date}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="mb-1 text-dimWhite pr-1">Duration:</p>
                    <p>{course.duration} hrs</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                <button className="bg-[#006ADC] transition-all duration-300 w-full rounded-xl hover:bg-gray-200 hover:text-[#000] text-base text-white py-3 px-8">
                Pay {course.prize}
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LiveWebinar;