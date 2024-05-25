import React, { useState, useEffect } from "react";
import { LogOut, edit, mail, call, login } from "../../assets";
import EditProfilePopup from "./EditProfilePopup";

const ShowProfile = ({ userData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    profileImage: null,
    pan: "",
    address: "",
    state: "",
  });

  useEffect(() => {
    if (userData) {
      setProfileData({
        name: userData.name,
        email: userData.email,
        phone: userData.mobileNumber,
        profileImage: userData.userImagePath,
        pan: userData.pan,
        address: userData.address,
        state: userData.state,
      });
    }
  }, [userData]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const updateProfile = () => {
    window.location.reload();
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <div className="container items-center bg-[#18181B80] md:px-8 md:pt-0 p-5 md:flex flex md:justify-between justify-between md:pb-0 pb-5 relative rounded-lg border-2 border-[#ffffff2b] mb-10">
      <EditProfilePopup
        isOpen={isPopupOpen}
        onClose={togglePopup}
        onUpdateProfile={updateProfile}
        userData={profileData} // Pass profileData to EditProfilePopup
      />
      <div className="left-col text-white">
        <div className="mb-2">
          <h1 className="text-gradient font-poppins font-semibold md:text-[62px] text-[25px] md:leading-[84px]">
            {profileData.name || "---"}
          </h1>
        </div>
        <div className="md:flex flex-row gap-10">
          <div className="flex items-center mb-2">
            <img src={mail} alt="Message Icon" className="w-4 h-4 mr-2" />
            <h1 className="text-white text-base">
              {profileData.email || "---"}
            </h1>
          </div>
          <div className="flex items-center">
            <img src={call} alt="Call Icon" className="w-3 h-3 mr-2" />
            <h1 className="text-white text-base">
              {profileData.phone || "---"}
            </h1>
          </div>
        </div>
        <div className="md:flex flex-row gap-10 mt-4">
          <div className="flex items-center mb-2">
            <h1 className="text-white text-base">
              PAN Card: {profileData.pan || "---"}
            </h1>
          </div>
          <div className="flex items-center mb-2">
            <h1 className="text-white text-base">
              Address: {profileData.address || "---"}
            </h1>
          </div>
          <div className="flex items-center mb-2">
            <h1 className="text-white text-base">
              State: {profileData.state || "---"}
            </h1>
          </div>
        </div>
      </div>
      <button
        className="z-10 md:flex flex items-center absolute top-4 right-4 bg-[#ffffff96] text-white py-2 md:px-8 px-5 rounded-full transition duration-300 hover:bg-[#ffffff96] hover:text-gray-900"
        onClick={togglePopup}
      >
        <img src={edit} alt="Edit Icon" className="w-4 h-4 mr-2" /> Edit
      </button>
      <button
        onClick={handleLogOut}
        className="md:flex hidden items-center absolute bottom-4 border-2 border-[#ffffff96] right-4 bg-[#fff] text-black py-2 px-8 rounded-lg transition duration-300 hover:bg-[#ffffff96] hover:text-gray-900"
      >
        Logout <img src={LogOut} alt="Logout Icon" className="w-4 h-4 ml-2" />
      </button>
      <div className="right-col md:pr-40 pr-3">
        <img
          src={userData?.userImagePath || login}
          alt="User"
          className={`${!userData?.userImagePath ? "w-20" : "w-36 h-36"} rounded-full`}
          style={{
            WebkitMaskImage:
              "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
            maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default ShowProfile;
