import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { courses } from '../constants';

const CourseCardsCarouselDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = courses.slice(0, 5); // Limiting to 5 items

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container-desktop">
      <div className="carousel-desktop">
        <div
          className="carousel-inner-desktop"
          style={{
            transform: `translateX(-${currentIndex * (100 / carouselItems.length)}%)`
          }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-slide-desktop">
              <CourseCard courseData={item} />
            </div>
          ))}
        </div>
        <button className="carousel-btn-desktop prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="carousel-btn-desktop next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CourseCardsCarouselDesktop;
