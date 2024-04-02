import React from 'react';
import styles from "../style";
import {ExpertCard, CourseInfo, RecommendCourse} from '../components/index.js'
import Card from "./Profile_Component";
import CourseCardsCarousel from './CourseCardsCarousel.jsx';
import CourseCardsCarouselDesktop from './CourseCardsCarouselDesktop.jsx';

const SubscriptionCourseDetail = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-white">

          <section>
            <div className='my-10'><ExpertCard /></div>
          </section>
          
          <section>
            <div className='my-10'><CourseInfo /></div>
          </section>

          <section>
          <div className="mb-4 md:mb-8">
          <h2 className="font-semibold text-4xl text-center md:text-left md:text-5xl pb-4 subheading-color">
          Our Expertise
          </h2>
          <p className="font-normal text-[#A1A1AACC] md:px-[2px] px-[10px] text-center md:text-left md:text-[18px] text-[14px] md:leading-[28px] leading-[17px]">
          Empower your teams to build better processes, for a better workplace.
          </p>
        </div>
        <div className="flex justify-center">
          <Card />
        </div>
          </section>
          
          <section>
  <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-1 md:px-[20px]">
    <div className="subheading-color md:text-[35px] text-[35px]">
      Course By Expertise
    </div>
    <div className="flex-col-6 font-normal md:text-left text-center text-[#A1A1AACC] md:text-[20px] text-[11px] md:leading-[28px] leading-[17px] md:ml-4 md:pl-4 ">
      <p className='p-4'>
      Dive into the expertise of our{" "}
      <span className="text-white">Uncover trading secrets with courses led by SEBI Registered research analysts.</span>
      </p>
    </div>
  </div>
  <div className='md:block hidden'>
    <RecommendCourse />
  </div>
  <div className='md:hidden'>
    <CourseCardsCarousel/>
    
  </div>
  <CourseCardsCarouselDesktop />
</section>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCourseDetail;
