import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function MobileCourse({ showMobilePopup, handleBuyNowClick, subscriptions }) {
  const discountedSubscription = subscriptions.find(
    (sub) => sub.discountedAmount < sub.amount
  );
  const subscription =
    discountedSubscription ||
    subscriptions.slice().sort((a, b) => a.amount - b.amount)[1];

  const isDiscounted = subscription.discountedAmount < subscription.amount;
  const remainingTime = subscription.discountValidTo
    ? dayjs(subscription.discountValidTo).fromNow()
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
                  <span className="text-sm text-[#C6CDD5]">
                    {remainingTime} Left
                  </span>
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
                  subscription.discountedAmount
                )
              }
              className="text-lg px-5 rounded-lg font-semibold flex items-center py-3 bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff]"
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
