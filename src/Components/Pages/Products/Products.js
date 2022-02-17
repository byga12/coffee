import React from "react";
import ProductsListWithSorting from "../../ProductsListWithSorting/ProductsListWithSorting";
// import s from "./Products.module.css";

const Products = ({ title, description, ingredients }) => {
  return (
    <div>
      <ProductsListWithSorting />
    </div>
  );
};

export default Products;
