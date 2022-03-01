import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Products from "./Components/Pages/Products/Products";
import Layout from "./Components/Pages/Layout";
import Sucursales from "./Components/Pages/Sucursales/Sucursales";
import Contact from "./Components/Pages/Contact/Contact";
import Franchises from "./Components/Pages/Franchises/Franchises";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/franchises" element={<Franchises></Franchises>} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );

  }

export default App;
