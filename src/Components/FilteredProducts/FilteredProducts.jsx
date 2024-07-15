import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  filteredProducts,
  sortByPrice,
  filterByColor,
  filterGender,
  filterBySize,
} from "../../features/slices/productsSlice";
import Error from "../Error/Error";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="pt-16">
        <div className="pl-16">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center flex-wrap gap-4">
              {genderButtons.map((item, index) => (
                <button
                  key={index}
                  className="btn btn-outline btn-gray"
                  onClick={() => dispatch(filterGender(item))}
                >
                  {item}
                </button>
              ))}
              <button
                className="btn btn-outline btn-gray"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </button>

              <div className="dropdown">
                <label tabIndex={0} className="btn btn-outline btn-gray m-1">
                  Select a color
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
                >
                  {colorButtons.map((item, index) => (
                    <li key={index}>
                      <button
                        className="text-black"
                        style={{ color: item }}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dropdown">
                <label
                  tabIndex={0}
                  className={`btn btn-outline btn-gray m-1 ${
                    type === "Bags" || type === "Shoes" ? "btn-disabled" : ""
                  }`}
                  disable={type === "Bags"}
                >
                  Select a size
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
                >
                  {sizeButtons.map((item, index) => (
                    <li key={index}>
                      <button
                        className="text-black"
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pr-14">
              <button
                className="btn btn-outline btn-gray"
                onClick={() => dispatch(filteredProducts(type))}
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => (
                <div key={index}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
