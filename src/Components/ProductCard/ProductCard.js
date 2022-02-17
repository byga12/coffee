import React from "react";
import sampleImg from "./sample.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = ({ title, description, ingredients, price }) => {
  return (
    <Card sx={{ width: 200, backgroundColor: "#EFEFEF" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sampleImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#46382E",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            align="center"
            sx={{
              color: "#ECE4DD",
              borderRadius: "20px",
              backgroundColor: "#8D8D8D",
              margin: ".5rem",
              marginTop: "1.5rem",
              padding: " .3rem",
            }}
          >
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
