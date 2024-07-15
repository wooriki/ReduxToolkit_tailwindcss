import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <div className="w-96 bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 mb-4 p-2 rounded-lg text-center">
            Sign In
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="input input-lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            placeholder="Name"
          />
          <input
            className="input input-lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
            placeholder="Password"
          />
          <input
            className="input input-lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
            placeholder="Image URL address (Optional)"
          />
        </div>
        <div className="mt-4">
          <button
            className="btn btn-lg btn-gradient w-full"
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </button>
        </div>
        <p className="text-center mt-6 text-sm">Image is Optional</p>
      </div>
    </div>
  );
};

export default Login;
