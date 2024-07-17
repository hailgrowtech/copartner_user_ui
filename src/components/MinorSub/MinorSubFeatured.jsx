import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ani, business, HT, logo, moneyControl } from "../../assets";

const MinorSubFeatured = () => {
  return (
    <div className="secondSection w-full flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
      <div className="flex flex-col justify-center items-center md:mr-8">
        <span className="text-lg">Brought to you by</span>
        <span className="md:mt-4 mt-2">
          <img src={logo} alt="Logo" className="w-40 md:w-50 max-w-[200px]" />
        </span>
      </div>
      <div className="flex flex-col justify-center items-center md:mt-0 mt-8 w-full">
        <span className="text-lg mb-4">Featured In</span>
        <div className="mt-2 w-full">
          <Carousel
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
          >
            <div className="flex justify-center items-center">
              <img
                src={moneyControl}
                alt="Money Control"
                className="h-16 md:h-16 mx-4"
              />
              <img
                src={business}
                alt="Business"
                className="h-16 md:h-16 mx-4"
              />
            </div>
            <div className="flex justify-center items-center">
              <img src={ani} alt="ANI" className="h-16 md:h-16 mx-4" />
              <img src={HT} alt="HT" className="h-20 md:h-16 mx-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MinorSubFeatured;
