import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-96 relative">
      <p className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700 text-4xl font-bold font-inter">
        SALE%
      </p>
      <img
        className="h-48 w-full object-cover md:h-72"
        src={img}
        alt="Man looking at item at a store"
      />
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {name}
        </div>
        <p className="mt-2 text-gray-500">{text}</p>
        <div className="flex justify-center gap-4">
          <div className="flex items-center">
            <span className="text-red-500">Size:</span>
            <span className="ml-2 text-sm text-gray-900 font-medium">
              {defaultSize}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500">Color:</span>
            <span
              className="ml-2 w-4 h-4 rounded-full inline-block"
              style={{ backgroundColor: defaultColor }}
            ></span>
          </div>
        </div>

        <div className="mt-4 flex justify-center items-center gap-4">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  text: text,
                  amount: 1,
                  price: price,
                  totalPrice: totalPrice,
                  name: name,
                  size: defaultSize,
                  color: defaultColor,
                })
              )
            }
            data-tip="Add to Cart"
            className="tooltip px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionItem;
