import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useUserData } from '../../constants/context';
import { telegram, userBck } from "../../assets/index";

const BuyNowCards = () => {
  const products = useUserData();
  const [selectedType, setSelectedType] = useState(1); // Default to "Commodity"
  const [subscriptions, setSubscriptions] = useState({}); // Store subscriptions per expert
  const sliderRefs = useRef({}); // To store references to each slider

  const getExpertType = (typeId) => {
    switch (typeId) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Futures & Options";
      default:
        return "Unknown";
    }
  };

  const handleTelegram = (link) => {
    window.open(link);
  };

  const handleTabClick = (typeId) => {
    setSelectedType(typeId);
  };

  const fetchSubscriptions = async (expertId) => {
    try {
      const response = await fetch(`https://copartners.in:5009/api/Subscription/GetByExpertsId/${expertId}`);
      if (!response.ok) {
        throw new Error("Error in fetching subscriptions");
      }
      const data = await response.json();
      setSubscriptions(prevSubscriptions => ({
        ...prevSubscriptions,
        [expertId]: data.data
      }));
    } catch (error) {
      console.error("Failed to fetch subscription plans:", error);
    }
  };

  useEffect(() => {
    products.forEach(product => {
      fetchSubscriptions(product.id);
    });
  }, [products]);

  const filteredProducts = products.filter(product => product.expertTypeId === selectedType);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // Scroll to discounted subscription cards
    Object.keys(sliderRefs.current).forEach(expertId => {
      const slider = sliderRefs.current[expertId];
      const discountedIndex = subscriptions[expertId]?.findIndex(sub => sub.discountedAmount < sub.amount);

      if (discountedIndex !== -1 && slider) {
        slider.slickGoTo(discountedIndex);
        slider.slickPause(); // Stop auto-scroll when there is a discounted subscription
      }
    });
  }, [subscriptions]);

  return (
    <div className="container mx-auto">
      <div className="expertTabs flex justify-center mb-4 p-2 bg-[#ffffff25] rounded-lg shadow-lg">
        <button
          onClick={() => handleTabClick(1)}
          className={`px-4 py-2 mx-2 transition duration-300 ease-in-out transform hover:scale-105 md:text-[10px] text-[12px] ${
            selectedType === 1
              ? ' text-[#000]  bg-[#fff] rounded-[5px] font-bold shadow-lg'
              : ' text-white '
          }`}
        >
          Commodity
        </button>
        <div className='border-[1px]'></div>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 mx-2 transition duration-300 ease-in-out transform hover:scale-105 md:text-[10px] text-[12px] ${
            selectedType === 2
              ? ' text-[#000]  bg-[#fff] rounded-[5px] font-bold shadow-lg'
              : ' text-white '
          }`}
        >
          Equity
        </button>
        <div className='border-[1px]'></div>

        <button
          onClick={() => handleTabClick(3)}
          className={`px-4 py-2 mx-2 transition duration-300 ease-in-out transform hover:scale-105 md:text-[10px] text-[10px] ${
            selectedType === 3
              ? ' text-[#000]  bg-[#fff] rounded-[5px] font-bold shadow-lg'
              : ' text-white '
          }`}
        >
          Futures & Options
        </button>
      </div>

      <div className="">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-2 text-white flex flex-col gap-3">
            <div className='ExpertChannel text-center font-bold text-white md:mb-6 mb-3 flex flex-row justify-between items-center uppercase'>
              <span className='flex justify-center items-center gap-1'>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h1 className='text-[18px] text-gradient text-left'>
                {product.channelName}
              </h1>
              </span>
              
              <button className='text-[12px] px-2 py-2 border-[1px] rounded-[30px] flex flex-row justify-center items-center w-[150px]' onClick={() => handleTelegram(product.telegramChannel)}>
                Get Free Calls <img src={telegram} alt="" className='w-5 ml-1' />
              </button>
            </div>

            <div className="flex flex-row gap-1 relative ">
              <Link
                to={`/ra-detail/${product.id}`}
                className="transition duration-150 ease-in-out expertCard relative p-2 rounded-[10px] z-10 flex flex-col justify-end"
              >
                  <div className="absolute inset-0 w-full h-full z-0">
                    <img src={userBck} alt="Background" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute inset-0 w-full h-full z-1">
                    <img src={product.expertImagePath} alt={product.name} className="w-full h-full object-cover mask-img bg-img" style={{ filter: 'blur(1px)' }} />
                  </div>
                  <div className="absolute inset-0 bg-glass z-2"></div>
                  <div className='relative z-3 p-1 flex flex-col items-start justify-end md:w-[180px] w-[130px] h-[130px]'>
                    <h3 className="md:text-lg text-[13px] font-bold text-white text-left text-gradient ">{product.name}</h3>
                    <h3 className="text-lightWhite font-[600] sm:text-[15px] text-left sm:leading-[18px] text-[10px] leading-[10px]">{getExpertType(product.expertTypeId)}</h3>
                    <div className="flex items-center mt-[0.5px] justify-around w-full">
                      <div className="flex flex-col items-center justify-between">
                        <span className="text-dimWhite font-[400] text-[13px] md:block hidden">Experience</span>
                        <span className="text-dimWhite font-[400] text-[9px] md:hidden sm:hidden lg:hidden">Experience</span>
                        <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">{product.experience}+</span>
                      </div>
                      <div className="w-[1px] h-[20px] bg-[#ffffff71]"></div>
                      <div className="flex">
                        <div className="flex flex-col items-center">
                          <span className="text-dimWhite font-[400] text-[13px] md:block hidden">Followers</span>
                          <span className="text-dimWhite font-[400] text-[9px] md:hidden sm:hidden lg:hidden">Followers</span>
                          <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">{`${product.telegramFollower / 1000}k`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </Link>
              <div className='subs-cards container md:w-[60rem]'>
                <Slider {...sliderSettings} ref={el => sliderRefs.current[product.id] = el}>
                  {subscriptions[product.id]?.map((subscription) => (
                    <div className='slide' key={subscription.id}>
                      <div className={`relative flex flex-col h-[170px] md:h-[200px] justify-center items-start p-2 rounded-[10px] bg-sub ${subscription.discountedAmount < subscription.amount ? 'bg-subs' : ''}`}>
                        {subscription.discountedAmount < subscription.amount && (
                          <span className="discount-badge">
                            {subscription.discountPercentage}%
                          </span>
                         )}
                        <div className="text-lg subheading-color font-bold mb-1">
                          {subscription.planType}
                        </div>
                        <div className="text-3xl font-extrabold mb-1">
                          ₹{subscription.discountedAmount < subscription.amount ? subscription.discountedAmount : subscription.amount}
                        </div>
                        {subscription.discountedAmount < subscription.amount && (
                          <>
                            <div className="text-[12px] line-through mb-1">
                              ₹{subscription.amount}
                            </div>
                          </>
                        )}
                        <div className="text-[12px] mb-2">
                          {subscription.durationMonth} {subscription.durationMonth > 1 ? 'Months' : 'Month'} Access
                        </div>
                        <button className={`mt-2 w-full md:px-4 md:py-2 py-1 text-white text-[14px] rounded-lg font-semibold ${subscription.discountedAmount < subscription.amount ? 'animate-pulse bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-500 to-blue-500'}`}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyNowCards;
