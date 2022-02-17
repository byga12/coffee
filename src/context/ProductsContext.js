import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsContextData = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://api.sampleapis.com/coffee/hot").then((res) => {
        const list = res.data.map((product) => ({
          ...product,
          price: (Math.random() * 20).toFixed(2),
        }));
        setProducts(list);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextData };
