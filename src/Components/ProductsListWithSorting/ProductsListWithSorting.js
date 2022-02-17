import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import s from "./ProductsListWithSorting.module.css";

const ProductsListWithSorting = () => {
  const getFunction = (fn) => {
    return fn;
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(getFunction);
    // receiveFromChild()({});
  };

  return (
    <div className={s.container}>
      <FormControl sx={{ paddingBlock: "2rem" }}>
        <FormLabel
          disabled
          id="demo-radio-buttons-group-label"
          sx={{
            borderBottom: "1px solid black",
            paddingBottom: ".6rem",
            marginBottom: ".4rem",
          }}
        >
          ORDENAR POR
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="name"
          name="radio-buttons-group"
          onChange={(e) => handleChange(e)}
        >
          <FormControlLabel
            value="name"
            control={<Radio size="small" color="default" />}
            label="Nombre"
          />
          <FormControlLabel
            value="price"
            control={<Radio size="small" color="default" />}
            label="Precio"
          />
        </RadioGroup>
      </FormControl>
      <ProductsList getFunction={getFunction} />
    </div>
  );
};

export default ProductsListWithSorting;
