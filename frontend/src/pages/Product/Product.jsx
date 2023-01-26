import { Box, Grid } from "@mui/material";
import React from "react";
import ProductUp from "./ProductUp/ProductUp";
import ProductDown from "./ProductDown/ProductDown";
const Product = () => {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <ProductUp />
      <ProductDown />
    </Box>
  );
};

export default Product;
