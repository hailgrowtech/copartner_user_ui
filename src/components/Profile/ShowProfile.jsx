import React, { useState } from 'react';
import userImg from '../../assets/userImg.png';
import { LogOut, edit, mail, call } from '../../assets';
import EditProfilePopup from './EditProfilePopup';

const ShowProfile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Arun',
    lastName: 'Kumar',
    email: 'john.doe@gmail.com',
    phone: '123-456-7890',
    profileImage: null,
  });

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Inside updateProfile function
  const updateProfile = (data) => {
    setProfileData({
      ...profileData,
      ...data,
    });
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("token")
    window.location.reload();
  }

  return (
    <div className="container bg-[#18181B80] md:p-8 p-5  md:flex flex md:justify-between justify-between md:pb-0 pb:5 relative rounded-lg border-2 border-[#ffffff2b] mb-10">
      <EditProfilePopup isOpen={isPopupOpen} onClose={togglePopup} onUpdateProfile={updateProfile} />
      <div className="left-col text-white">
        <div className="mb-2">
          <h1 className="text-gradient font-poppins font-semibold md:text-[62px] text-[25px] md:leading-[84px] ">
            {profileData.firstName} {profileData.lastName}
          </h1>
        </div>
        <div className="md:flex flex-row gap-10">
          <div className="flex items-center mb-2">
            <img src={mail} alt="Message Icon" className="w-4 h-4 mr-2" />
            <h1 className="text-white text-base">{profileData.email}</h1>
          </div>
          <div className="flex items-center">
            <img src={call} alt="Call Icon" className="w-3 h-3 mr-2" />
            <h1 className="text-white text-base">{profileData.phone}</h1>
          </div>
        </div>
      </div>
      <button
        className="z-10 md:flex flex items-center absolute top-4 right-4 bg-[#ffffff96] text-white py-2 md:px-8 px-5 rounded-full transition duration-300 hover:bg-[#ffffff96] hover:text-gray-900"
        onClick={togglePopup}
      >
        <img src={edit} alt="Edit Icon" className="w-4 h-4 mr-2" /> Edit
      </button>
      <button onClick={handleLogOut} className="md:flex hidden items-center absolute bottom-4 border-2 border-[#ffffff96] right-4 bg-[#fff] text-black py-2 px-8 rounded-lg transition duration-300 hover:bg-[#ffffff96] hover:text-gray-900">
        Logout <img src={LogOut} alt="" className="w-4 h-4 ml-2" />
      </button>
      <div className="right-col md:pr-40 pr-3">
        <img
          src={profileData.profileImage || userImg} // Display saved image or default user image
          alt="User"
          className="w-full h-auto"
          style={{
            maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)',
          }}
        />
      </div>
    </div>
  );
};

export default ShowProfile;
