import React, { useEffect, useState } from "react";
import { close } from "../../assets";
import axios from "axios";

const LinkPopup = ({ onClose, chatID, durationMonths }) => {
  console.log(durationMonths);
  const [telegramLink, setTelegramLink] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    fetchInviteLink();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [chatID]);

  const fetchInviteLink = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/api/createInviteLink?chatId=${chatID}&durationMonths=${durationMonths}`);
      if (response.ok) {
        setTelegramLink(response.data.inviteLink.inviteLink);
      } else {
        throw new Error(response.error || "Failed to fetch invite link");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error fetching invite link:", error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
          <div className="text-sm mb-4 text-white">
            Click the button below to join the Telegram channel:
          </div>
          {telegramLink ? (
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-center items-center flex mb-4 md:mb-2 md:text-lg text-sm rounded-lg py-4 text-white bg-[#0081F1] hover:bg-[#006bbd] transition-colors duration-300"
            >
              Join Now
            </a>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkPopup;
