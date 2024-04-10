import React from "react";
import styles from "../../style";
import { call, message, location, contact } from "../../assets";

const ContactUs = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-4 px-2 z-10 md:bottom-[10rem] text-center`}
      >
        <div className="flex md:flex-row flex-col gap-4 border-2 text-white border-[#ffffff39] rounded-xl relative">
          {/* Left Column */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 subheading-color md:hidden text-left px-3 pt-3">Contact Us</h2>
          <p className="text-base md:text-lg mb-4 text-[#ffffff5a] md:hidden">
            We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
          </p>
          <div className="w-full md:w-1/3 md:border md:border-[#ffffff24 p-4 rounded-xl relative">
            {/* Contact Image */}
            <img src={contact} alt="Contact" className="absolute bottom-10 right-0 z-10 w-30 h-60 md:w-30 md:h-60" />
            {/* Call */}
            <div className="flex items-center mb-4">
              <img src={call} alt="Call" className="w-3 h-3 mr-2" />
              <p>+91-9876543211</p>
            </div>
            {/* Mail */}
            <div className="flex items-center mb-4">
              <img src={message} alt="Mail" className="w-3 h-3 mr-2" />
              <p>Copartner@gmail.in</p>
            </div>
            {/* Location */}
            <div className="flex items-center">
              <img src={location} alt="Location" className="w-3 h-3 mr-2" />
              <p>JMD, Sector 48</p>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col w-full md:w-2/3 px-2 my-4 text-left">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4 subheading-color md:block hidden">Contact Us</h2>
            {/* Description */}
            <p className="text-base md:text-lg mb-4 text-[#ffffff5a] md:block hidden">
              We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
            </p>
            {/* Form */}
            <form className="flex flex-col gap-2">
              {/* Name and Email Fields */}
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col w-full md:w-1/2">
                  <input type="text" id="name" placeholder="Name" className="border border-white border-opacity-50 bg-transparent p-2 rounded-md" />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <input type="email" id="email" placeholder="Email" className="border border-white border-opacity-50 bg-transparent p-2 rounded-md" />
                </div>
              </div>
              {/* Mobile Number Field */}
              <div className="flex flex-col">
                <input type="tel" id="mobile" placeholder="Mobile Number" className="border border-white border-opacity-50 bg-transparent p-2 rounded-md" />
              </div>
              {/* Message Field */}
              <div className="flex flex-col">
                <textarea id="message" rows="4" placeholder="Message" className="border border-white border-opacity-50 bg-transparent p-2 rounded-md"></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="bg-[#fff] text-black py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
