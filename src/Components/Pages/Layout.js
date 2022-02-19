import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
  
      <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      {children}
    


    </div>
  );
};

export default Layout;
