import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import LeftIcon from '../../assets/Testimonials/pagination-default.svg (1).svg';
import RightIcon from '../../assets/Testimonials/pagination-default.svg.svg';
import { testimonialsData } from '../../constants';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState('next'); // New state to track the direction of the slide

  useEffect(() => {
    // Whenever currentTestimonial changes, add the 'enter' class to start the animation
    const testimonialElement = document.querySelector('.testimonial');
    if (testimonialElement) {
      testimonialElement.classList.remove('testimonial-enter-active');
      setTimeout(() => {
        testimonialElement.classList.add('testimonial-enter-active');
      }, 0); // Timeout ensures class is added after re-render
    }
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setDirection('next');
    setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const Dots = () => (
    <div className="pagination-dots">
      {testimonialsData.map((_, index) => (
        <span
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={index === currentTestimonial ? 'dot active-btn' : 'dot'}
        />
      ))}
    </div>
  );

  // Calculate the animation class based on the direction
  const getAnimationClass = () => {
    return direction === 'next' ? 'testimonial-enter' : 'testimonial-exit';
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-center">
        <div className="testimonial-slider md:mt-0 mt-4">
          <img
            src={LeftIcon}
            className="testimonial-arrow"
            onClick={prevTestimonial}
            alt="Previous Testimonial"
          />
          <div
            key={currentTestimonial}
            className={`testimonial ${getAnimationClass()}`}
          >
            <p>{testimonialsData[currentTestimonial].text}</p>
            <div className="author-info">
              <img
                src={testimonialsData[currentTestimonial].image}
                alt={`Author ${testimonialsData[currentTestimonial].author}`}
                className="author-image"
              />
              <div className="author-details">
                <h5 className="author-name">{testimonialsData[currentTestimonial].author}</h5>
                <h6 className="author-designation">{testimonialsData[currentTestimonial].designation}</h6>
              </div>
            </div>
          </div>
          <img
            src={RightIcon}
            className="testimonial-arrow"
            onClick={nextTestimonial}
            alt="Next Testimonial"
          />
        </div>
        <Dots />
      </div>
    </div>
  );
};

export default Testimonials;
