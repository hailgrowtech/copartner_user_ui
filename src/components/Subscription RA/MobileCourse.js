import React from 'react';

function MobileCourse ({showMobilePopup, handleBuyNowClick}) {
  
  return (
    <div>
      {showMobilePopup && (
        <div className="fixed bottom-0 left-0 right-0 bg-black p-4 shadow-lg z-50">
          <div className="flex rounded-2xl p-4 bg-[#18181B80]">
            <div className="flex-1 text-white text-left">
                <div className='flex items-center gap-4'>
              <p className="text-lg text-white">Monthly</p><span className="text-2xl font-bold text-white">₹1,999</span>
              </div>
              <p className="text-[#C6CDD5] text-sm">1 Month Access</p>
            </div>
            <button onClick={() => handleBuyNowClick("Monthly", 1999)} className="text-lg px-3 rounded-lg font-semibold flex items-center bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] ">Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileCourse;
