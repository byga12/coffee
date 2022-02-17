import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import s from "./ProductsList.module.css";

import { ProductsContext } from "../../context/ProductsContext";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className={s.grid_container}>
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            ingredients={product.ingredients}
          />
        ))}
    </div>
  );
};

export default ProductsList;
