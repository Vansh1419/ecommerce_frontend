import { Box, Typography } from "@mui/material";
import React from "react";
import { ProductData } from "../ProductDetails";
const DetailsComponent = ({ heading, info }) => {
  return (
    <Box py={2}>
      <Typography pb={1} fontWeight={600} fontSize={14} variant="h5">
        {heading}
      </Typography>
      <Typography color="#666666" fontSize={14} variant="h5">
        {info}
      </Typography>
    </Box>
  );
};
const ProductDown = () => {
  const {
    keyFeatures,
    description,
    unit,
    shelfLife,
    FSSAILicense,
    countryOfOrigin,
    customerCareDetails,
    expiryDate,
    seller,
  } = ProductData;
  return (
    <Box pl={2}>
      <Typography fontWeight={600} fontSize={24} variant="h5">
        Product Details
      </Typography>
      <DetailsComponent heading="Key Features" info={keyFeatures} />
      <DetailsComponent heading="Description" info={description} />
      <DetailsComponent heading="Unit" info={unit} />
      <DetailsComponent heading="Shelf Life" info={shelfLife} />
      <DetailsComponent heading="FSSAI License" info={FSSAILicense} />
      <DetailsComponent heading="Country Of Origin" info={countryOfOrigin} />
      <DetailsComponent heading="Email" info={customerCareDetails.email} />
      <DetailsComponent
        heading="Customer Care Number"
        info={customerCareDetails.customerCareNumber}
      />
      <DetailsComponent heading="Expiry Date" info={expiryDate} />
      <DetailsComponent heading="Seller" info={seller} />
    </Box>
  );
};

export default ProductDown;
