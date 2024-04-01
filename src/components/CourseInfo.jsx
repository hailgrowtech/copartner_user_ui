import React from 'react';
import CourseImg from '../assets/Div [relative] (5).png'
import calender from '../assets/calender.png';
import chart from '../assets/chart.png';
import price from '../assets/Rupee.png';
import video from '../assets/video.png';
import rate from '../assets/rateVideo.png';
import time from '../assets/time.png';
import devices from '../assets/devices.png';

const CourseInfo = () => {
  return (
    <div className="text-white border border-solid border-white border-opacity-10 rounded-lg p-8">
      {/* Heading */}
      <div className="heading-course">
        <h3 className="font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6">Course</h3>
        <div className='flex'>
          <div className="w-full pr-4 bg-[#18181B] rounded-lg">
            <img
              src={CourseImg}
              alt="Devices"
              className="w-full"
              style={{
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)'
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-4">
            <h3 className="font-inter font-semibold md:text-[50px] text-[20px] md:leading-[50px] leading-[31px] md:mb-6">
              Lorem ipsum dolor sit amet consectetur. 
            </h3>
            <div className='pr-20 pb-5'>
              <div className="custom-progress-bar">
                <div className="progress"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <img src={chart} alt="Chart" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Level:</h4>
                <p className="text-s text-gray-300 ml-1">Medium</p>
              </div>
              <div className="flex items-center">
                <img src={time} alt="Time" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Duration:</h4>
                <p className="text-s text-gray-300 ml-1">7 hr 20m</p>
              </div>
              <div className="flex items-center">
                <img src={video} alt="Video" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Sessions:</h4>
                <p className="text-s text-gray-300 ml-1">5</p>
              </div>
              <div className="flex items-center">
                <img src={video} alt="Video" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Completed Sessions:</h4>
                <p className="text-s text-gray-300 ml-1">3</p>
              </div>
              <div className="flex items-center">
                <img src={price} alt="Price" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Amount:</h4>
                <p className="text-s text-gray-300 ml-1">₹ 1,999/-</p>
              </div>
              <div className="flex items-center">
                <img src={calender} alt="Calendar" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Buy date:</h4>
                <p className="text-s text-gray-300 ml-1">28/01/2024</p>
              </div>
              <div className="flex items-center">
                <img src={rate} alt="Rate" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Access:</h4>
                <p className="text-s text-gray-300 ml-1">Lifetime Access</p>
              </div>
              <div className="col-span-2 flex items-center">
                <img src={devices} alt="Rate" className="w-4 h-4 mr-2" />
                <h4 className="text-base font-semibold">Access From Any Computer, Tablet, or Mobile</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sessions Details */}
      <div className="sessionsDetails mt-8">
        <h4 className="text-4xl font-semibold subheading-color">Sessions Details</h4>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-transparent p-5 rounded-lg flex items-center justify-between hover:bg-[#18181B] transition duration-300 ease-in-out">
              <div className="flex">
                <div className="border border-solid border-white border-opacity-10 rounded-2xl h-10 w-10 p-6 flex items-center justify-center mr-3">
                  <p className="text-3xl font-bold">{index + 1}</p>
                </div>
                <div className='p-0'>
                  <h5 className="text-xl font-semibold">Session Title</h5>
                  <p className="text-sm text-gray-300 mt-1">Have full control of your business finances on </p>
                  <p className="text-sm text-gray-300 mt-1">Duration: 20min</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Course */}
      <div className="boutCourse mt-8">
        <h4 className="text-4xl font-semibold subheading-color">About Course</h4>
        <p className="text-base text-gray-300 mt-4">
          Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam sagittis nisl faucibus. Sed adipiscing condimentum volutpat cursus in risus sed sit. Ipsum aliquam urna porttitor eu. Volutpat ac sit at semper tortor vulputate.
          Purus pulvinar vestibulum cras odio. Congue amet sagittis dui pellentesque consectetur pellentesque et fermentum. Arcu elementum tempor nulla quis aenean fusce ut vulputate. A quam vitae magna pellentesque. Ut volutpat adipiscing purus faucibus duis orci. Accumsan venenatis eu vitae interdum dolor. Nunc at nibh habitant condimentum vitae. Semper luctus vulputate lacinia sit diam tellus id vitae. Morbi aliquet bibendum scelerisque vestibulum aliquet venenatis eu et. Proin bibendum eget lectus consequat id vitae. Eu hendrerit lobortis turpis quam ornare egestas tincidunt donec nulla. Justo nisi ac diam mauris cursus turpis lacus.
          Vulputate cras sem nec id eget. Cras lectus vestibulum dictum enim. Mauris ultrices etiam ac facilisis malesuada. Odio accumsan fringilla malesuada faucibus fusce pellentesque. Non nunc cursus nisl odio. Pellentesque laoreet molestie proin tincidunt cursus. Integer non odio turpis ac sem aliquam in ante congue. Erat pharetra sed semper duis duis penatibus. Ut congue interdum cras convallis eu nibh quis. Arcu at accumsan neque ultricies tellus massa leo nulla sed.
        </p>
      </div>
    </div>
  );
};

export default CourseInfo;
