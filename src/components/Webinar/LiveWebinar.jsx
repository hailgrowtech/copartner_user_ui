import React from "react";
import Slider from "react-slick";
import { liveCourseData } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LiveWebinar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4">
      <Slider {...settings}>
        {liveCourseData.map((course, index) => (
          <div key={index} className="p-4">
            <div className="box-border flex flex-col justify-start items-center w-full p-4 bg-[#18181B] border-[#ffffff21] border-[1px] rounded-xl relative">
              <img
                src={course.imageUrl}
                alt="Course_Image"
                className="w-full h-60 object-cover rounded-md mb-4"
                style={{
                  maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
                }}
              />

              <div className="p-4 relative z-10 w-full">
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

                  <div className="border-white mt-2 pt-1 flex justify-center">
                    <div className="border-r border-white px-12 text-center">
                      <p className="text-lightWhite">Experience</p>
                      <p className="mb-1 text-lightWhite">{course.experience}+</p>
                    </div>
                    <div className="px-12 text-center">
                      <p className="text-lightWhite">Followers</p>
                      <p className="mb-1 text-lightWhite">{course.followers}k</p>
                    </div>
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

                <div className="mt-4 pt-3 flex justify-between items-center">
                  <div>
                    <p className="text-dimWhite">
                      <span className="text-white text-[50px] font-bold">₹1999</span>{" "}
                    </p>
                  </div>
                  <div>
                    <button className="bg-white rounded-md hover:bg-gray-200 text-base text-black py-1 px-8">
                      Register
                    </button>
                  </div>
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
