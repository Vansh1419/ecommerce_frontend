import { Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "../../../components/common/Carousel/Carousel";
import { Percentage } from "../../../utils/ProductCalc";
import WhyToShop from "../../../components/WhyToShop/WhyToShop";
import { ProductData } from "../ProductDetails";
const images = [
  "https://source.unsplash.com/random/nature",
  "https://source.unsplash.com/random/wildlife",
  "https://source.unsplash.com/random/water",
  "https://source.unsplash.com/random/urban",
];

const ProductUp = () => {
  const { name, types, price, discountedPrice } = ProductData;
  return (
    <Grid container borderBottom="1px solid #666666" mb={4}>
      <Grid item xs={12} md={6}>
        <Carousel
          slides={images}
          options={{ loop: true, draggable: true }}
          size="small"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          py: {
            xs: 3,
            md: 6,
          },
          pl: {
            xs: 3,
            md: 9,
          },
        }}
      >
        <Typography
          fontSize={24}
          fontWeight={400}
          sx={{
            fontSize: {
              xs: "20px",
              md: "24px",
            },
          }}
        >
          {name}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            overflow: "scroll",
            my: 3,
          }}
        >
          {types.map((type, index) => {
            return (
              <Chip
                key={index}
                label={type.name}
                variant="outlined"
                sx={{
                  cursor: "pointer",
                  "&:focus": {
                    backgroundColor: "#0c831f",
                    color: "white",
                  },
                }}
              ></Chip>
            );
          })}
        </Stack>
        <Stack direction="column-reverse" my={3}>
          <Typography
            sx={{
              fontSize: "15px",
              textDecorationLine: "line-through",
              fontWeight: 400,
              color: "#666666",
              pr: 1,
            }}
          >
            ₹ {price}
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#000000",
            }}
          >
            ₹ {discountedPrice}
          </Typography>
          <Chip sx={{
            backgroundColor: "#1976d2",
            color: "white",
            fontSize: "12px",
            width: "80px",
            height: "20px",
            fontWeight: 400,
            zIndex: "1",
          }} label={`${Percentage(price,discountedPrice)}% OFF`}/>
        </Stack>

        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            color: "#0c831f", 
            fontSize: {
              xs: "12px",
              md: "16px",
            },
            minHeight: {
              xs: "35px",
              md: "50px",
            },
            minWidth: {
              xs: "100px",
              md: "150px",
            },
            border: "1px solid #0c831f",
            borderRadius: "5px",
            cursor: "pointer",
            "&:focus": {
              border: "1px solid #0c831f",
              backgroundColor: "#0c831f",
              color: "white",
            },
          }}
        >
          ADD
        </Button>
        <WhyToShop />
      </Grid>
    </Grid>
  );
};

export default ProductUp;
