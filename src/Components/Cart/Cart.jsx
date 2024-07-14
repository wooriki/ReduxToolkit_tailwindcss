import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  return (
    <div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mx-4"
          >
            <button
              className="btn btn-sm btn-circle absolute right-4 top-4"
              onClick={handleClose}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">Shopping Bag</h3>
            {cart.length > 0 ? (
              <div className="flex flex-col justify-center items-start">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 py-4 w-full"
                  >
                    <div>
                      <img
                        className="h-[125px] rounded-md w-full object-cover"
                        src={item.img}
                        alt={item.name}
                      />
                      <div className="flex flex-col items-start mt-2">
                        <h4 className="text-black text-base font-bold">
                          {item.name}
                        </h4>
                        <p className="text-black text-xs mt-2">{item.text}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-sm mt-2">
                        Selected size: <span className="ml-2">{item.size}</span>
                      </p>
                      <p className="text-black text-sm mt-2">
                        Selected color:{" "}
                        <span
                          className="ml-2 rounded-full px-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <p className="text-black text-sm mt-2">
                        Amount: <span className="ml-2">{item.amount}</span>
                      </p>
                      <p className="text-black text-sm mt-2">
                        Single Item Price:{" "}
                        <span className="ml-2">{item.price}$</span>
                      </p>
                      <p className="text-black text-sm mt-2">
                        Total Item Prices:{" "}
                        <span className="ml-2">{item.totalPrice}$</span>
                      </p>
                      <div className="mt-4">
                        <button
                          onClick={() => dispatch(removeFromCart(item))}
                          className="btn btn-sm btn-outline btn-error"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-4">
                <h1 className="text-black text-3xl font-bold py-4">
                  Your bag is empty
                </h1>
                <p className="text-black text-base">Add some products</p>
              </div>
            )}
            <div className="flex justify-start items-center mt-4">
              <p className="text-black text-base">
                Total Price of All Products:{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </div>
          </div>
          <div className="modal-backdrop" onClick={handleClose}></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
