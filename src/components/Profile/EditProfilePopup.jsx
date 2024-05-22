import React, { useState, useEffect } from "react";
import { close } from "../../assets";
import axios from "axios";

const EditProfilePopup = ({ isOpen, onClose, onUpdateProfile, userData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [panCard, setPanCard] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setEmail(userData.email || "");
      setPhone(userData.phone || "");
      setImagePreview(userData.profileImage || null);
      setPanCard(userData.panCard || "");
      setAddress(userData.address || "");
      setState(userData.state || "");
    }
  }, [userData]);

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("panCard", panCard);
      formData.append("address", address);
      formData.append("state", state);
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await axios.put(
        `https://copartners.in:5131/api/User/${userData.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onUpdateProfile(response.data);
      onClose();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

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
          <div className="bg-[#18181B] border-2 border-[#ffffff3f] rounded-lg px-8 py-2 md:w-[50rem] w-[24rem] h-auto">
            <div className="edit-section flex justify-between items-center">
              <h2 className="subheading-color font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px]">
                Edit Profile
              </h2>
              <button onClick={onClose}>
                <img src={close} alt="Close Icon" className="w-12 h-12" />
              </button>
            </div>
            {/* Profile Image Upload */}
            <div className="mb-4">
              <label htmlFor="profileImage" className="block mb-1 text-white">
                Upload Profile Picture
              </label>
              <input
                type="file"
                id="profileImage"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              <div className="uploadPhoto relative bg-[transparent] border-2 border-dashed border-[#ffffff6c] p-[60px] rounded-lg">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <button
                      className="absolute bottom-10 left-0 right-0 bg-[transparent] text-white mx-auto text-xl"
                      onClick={() =>
                        document.getElementById("profileImage").click()
                      }
                    >
                      Change
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-[transparent] text-white mx-auto text-3xl pl-9"
                    onClick={() =>
                      document.getElementById("profileImage").click()
                    }
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
            {/* Name Input */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Name
                </label>
              </div>
            </div>
            {/* Email and Phone Inputs */}
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="w-1/2 ml-2">
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Phone Number
                  </label>
                </div>
              </div>
            </div>
            {/* PAN Card Input */}
            <div className="flex mb-4">
              <div className="relative w-1/2 mr-2">
                <input
                  type="text"
                  id="panCard"
                  value={panCard}
                  onChange={(e) => setPanCard(e.target.value)}
                  placeholder=" "
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                />
                <label
                  htmlFor="panCard"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  PAN Card
                </label>
              </div>
              <div className="relative w-1/2 ml-2">
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder=" "
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                />
                <label
                  htmlFor="state"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  State
                </label>
              </div>
            </div>
            {/* State Input */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder=" "
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
                />
                <label
                  htmlFor="address"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-white-600 peer-focus:dark:text-white peer-focus:border-2 peer-focus:border-[#ffffff47] peer-focus:rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address
                </label>
              </div>
            </div>
            {/* Change Button */}
            <div className="flex justify-center">
              <button
                className="bg-white text-black py-2 px-4 rounded-md"
                onClick={handleSave}
              >
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
