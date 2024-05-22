import React, { useEffect } from "react";
import { close } from "../../assets";

const LinkPopup = ({ onClose, link }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#18181b] border-[1px] border-[#ffffff24] rounded shadow-md w-[90%] md:w-[400px] relative">
        <button className="absolute top-3 right-1" onClick={handleClose}>
          <img src={close} alt="close" className="h-8 w-8" />
        </button>
        <div className="border-b-2 py-3 px-6">
          <h2 className="md:text-2xl text-xl font-bold subheading-color text-left">
            Join Your Telegram Channel
          </h2>
        </div>
        <div className="flex flex-col px-6 py-3">
          <div className="text-sm mb-2 text-white">Click the link below to proceed:</div>
          <button className="justify-center items-center flex md:mb-2 md:text-lg text-sm rounded-lg py-4 text-white bg-[#0081F1]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkPopup;
