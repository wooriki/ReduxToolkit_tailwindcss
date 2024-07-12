import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterdProducts from "./Components/FilteredProducts/FilteredProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/filterdProducts/:type"
            element={<FilterdProducts />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
