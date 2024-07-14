import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { filteredProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center py-8 gap-4">
          {buttons.map((button, index) => (
            <div key={index} className="w-full sm:w-auto">
              <Link to={"/filteredProducts/" + button}>
                <button
                  ripple="true"
                  className="text-gray-900 text-2xl font-bold uppercase p-2 px-6 bg-transparent border border-gray-500 rounded-md hover:bg-green-300 duration-300 ease-in-out"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black p-2 w-[70%] mx-auto rounded-md">
        <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className=" flex justify-center item-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
