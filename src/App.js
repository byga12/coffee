import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Products from "./Components/Pages/Products/Products";
import Layout from "./Components/Pages/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
