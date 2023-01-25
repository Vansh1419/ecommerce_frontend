import { Box, Container, Typography, Stack } from "@mui/material";
import React from "react";
import ProgressBar from "./CurrentOrderComponents/ProgressBar";
import { useState, useEffect } from "react";
const CurrentOrderData = [
  {
    name: "Product",
    id: 2,
    img: "https://source.unsplash.com/random/nature",
    currentstatus: "Shipped",
    expectedDelivery: "21/03/2023",
  },
  {
    name: "Product",
    id: 3,
    img: "https://source.unsplash.com/random/nature",
    currentstatus: "Out for delivery",
    expectedDelivery: "21/03/2023",
  },
  {
    name: "Product",
    id: 1,
    img: "https://source.unsplash.com/random/nature",
    currentstatus: "Ordered",
    expectedDelivery: "21/03/2023",
  },
  {
    name: "Product",
    id: 4,
    img: "https://source.unsplash.com/random/nature",
    currentstatus: "Delivered",
    expectedDelivery: "21/03/2023",
  },
  {
    name: "Product",
    id: 5,
    img: "https://source.unsplash.com/random/nature",
    currentstatus: "Cancelled",
    expectedDelivery: "21/03/2023",
  },
];
const CurrentOrder = () => {
  return (
    <Box minHeight="60vh">
      {CurrentOrderData.map((data, index) => {
        return (
          <Container
            key={index}
            sx={{
              // position: "relative",
              border: "1px solid #0c831f",
              borderRadius: "10px",
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                border: "1px solid #0c831f",
                borderRadius: "10px",
                backgroundColor: "#0c831f",
                py: "2px",
                my: 2,
              }}
            >
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={600}
                color="white"
              >
                {data.name}
              </Typography>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={600}
                color="white"
              >
                {data.expectedDelivery}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "95%",
                margin: "auto",
                py: 3,
                position: "relative",
              }}
            >
              <ProgressBar id={data.id} />
              <Typography mt={2} variant="h5">
                {data.currentstatus}
              </Typography>
            </Box>
          </Container>
        );
      })}
    </Box>
  );
};

export default CurrentOrder;
