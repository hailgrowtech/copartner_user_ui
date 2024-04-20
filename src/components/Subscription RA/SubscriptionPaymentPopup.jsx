import React, { useEffect } from 'react';
import { close } from '../../assets';

const SubscriptionPaymentPopup = ({ onClose, selectedMonthlyPlan, planMonthlyPrice, expertName }) => {
  const gstRate = 0.18;

  // Calculate total price including GST
  const total = (planMonthlyPrice || 0) * (1 + gstRate);

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    // Disable scrolling on the body element when the popup is mounted
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling on the body element when the popup is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#18181be2] border-[1px] border-[#ffffff24] rounded shadow-md md:w-[400px] relative">
        <button className="absolute top-1 right-1" onClick={handleClose}>
          <img src={close} alt="" className="h-8 w-8" />
        </button>
        <div className='border-b-2 py-3 px-10'>
          <h2 className="md:text-2xl text-xl font-bold subheading-color text-left">Your Subscription Details</h2>
        </div>
        <div className="flex flex-col p-6">
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">Subscription</label>
            <span className="text-sm">{selectedMonthlyPlan || "Monthly"}</span> {/* Show default "Monthly" if no plan selected */}
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">Name</label>
            <span className="text-sm">{expertName}</span>
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">Amount</label>
            <span className="text-sm">₹{planMonthlyPrice}</span>
          </div>
          <div className="flex justify-between py-2 mb-4 border-b-[1px] border-t-[1px] border-[#c9c9c962]">
            <label className="block text-lg text-[#c9c9c9] font-semibold">Total</label>
            <span className="text-lg font-semibold">₹{total.toFixed(2)}</span>
          </div>
          <button className="main-button">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPaymentPopup;
