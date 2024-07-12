import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <div className="card relative bg-base-100 shadow-xl mx-4">
        <figure className="relative h-72 sm:h-96">
          <img
            src={img}
            alt="Product"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </figure>
        <div className="card-body text-center p-4">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-600">{text}</p>
          <div className="card-actions flex justify-between items-center mt-4">
            <div className="badge badge-outline">{price}$</div>
            <div className="flex gap-1">
              {colors?.map((color, index) => (
                <span
                  key={index}
                  className="badge badge-outline"
                  style={{
                    backgroundColor: color,
                    width: "20px",
                    height: "20px",
                  }}
                >
                  &nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
