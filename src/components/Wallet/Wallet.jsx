import React, { useState, useEffect, useContext } from "react";
import styles from "../../style";
import Interest from "./Interest";
import axios from "axios";
import { invoiceImg, logout } from "../../assets";
import { Link } from "react-router-dom";
import { useUserData } from "../../constants/context";
import Receipt from "../Receipt/Receipt";
import KYCWarning from "./KYCWarning";
import { useUserSession } from "../../constants/userContext";
import { SubscriptionContext } from "../../constants/subscriptionContext";

const Wallet = ({ userId }) => {
  const userData = useUserData();
  const { transactionTable } = useContext(SubscriptionContext);
  const [smallScreen, setSmallScreen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [visibleTransactions, setVisibleTransactions] = useState(3);
  const [KYCWaring, setKYCWaring] = useState(false);
  const { userData: loginData } = useUserSession();

  const showMoreTransactions = () => {
    setVisibleTransactions(visibleTransactions + 3);
  };

  const getExpertType = (typeId) => {
    switch (parseInt(typeId)) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Options";
      default:
        return "Unknown";
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const downloadTransactionData = (transaction) => {
    if (!loginData?.isKYC) {
      setKYCWaring(true);
      return;
    }
    setSelectedTransaction(transaction);
    setSelectedTransaction(transaction);
  };

  const closePopup = () => {
    setSelectedTransaction(null);
    setKYCWaring(false);
  };

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
              <div className="flex flex-col justify-center items-center text-center">
                <span className="font-inter font-[700] md:text-[72px] text-[44px] text-gradient md:leading-[74px] leading-[48px]">
                  Transaction History
                </span>
                <p className="md:w-[508px] md:h-[56px] w-[341px] h-[32px] font-inter font-[500] text-dimWhite md:text-[18px] text-[13px] md:leading-[28px] leading-[16px] mt-4">
                  Review the transaction history below to have transparency into
                  payments made to our portal.{" "}
                  <span className="text-lightWhite">
                    Stay informed about your expenditure and the services you've
                    accessed. 
                  </span>
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
            <span className="md:w-[461px] md:h-[52px] font-inter font-bold md:text-[50px] text-[30px] text-gradient-2 leading-[51px]"></span>
          </div>

          {userId ? (
            <div className="flex justify-center items-center md:mt-[1rem] mt-[-20px]">
              {smallScreen ? (
                <div className="flex flex-wrap justify-center items-center">
                  {transactionTable
                    .slice(0, visibleTransactions)
                    .map((row, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-around w-[361px] h-[208px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 max-w-sm"
                      >
                        <div className="flex flex-row justify-between">
                          <p className="w-[173px] h-[26px] font-[600] text-[21px] leading-[25px] text-lightWhite">
                            {row.transactionId}
                          </p>
                          <img
                            onClick={(e) => {
                              e.stopPropagation();
                              downloadTransactionData(row);
                            }}
                            src={invoiceImg}
                            alt=""
                            className="w-[21px] h-[21px] text-white"
                          />
                        </div>
                        <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                          <span className="text-dimWhite">DATE:</span>{" "}
                          {formatDate(row.transactionDate)}
                        </span>
                        <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                          <span className="text-dimWhite">SUBSCRIPTION:</span>{" "}
                          {getExpertType(row.subscription.serviceType)}
                        </span>
                        <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                          <span className="text-dimWhite">NAME:</span>
                          {row.subscription.experts.name}
                        </span>
                        <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                          <span className="text-dimWhite">AMOUNT:</span> ₹{" "}
                          {row.totalAmount}
                        </span>
                      </div>
                    ))}

                  {visibleTransactions < transactionTable.length && (
                    <button
                      onClick={showMoreTransactions}
                      className="md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px] mt-4"
                    >
                      Show More
                    </button>
                  )}
                </div>
              ) : (
                <table className="w-[1234px] px-[1rem] bg-[#18181B] bg-opacity-[50%] rounded-[30px]">
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
                    {transactionTable &&
                      transactionTable.map((row, index) => {
                        return (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                          >
                            <td className="py-8 pl-20 h-[18px] font-[500] text-[16px] leading-[18px]">
                              {row.transactionId}
                            </td>
                            <td className="py-8 text-center h-[18px] font-[500] text-[16px] leading-[18px]">
                              {formatDate(row.transactionDate)}
                            </td>
                            <td className="py-8 px-20 text-center h-[36px] font-[500] text-[16px] text-white leading-[18px]">
                              {getExpertType(row.subscription.serviceType)}
                            </td>
                            <td className="py-8 text-center w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                              {row.subscription.experts.name}
                            </td>
                            <td className="py-8 px-20 text-center h-[18px] font-[500] text-[16px] leading-[18px]">
                              ₹ {row.totalAmount}
                            </td>
                            <td className="py-8">
                              <img
                                src={invoiceImg}
                                alt=""
                                className="w-[21px] h-[21px] text-white mx-auto"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  downloadTransactionData(row);
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
              {KYCWaring && (
                <KYCWarning
                  message="Please complete KYC to download this transaction."
                  onClose={closePopup}
                />
              )}
              {selectedTransaction && (
                <Receipt
                  closePopup={closePopup}
                  transaction={selectedTransaction}
                />
              )}
            </div>
          ) : (
            <div className="text-center flex flex-col gap-8 mt-12 text-dimWhite md:text-4xl text-lg">
              <img className="md:w-96 w-60 mx-auto" src={logout} alt="" />
              <Link to={"/signup"}>Login to see your transactions!</Link>
            </div>
          )}
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

          <Interest userData={userData} />
        </div>
      </div>
    </>
  );
};

export default Wallet;
