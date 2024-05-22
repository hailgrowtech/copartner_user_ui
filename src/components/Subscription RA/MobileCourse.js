import React from "react";

function MobileCourse({ showMobilePopup, handleBuyNowClick, subscriptions }) {
  return (
    <div>
      {showMobilePopup && (
        <div className="fixed bottom-0 left-0 right-0 bg-black p-4 shadow-lg z-50">
          {subscriptions.length > 1 && (
            <div className="flex rounded-2xl items-center bg-[#18181B80]">
              <div className="flex-1 text-white text-left">
                <div className="flex flex-col">
                  <span className="text-LG text-white">
                    {subscriptions[1].planType}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-LG text-white">
                      <del>₹5,999</del>
                    </span>
                    <span className="text-2xl font-bold text-white">
                      ₹{subscriptions[1].amount}
                    </span>
                  </div>
                </div>
                <p className="text-[#C6CDD5] text-sm">
                  {subscriptions[1].durationMonth} Month Access
                </p>
              </div>
              <button
                onClick={() => handleBuyNowClick("Quarterly", 2999)}
                className="text-lg px-5 rounded-lg font-semibold flex items-center py-3 bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] "
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MobileCourse;
