import React, { useEffect, useState } from "react";
import { close, exclamation } from "../../assets";
import { useUserSession } from "../../constants/userContext";
import axios from "axios";
import { toast } from "react-toastify";

const KYCPopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState(null);
  const { userData } = useUserSession();


  useEffect(() => {
    // Disable scrolling on the body element when the popup is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body element when the popup is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setEmail(userData.email || "");
      setPan(userData.pan || "");
      setAddress(userData.address || "");
      setState(userData.state || "");
    }
  }, [userData]);

  const handleSave = async () => {
    if (!name || !email || !pan || !address || !state) {
      setError("All fields are required");
      return;
    }
  
    const patchData = [
      { path: "name", op: "replace", value: name },
      { path: "email", op: "replace", value: email },
      { path: "pan", op: "replace", value: pan },
      { path: "address", op: "replace", value: address },
      { path: "state", op: "replace", value: state }
    ];
  
    try {
      const response = await axios.patch(`https://copartners.in:5131/api/User?Id=${userData.id}`, patchData, {
        headers: {
          'Content-Type': 'application/json-patch+json',
          // Authorization: 'Bearer ' + userData.token, // Uncomment this line if you use token-based auth
        }
      });
  
      if (response.status === 200) {
        toast.success("Details updated successfully!");
        setError(null);
        onClose(); // Close the popup on successful update
      } else {
        toast.error("Failed to update details!");
        setError("Failed to update details.");
      }
    } catch (error) {
      console.error("Error updating details:", error);
      setError("Error updating details.");
      toast.error("Error updating details.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#18181b] border-[1px] border-[#ffffff24] rounded shadow-md w-[90%] md:w-[400px] relative">
        <button className="absolute top-3 right-1" onClick={onClose}>
          <img src={close} alt="Close" className="h-8 w-8" />
        </button>
        <div className="border-b-2 py-3 px-6">
          <h2 className="md:text-2xl text-xl font-bold subheading-color text-left">
            KYC Verification
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 px-6 py-3">
          <div className="mb-4 md:col-span-1">
            <label htmlFor="name" className="block mb-1 text-sm text-white">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label htmlFor="email" className="block mb-1 text-sm text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label htmlFor="pan" className="block mb-1 text-sm text-white">PAN Card</label>
            <input
              type="text"
              id="pan"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="block px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
            />
          </div>
          <div className="mb-4 md:col-span-1">
            <label htmlFor="state" className="block mb-1 text-sm text-white">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="block px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="address" className="block mb-1 text-sm text-white">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block px-2.5 py-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ffffff4b] focus:outline-none focus:ring-0 focus:border-white peer"
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-2 col-span-2">{error}</div>}
          <button
            className="bg-white col-span-2 text-black py-3 px-2 rounded-sm hover:bg-black hover:text-white transition duration-300 md:text-[1rem] text-[12px]"
            onClick={handleSave}
          >
            Submit
          </button>
          <div className="flex col-span-2 items-start gap-2 text-white py-2 md:text-[12px] text-[10px]">
            <img src={exclamation} className="w-5 h-5" alt="Exclamation" />
            <span className="flex items-start">
              Users are solely responsible for the accuracy and authenticity of any documents or information submitted for Know Your Customer (KYC) verification. Copartner assumes no liability for any issues or consequences arising from the submission of inaccurate or falsified documents.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCPopup;
