import React, { useEffect, useRef, useState } from "react";
import { close, exclamation } from "../../assets";

const KYCPopup = ({ onClose }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Disable scrolling on the body element when the popup is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body element when the popup is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleUpload = () => {
    // Trigger click event of file input element
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file change event here
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      // 2MB limit
      setError("File size exceeds 2MB");
      setSelectedFile(null);
    } else {
      setError(null);
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError(null);
    fileInputRef.current.value = null;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#18181b] border-[1px] border-[#ffffff24] rounded shadow-md w-[90%] md:w-[400px] relative">
        <button className="absolute top-3 right-1" onClick={handleClose}>
          <img src={close} alt="" className="h-8 w-8" />
        </button>
        <div className="border-b-2 py-3 px-6">
          <h2 className="md:text-2xl text-xl font-bold subheading-color text-left">
            KYC Verification
          </h2>
        </div>
        <div className="flex flex-col px-6 py-3">
          <div className="text-sm mb-2">Upload Your Adhar Card Image</div>
          <div className="justify-center items-center flex md:mb-2 border-[1px] border-dashed rounded-lg py-4">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              className="p-3 md:text-[20px] text-[10px]"
              onClick={handleUpload}
            >
              Select
            </button>
          </div>
          <div className="md:text-[14px] text-[10px] mb-2">
            Maximum file size is 2mb
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          {selectedFile && (
            <div className="text-sm mb-2 flex justify-between">
              <span>Selected File: {selectedFile.name}</span>
              <button onClick={handleRemoveFile}>
                <img className="w-5" src={close} alt="close" />
              </button>
            </div>
          )}
          <button className="bg-[#fff] text-[#000] py-3 px-2 rounded-sm hover:bg-[#000] hover:text-[#fff] transition duration-300 md:text-[1rem] text-[12px]">
            Upload Documents
          </button>
          <div className="justify-start items-center flex py-2">
            <span className="flex items-start gap-2 md:text-[12px] text-[10px]">
              <img src={exclamation} className="w-5 h-5" alt="" />
              Users are solely responsible for the accuracy and authenticity of
              any documents or information submitted for Know Your Customer
              (KYC) verification. Copartner assumes no liability for any issues
              or consequences arising from the submission of inaccurate or
              falsified documents.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCPopup;
