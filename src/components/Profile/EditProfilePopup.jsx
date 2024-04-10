import React, { useState } from 'react';
import { close } from '../../assets';

const EditProfilePopup = ({ isOpen, onClose, onUpdateProfile }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSave = () => {
    // Call the onUpdateProfile function with the updated values and profileImage
    onUpdateProfile({ firstName, lastName, email, phone, profileImage });
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-[#18181B] border-2 border-[#ffffff3f] rounded-lg p-8 md:w-[50rem] w-[24rem] h-auto">
            <div className="edit-section flex justify-between items-center pb-10">
              <h2 className="subheading-color font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px]">Edit Profile</h2>
              <button onClick={onClose}>
                <img src={close} alt="Close Icon" className="w-12 h-12" />
              </button>
            </div>
            {/* Profile Image Upload */}
            <div className="mb-4">
              <label htmlFor="profileImage" className="block mb-1 text-white">Upload Profile Picture</label>
              <input
                type="file"
                id="profileImage"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <div className='uploadPhoto relative bg-[transparent] border-2 border-dashed border-[#ffffff6c] p-[80px] rounded-lg'>
                {imagePreview ? (
                  <>
                    <img src={imagePreview} alt="Profile Preview" className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <button className="absolute bottom-10 left-0 right-0 bg-[transparent] text-white mx-auto text-xl" onClick={() => document.getElementById('profileImage').click()}>
                      Change
                    </button>
                  </>
                ) : (
                  <button className="bg-[transparent text-white mx-auto text-3xl pl-9" onClick={() => document.getElementById('profileImage').click()}>
                    Select
                  </button>
                )}
              </div>
            </div>
            {/* First Name Input */}
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <div class="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                  />
                  <label for="firstName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">First Name</label>
                </div>
              </div>
              <div className="w-1/2 ml-2">
                <div class="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                  />
                  <label for="lastName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Last Name</label>
                </div>
              </div>
            </div>
            {/* Email and Phone Inputs */}
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <div class="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                  />
                  <label for="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                </div>
              </div>
              <div className="w-1/2 ml-2">
                <div class="relative">
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                  />
                  <label for="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Phone Number</label>
                </div>
              </div>
            </div>
            {/* Change Button */}
            <div className="flex justify-center">
              <button className="bg-white text-black py-2 px-4 rounded-md" onClick={handleSave}>
                Change
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfilePopup;
