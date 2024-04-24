import React, { useState, useEffect } from "react";
import styles from "../../style";
import ReferEarn from "../ReferEarn/ReferEarn";
import { walletData } from "../../constants/index";
import { Link } from "react-router-dom";
import Interest from "./Interest";

const Wallet = () => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <div
        className={`flex md:flex-col flex-col ${styles.paddingY} expertise-Bg`}
      >
        <div className="flex flex-col md:gap-[2rem] gap-[1rem]">
          <div className="flex md:flex-row flex-col justify-center md:px-[8rem] px-[1rem] gap-[1rem]">
            <div
              className={`${styles.flexStart} flex-col text-center md:gap-[2rem] gap-0`}
            >
              <div className="justify-between items-center">
                <span className="font-inter font-[700] md:text-[72px] text-[44px] text-gradient md:leading-[74px] leading-[48px]">
                  Earn and Prosper
                </span>

                <p className="md:w-[508px] md:h-[56px] w-[341px] h-[32px] font-inter font-[500] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] leading-[16px] flex items-center justify-center">
                  Earn, Repeat & Collect!
                </p>
              </div>
            </div>

            {/* <div className="md:flex w-[325px] md:h-[301px] h-[279px] bg-[#18181B] bg-opacity-[50%] p-2">
              <div className="flex flex-col justify-center items-center gap-[1rem]">
                <span className="text-center text-gradient-2 w-[245px] h-[52px] font-[700] text-[30px leading-[51px] font-inter">
                  Available Balance
                </span>
                <span className="w-[177px] h-[84px] font-[700] text-[72px] leading-[84px] text-lightWhite">
                  ₹100
                </span>
                <span className="w-[288px] h-[40px] font-inter font-[400] text-[14px leading-[20px] text-dimWhite text-center">
                  With Cobalt, managing your business.{" "}
                  <span className="text-lightWhite">
                    Say no to spreadsheets.
                  </span>
                </span>
                <Link to="/refer&earn">
                  <button className="w-[87px] h-[24px] rounded-[4px] bg-white font-[500] text-[8px] leading-[9px] text-center">
                    Refer & Earn
                  </button>
                </Link>
              </div>
            </div> */}
          </div>

          <div className="flex md:flex-row flex-col justify-around items-center">
            <span className="md:w-[461px] md:h-[52px] font-inter font-bold md:text-[50px] text-[30px] text-gradient-2 leading-[51px]">
              Transaction History
            </span>
            <span className="md:w-[550px] md:h-[56px] w-[328px] h-[68px] font-[400] md:text-[18px] text-[13px] md:leading-[28px] leading-[17px] text-dimWhite md:text-start">
              Review the transaction history below to have transparency into
              payments made to our portal. <span className="text-lightWhite">
              Stay informed about your expenditure
              and the services you've accessed. 
              </span>
            </span>
          </div>

          <div className="flex justify-center items-center md:mt-[1rem] mt-[-20px]">
            {smallScreen ? (
              <div className="flex flex-wrap justify-center items-center">
                {walletData.slice(0, 3).map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around w-[361px] h-[208px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
                  >
                    <div className="flex flex-row justify-between">
                      <p className="w-[173px] h-[26px] font-[600] text-[21px] leading-[25px] text-lightWhite">
                        {row.transcationId}
                      </p>
                      <img
                        src={row.invoice}
                        alt=""
                        className="w-[21px] h-[21px] text-white"
                      />
                    </div>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">DATE:</span> {row.date}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">SUBSCRIPTION:</span>{" "}
                      {row.subscription}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">NAME:</span> {row.name}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">AMOUNT:</span>{" "}
                      {row.amount}
                    </span>
                  </div>
                ))}

                <button className="md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
                  Show More
                </button>
              </div>
            ) : (
              <table className="w-[1234px] h-[797px] px-[1rem] bg-[#18181B] bg-opacity-[50%] rounded-[30px]">
                <thead className="text-dimWhite w-[1234px] h-[51px]">
                  <tr>
                    <th className="py-2 px-4">Transaction ID</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Subscription</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Amount</th>
                    <th className="py-2 px-4">Invoice</th>
                  </tr>
                </thead>
                <tbody className="text-lightWhite w-[1234px] h-[81px]">
                  {walletData.map((row, index) => {
                    return (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                      >
                        <td className="py-2 px-20 w-[152px] h-[18px] font-[500] text-[16px] leading-[18px]">
                          {row.transcationId}
                        </td>
                        <td className="py-2 px-20 w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                          {row.date}
                        </td>
                        <td className="py-2 px-20 w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                          {row.subscription}
                        </td>
                        <td className="py-2 text-center w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                          {row.name}
                        </td>
                        <td className="py-2 px-20 w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                          {row.amount}
                        </td>
                        <td className="py-2">
                          <img
                            src={row.invoice}
                            alt=""
                            className="w-[21px] h-[21px] text-white mx-auto"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
          {/* <div id="refer" className="mb-[8rem]">
            <ReferEarn />
          </div> */}

          {/* <div className="flex md:flex-row flex-col justify-around items-center text-center">
            <span className="w-[308px] h-[52px] font-inter font-bold md:text-[50px] text-[30px] text-gradient-2 md:leading-[51px] leading-[51px]">
              Refer History
            </span>
            <span className="md:w-[670px] md:h-[56px] w-[328px] h-[68px] font-[400] md:text-[18px] text-[11px] md:leading-[28px] leading-[17px] text-dimWhite sm:text-start text-center">
              With Cobalt, managing your business finances is effortless,
              empowering.{" "}
              <span className="text-lightWhite">
                Say no to spreadsheets and tools designed in the 80s.
              </span>
            </span>
          </div> */}

          {/* <div className="flex justify-center items-center">
            {smallScreen ? (
              <div className="flex flex-wrap justify-center items-center">
                {walletData.slice(0, 2).map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around w-[361px] h-[208px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] m-4 p-4 w-[90%] max-w-sm"
                  >
                    <p className="w-[173px] h-[26px] font-[600] text-[21px] leading-[25px] text-lightWhite">
                      {row.transcationId}
                    </p>
                    <span className="flex items-center justify-between w-[327px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">DATE:</span> {row.date}
                    </span>
                    <span className="flex items-center justify-between w-[327px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">NAME:</span> {row.name}
                    </span>
                    <span className="flex items-center justify-between w-[327px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">AMOUNT:</span>{" "}
                      {row.amount}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <table className="w-[1234px] h-[230px] px-[1rem] bg-[#18181B] bg-opacity-[50%] rounded-[30px]">
                <thead className="text-dimWhite h-[51px]">
                  <tr>
                    <th className="w-[25%] px-4">Transcation ID</th>
                    <th className="w-[25%] px-4">Date</th>

                    <th className="w-[25%] px-4">Name</th>
                    <th className="w-[25%] px-4">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-lightWhite">
                  {walletData.slice(0, 2).map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                    >
                      <td className="w-[152px] text-center h-[18px] font-[500] text-[16px] leading-[18px]">
                        {row.transcationId}
                      </td>
                      <td className="w-[105px] text-center h-[18px] font-[500] text-[16px] leading-[18px]">
                        {row.date}
                      </td>

                      <td className="w-[105px] text-center h-[18px] font-[500] text-[16px] leading-[18px]">
                        {row.name}
                      </td>
                      <td className="w-[105px] text-center h-[18px] font-[500] text-[16px] leading-[18px]">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div> */}

          <Interest />
        </div>
      </div>
    </>
  );
};

export default Wallet;
