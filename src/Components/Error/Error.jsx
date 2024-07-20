import React from "react";

const Error = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <div className="w-96">
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
              />
            </svg>
            <span className="text-xl h-screen font-inter font-bold">
              Sorry, no products match your filter search... Clear the filter
              and try again 🤪
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
