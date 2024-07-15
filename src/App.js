import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  // console.log("user", user);
  // console.log("authUser", authUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
