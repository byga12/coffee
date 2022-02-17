import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import s from "./ProductsList.module.css";

const ProductsList = ({ getFunction }) => {
  const [products, setProducts] = useState([]);

  getFunction(setProducts);
  useEffect(() => {
    try {
      axios
        .get("https://api.sampleapis.com/coffee/hot")
        .then((res) => setProducts(res.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className={s.grid_container}>
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            ingredients={product.ingredients}
          />
        ))}
    </div>
  );
};

export default ProductsList;
