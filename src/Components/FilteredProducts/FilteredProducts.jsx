import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);
  return (
    <div>
      <div className="pt-16">
        <div className="pl-16">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leadinf-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
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
              );
            })}
        </div>
      </div>
    </div>
  );

  return <div>FilteredProducts</div>;
};

export default FilteredProducts;
