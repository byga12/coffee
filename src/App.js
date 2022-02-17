import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Products from "./Components/Pages/Products/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
