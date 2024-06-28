import React from "react";

function MobileCourse({ showMobilePopup, handleBuyNowClick, subscriptions }) {
  const calculateRemainingTime = (discountValidTo) => {
    const now = new Date();
    const validTo = new Date(discountValidTo);

    const timeDifference = validTo - now;

    if (timeDifference <= 0) {
      return "Expired";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (days > 0) {
      return `${days} days ${hours} hours left`;
    } else if (hours > 0) {
      return `${hours} hours ${minutes} minutes left`;
    } else if (minutes > 0) {
      return `${minutes} minutes left`;
    } else {
      return "Less than a minute left";
    }
  };

  const discountedSubscription = subscriptions.find(
    (sub) => sub.discountedAmount < sub.amount
  );
  const subscription =
    discountedSubscription ||
    subscriptions.slice().sort((a, b) => a.amount - b.amount)[1];

  const isDiscounted = subscription?.discountedAmount < subscription?.amount;
  const remainingTime = subscription?.discountValidTo
    ? calculateRemainingTime(subscription?.discountValidTo)
    : null;

  return (
    <div>
      {showMobilePopup && subscriptions.length > 1 && (
        <div className="fixed bottom-0 left-0 right-0 bg-black p-4 shadow-lg z-50">
          <div className="flex rounded-2xl items-center bg-[#18181B80] px-3 py-1">
            <div className="flex-1 text-white text-left">
              <div className="flex flex-col">
                <span className="text-lg text-white">
                  {subscription.planType}
                </span>
                <div className="flex items-center gap-3">
                  {isDiscounted ? (
                    <>
                      <span className="text-lg text-white">
                        <del>₹{subscription.amount}</del>
                      </span>
                      <span className="text-2xl font-bold text-white">
                        ₹{subscription.discountedAmount}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      ₹{subscription.amount}
                    </span>
                  )}
                </div>
                {remainingTime && isDiscounted && (
                  <div className="inline-block bg-gradient-to-r w-[70%] from-[#00c394] to-[#00a143] text-white py-1 px-3 rounded-lg font-bold text-sm ">
                    <i className="fas fa-clock"></i>
                    Limited Time Offer
                  </div>
                )}
              </div>
              <p className="text-[#C6CDD5] text-sm">
                {subscription.durationMonth} Month Access
              </p>
            </div>
            <button
              onClick={() =>
                handleBuyNowClick(
                  subscription.id,
                  subscription.planType,
                  isDiscounted
                    ? subscription.discountedAmount
                    : subscription.amount,
                  subscription.isCustom,
                  subscription.durationMonth
                )
              }
              className="text-lg px-5 rounded-lg font-semibold flex items-center py-3 bg-gradient-to-r from-[#6368FA] to-[#0081F1] text-white hover:bg-white hover:text-black animate-pulse"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileCourse;
