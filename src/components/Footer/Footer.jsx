// src/assets/footer/Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Testimonials from "../Testimonials/Testimonials";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div>
      <section className="px-4 pb-8 our-users-say w-full">
        <div className="text-center">
          <div className="font-inter font-bold md:text-[50px] text-[30px] subheading-gradient md:leading-[50px] leading-[51px] text-white md:mb-6">
            What Our Users Say
          </div>
          <div className="font-normal text-[#A1A1AACC] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
            Empower your teams to build better processes, for a better <br />{" "}
            workplace.
          </div>
        </div>
        <Testimonials />
      </section>
      <div className="footer">
        <div className="footer-container text-white">
          <div className="footer-left my-auto">
            <h5 className="font-bold"><img className=" md:w-56 w-40" src={logo} alt="" /></h5>
            <div className="text-[#A1A1AACC]">
              Our partnerships have delivered great value to our projects and
              we’re happy to share some of their feedback below
              <div className="social-icons">
                <a href="#home" target="_blank">
                  <FaFacebook />
                </a>
                <a href="#home" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="#home" target="_blank">
                  <FaTwitter />
                </a>
                <a href="#home" target="_blank">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-empty-column"></div>

          <div className="footer-right">
            <div className="footer-column">
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#home">About Us</a>
                </li>
                <li>
                  <a href="#home">FAQ’s</a>
                </li>
                <li>
                  <a href="#home">Privacy Policy</a>
                </li>
                <li>
                  <a href="#home">Terms of Service</a>
                </li>
                <li>
                  <a href="#home">Disclaimer</a>
                </li>
                <li>
                  <a href="#home">Submit Grievance</a>
                </li>
                <li>
                  <a href="#home">Features</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="#home">Subscription</a>
                </li>
                <li>
                  <a href="#home">Courses</a>
                </li>
                <li>
                  <a href="#home">Webinar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
