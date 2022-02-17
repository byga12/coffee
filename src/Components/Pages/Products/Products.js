import React from "react";
import ProductsListWithSorting from "../../ProductsListWithSorting/ProductsListWithSorting";
// import s from "./Products.module.css";
import { ProductsContextData } from "../../../context/ProductsContext";
const Products = ({ title, description, ingredients }) => {
  return (
    <div>
      <ProductsContextData>
        <ProductsListWithSorting />
      </ProductsContextData>
    </div>
  );
};

export default Products;
