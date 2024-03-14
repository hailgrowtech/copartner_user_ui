// src/assets/testimonials/Testimonials.js
import React, { useState } from 'react';
import './Testimonials.css';
import LeftIcon from '../assets/Testimonials/pagination-default.svg (1).svg';
import RightIcon from '../assets/Testimonials/pagination-default.svg.svg';
import Profile1 from '../assets/Testimonials/Ellipse 1483.png';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
      author: "Atthakrit Chimplapibul",
      image: Profile1,
      designation: "CEO, Company A",
    },
    {
      id: 2,
      text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
      author: "Jane Smith",
      image: Profile1,
      designation: "CTO, Company B",
    },
    {
      id: 3,
      text: "Becoming an affiliate partner was a great decision. The referral program is rewarding and easy to use.",
      author: "Bob Johnson",
      image: Profile1,
      designation: "COO, Company C",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
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

  return (
    <div className="testimonial-section">
      <div className="testimonial-center">
        <div className="testimonial-slider">
          <motion.img
            src={LeftIcon}
            className="testimonial-arrow"
            onClick={prevTestimonial}
            alt=""
            whileTap={{ scale: 0.9 }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="testimonial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>{testimonialsData[currentTestimonial].text}</p>
              <div className="author-info">
                <motion.img
                  src={testimonialsData[currentTestimonial].image}
                  alt={`Author ${testimonialsData[currentTestimonial].author}`}
                  className="author-image"
                  whileTap={{ scale: 0.9 }}
                />
                <div className="author-details">
                  <h5 className="author-name">{testimonialsData[currentTestimonial].author}</h5>
                  <h6 className="author-designation">{testimonialsData[currentTestimonial].designation}</h6>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.img
            src={RightIcon}
            className="testimonial-arrow"
            onClick={nextTestimonial}
            alt=""
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <Dots />
      </div>
    </div>
  );
};

export default Testimonials;
