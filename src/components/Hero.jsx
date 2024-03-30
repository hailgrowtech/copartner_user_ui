// import React from 'react';
// import styles from '../style';
// import { hero, userImg, userBck, stars, telegram, arrow } from '../assets';
// import Expertise from './Expertise';

// const Hero = () => {
//   return (
//     <div className={`flex md:flex-col flex-col sm:py-8 py-6`}>
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 relative`}>
//         <div className="flex flex-row justify-between items-center sm:w-[603px] w-full h-[158px]">
//           <span className="flex-1 font-poppins font-semibold md:text-[62px] text-[36px]
//           text-gradient md:leading-[64px] leading-[48px]">
//             Unlock Financial Potential
//           </span>
//         </div>

//         <p className='font-poppins md:w-[541px] md:h-[28px] w-[519px] h-[28px] font-[500] text-dimWhite sm:text-[17px] text-[12px] md:leading-[28px] sm:leading-[16px]
//         text-[10px] leading-[16px]'>
//           Transform Your Future with Strategic Stock Market Insights!"
//         </p>

//        <div className='flex items-center gap-8 mt-[1rem]'>
//        <button className='text-white font-normal text-[15px] leading-[28px]'>
//         Explore More
//        </button>
//        <img src={arrow} alt='arrow' className='w-[16px] h-[16px]' />
//        </div>

//        <div className='flex pt-[2rem] grid grid-cols-2 md:flex'>
//         <div className='md:w-[256px] h-[285px] rounded-[11px] p-4 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out'>
//           <div className='w-full h-[146px] relative'>
//             <img
//             src={userBck}
//             alt='Background'
//             className='absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]'
//             />
//             <img
//             src={userImg}
//             alt='User'
//             className='absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]'
//             />
//           </div>

//           <div className='w-[212px] h-[26px] p-6 flex flex-row'>
//             <div className='flex w-[213px] h-[26px] flex flex-row justify-evenly'>
//               <div className='flex flex-col'>
//                 <span className='text-[12px] leading-[12px] font-[500] text-white'>Arun Kumar</span>
//                 <span className='text-[8px] leading-[10px] font-[400] text-dimWhite'>Stock Market</span>
//               </div>
//               <div className='w-[32px] h-[15px] flex flex-row gap-2'>
//                 <img src={stars} alt='stars' className='w-[11.5px] h-[11.5px]' />
//                 <span className='text-white font-[600] text-[11.5px] leading-[14px]'>4.4</span>
//               </div>
//             </div>
//           </div>

//           <div className='w-[145px] h-[33px] px-[12px] flex flex-row items-center justify-evenly'>
//             <div className='flex'>
//               <div className='flex flex-col w-[52px] h-[33px] items-center'>
//                 <span className='text-dimWhite font-[400] text-[8.6px] leading-[10px]'>Experience</span>
//                 <span className='text-white font-[600] text-[10px] leading-[12px]'>7+</span>
//               </div>
//             </div>
//             <div className='w-[1.4px] h-[25px] bg-lightWhite'></div>
//             <div className='flex'>
//               <div className='flex flex-col w-[52px] h-[33px] items-center'>
//                 <span className='text-dimWhite font-[400] text-[8.6px] leading-[10px]'>Followers</span>
//                 <span className='text-white font-[600] text-[10px] leading-[12px]'>3.1k</span>
//               </div>
//             </div>
//           </div>

//           <div className='w-[140px] h-[26px]  rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)]'>
//           <div className='flex justify-center items-center gap-2'>
//             <img src={telegram} alt='telegram' className='w-[16px] h-[16px]' />
//             <button className='text-white font-[400] text-[10px] leading-[19px]'>Join Telegram</button>
//             <img src={arrow} alt='arrow' className='w-[11px] h-[11px]' />
//           </div>
//           </div>
//         </div>

//         <div className='md:w-[256px] h-[285px] rounded-[11px] p-4 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out'>
//           <div className='w-full h-[146px] relative'>
//             <img
//             src={userBck}
//             alt='Background'
//             className='absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]'
//             />
//             <img
//             src={userImg}
//             alt='User'
//             className='absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]'
//             />
//           </div>

//           <div className='w-[212px] h-[26px] p-6 flex flex-row'>
//             <div className='flex w-[213px] h-[26px] flex flex-row justify-evenly'>
//               <div className='flex flex-col'>
//                 <span className='text-[12px] leading-[12px] font-[500] text-white'>Arun Kumar</span>
//                 <span className='text-[8px] leading-[10px] font-[400] text-dimWhite'>Stock Market</span>
//               </div>
//               <div className='w-[32px] h-[15px] flex flex-row gap-2'>
//                 <img src={stars} alt='stars' className='w-[11.5px] h-[11.5px]' />
//                 <span className='text-white font-[600] text-[11.5px] leading-[14px]'>4.4</span>
//               </div>
//             </div>
//           </div>

//           <div className='w-[145px] h-[33px] px-[12px] flex flex-row items-center justify-evenly'>
//             <div className='flex'>
//               <div className='flex flex-col w-[52px] h-[33px] items-center'>
//                 <span className='text-dimWhite font-[400] text-[8.6px] leading-[10px]'>Experience</span>
//                 <span className='text-white font-[600] text-[10px] leading-[12px]'>7+</span>
//               </div>
//             </div>
//             <div className='w-[1.4px] h-[25px] bg-lightWhite'></div>
//             <div className='flex'>
//               <div className='flex flex-col w-[52px] h-[33px] items-center'>
//                 <span className='text-dimWhite font-[400] text-[8.6px] leading-[10px]'>Followers</span>
//                 <span className='text-white font-[600] text-[10px] leading-[12px]'>3.1k</span>
//               </div>
//             </div>
//           </div>

//           <div className='w-[140px] h-[26px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)]'>
//           <div className='flex justify-center items-center gap-2'>
//             <img src={telegram} alt='telegram' className='w-[16px] h-[16px]' />
//             <button className='text-white font-[400] text-[10px] leading-[19px]'>Join Telegram</button>
//             <img src={arrow} alt='arrow' className='w-[11px] h-[11px]' />
//           </div>
//           </div>
//         </div>

//         <div className='md:w-[256px] h-[285px] rounded-[11px] p-4 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%]'>
//           <div className='w-full h-[146px] relative'>
//             <img
//             src={userBck}
//             alt='Background'
//             className='absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]'
//             />
//             <img
//             src={userImg}
//             alt='User'
//             className='absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]'
//             />
//           </div>

//           <div className='w-[212px] h-[26px] p-6 flex flex-row'>
//             <div className='flex w-[213px] h-[26px] flex flex-row justify-evenly'>
//               <div className='flex flex-col'>
//                 <span className='text-[12px] leading-[12px] font-[500] text-white'>Arun Kumar</span>
//                 <span className='text-[8px] leading-[10px] font-[400] text-dimWhite'>Stock Market</span>
//               </div>
//               <div className='w-[32px] h-[15px] flex flex-row gap-2'>
//                 <img src={stars} alt='stars' className='w-[11.5px] h-[11.5px]' />
//                 <span className='text-white font-[600] text-[11.5px] leading-[14px]'>4.4</span>
//               </div>
//             </div>
//           </div>

//           <div className='w-[145px] h-[33px] px-[12px] flex flex-row items-center justify-evenly'>
//             <div className='flex'>
//               <div className='flex flex-col w-[52px] h-[33px] items-center'>
//                 <span className='text-dimWhite font-[400] text-[8.6px] leading-[10px]'>Experience</span>
//                 <span className='text-white font-[600] text-[10px] leading-[12px]'>7+</span>
//               </div>
//             </div>
//             <div className='w-[1.4px] h-[25px] bg-lightWhite'></div>
//             <div className='flex'>
//               <div className='flex flex-col w-[52px] h-[33px] items-center'>
//                 <span className='text-dimWhite font-[400] text-[8.6px] leading-[10px]'>Followers</span>
//                 <span className='text-white font-[600] text-[10px] leading-[12px]'>3.1k</span>
//               </div>
//             </div>
//           </div>

//           <div className='w-[140px] h-[26px] flex items-center justify-center rounded-[21.5px] border-[0.67px] border-solid border-[rgba(255,255,255,0.3)]'>
//           <div className='flex justify-center items-center gap-2'>
//             <img src={telegram} alt='telegram' className='w-[16px] h-[16px]' />
//             <button className='text-white font-[400] text-[10px] leading-[19px]'>Join Telegram</button>
//             <img src={arrow} alt='arrow' className='w-[11px] h-[11px]' />
//           </div>
//           </div>
//         </div>

//         <div className='sm:w-[365px] sm:h-[174px] sm:px-[3rem] px-[1rem] w-[171px] h-[156px] flex flex-col justify-between'>
//           <span className='sm:w-[365px] sm:h-[36px] w-[171px] h-[36px] font-[600] sm:text-[30px] text-[18px] leading-[36px] text-lightWhite'>
//           Experience Matters
//           </span>
//           <span className='text-dimWhite sm:w-[365px] sm:h-[56px] w-[171px] h-[90px] font-[400] sm:text-[16px] text-[14px] leading-[28px]'>
//           Elevate Your Investments with Our Proven Stock Market Expertise.
//           </span>
//           <button className='sm:w-[147px] sm:h-[40px] w-[110px] h-[30px] rounded-[6px] bg-lightWhite sm:text-[14px] text-[10px] font-[500] sm:leading-[16px] leading-[12px]'>
//             Explore More
//           </button>
//         </div>
//        </div>
//      </div>

//      {/* <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative md:bottom-[10rem] bottom-[20rem]`}>
//       <img src={hero} alt="billing" className="w-[1462px] relative md:z-auto" />
//      </div> */}
//      {/* <Expertise /> */}
//   </div>
//   )
// }

// export default Hero