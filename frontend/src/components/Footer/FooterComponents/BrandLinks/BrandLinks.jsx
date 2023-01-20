import { Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { footerBrandsData } from "../../FooterData";
import { importantLinkStyle } from "../ImportantLinks/ImportantLinksStyle";
import { wrappingThroughFlex } from "../PaymentPartner/PaymentPartnerStyle";

const BrandLinks = () => {
  const datas = footerBrandsData;
  return (
    <Box p={2}>
      <Typography variant="h5">Brands</Typography>
      <Box
        sx={{
          ...wrappingThroughFlex(),
        }}
      >
        {datas.map((data, index) => {
          return (
            <Link
              key={index}
              style={{
                textDecoration: "none",
                width: "fit-content",
              }}
              to={data.brandLink}
            >
              <Typography
                sx={{
                  ...importantLinkStyle(),
                  mx: 1.5,
                }}
                variant="subtitle1"
              >
                {data.brandName}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default BrandLinks;
