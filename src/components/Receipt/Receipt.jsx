import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Receipt = ({ transaction, closePopup }) => {
  console.log(transaction);

  const downloadPDF = () => {
    const capture = document.querySelector(".receipt-container");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save(`${transaction.id}.pdf`);
      closePopup();
    });
  };

  useEffect(() => {
    if (transaction) {
      downloadPDF();
    }
  }, []);

  if (!transaction) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="receipt-container bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto my-10 border border-gray-300 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => window.location.reload()}
        >
          ✕
        </button>
        <h1 className="text-3xl font-bold text-center mb-6">RECEIPT</h1>

        <div className="grid grid-cols-2 mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Invoice no.</h2>
            <p>{transaction.transactionId}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Invoice date</h2>
            <p>{new Date(transaction.transactionDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="text-left mb-4">
            <h2 className="text-xl font-semibold mb-2">BILL FROM :</h2>
            <p>Copartner.in</p>
          </div>

          <div className="text-left mb-4">
            <h2 className="text-xl font-semibold mb-2">BILL TO:</h2>
            <p>{transaction.subscription.experts.name}</p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="text-left mb-4 grid grid-cols-2">
          <h2 className="text-xl font-semibold mb-2">MODE OF PAYMENT :</h2>
          <p>{transaction.paymentMode}</p>
        </div>

        <div className="text-left mb-4 grid grid-cols-2">
          <h2 className="text-xl font-semibold mb-2">DESCRIPTION</h2>
          <div>
            <p>{transaction.subscription.serviceType}</p>
            <p>{transaction.subscription.experts.name}</p>
            <p>{transaction.durationMonth}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">UNIT PRICE</h2>
            <p>₹ {transaction.totalAmount}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">SUB TOTAL</h2>
            <p>₹ {transaction.totalAmount}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">DISCOUNT</h2>
            <p>₹ 0.00</p>
          </div>
          <div className="text-left mb-4">
            <h2 className="text-xl font-semibold mb-2">TOTAL AMOUNT</h2>
            <p className="text-xl font-bold">₹ {transaction.totalAmount}</p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="text-left mb-4">
          <h2 className="text-xl font-semibold mb-2">TERMS & CONDITIONS</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://copartner.in/terms_of_service`}
          >
            Please refer to Terms and Conditions
          </a>
        </div>

        <div className="text-left text-sm text-gray-700 mb-4">
          <p>
            This is a computer-generated receipt and does not require a
            signature.
          </p>
          <p>Contact support@copartner.in for technical support.</p>
        </div>

        <div className="grid grid-cols-2">
          <div className="text-left text-sm text-gray-700">
            <p>
              <a
                href="https://copartner.in/terms_of_service"
                className="text-blue-500"
              >
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
