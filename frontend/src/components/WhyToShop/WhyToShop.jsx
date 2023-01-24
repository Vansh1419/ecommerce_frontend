import { Box, Typography, Stack } from "@mui/material";
import React from "react";
const WhyToShopDatas = [
  {
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/10_minute_delivery.png",
    heading: "Superfast Delivery",
    description:
      "Get your order delivered to your doorstep at the earliest from dark stores near you.",
  },
  {
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/Best_Prices_Offers.png",
    heading: "Best Prices & Offers",
    description:
      "Best price destination with offers directly from the manufacturers.",
  },
  {
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=45/assets/web/blinkit-promises/Wide_Assortment.png",
    heading: "Wide Assortment",
    description:
      "Choose from 5000+ products across food, personal care, household & other categories.",
  },
];
const WhyToShop = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mt: 4, mb: 4 }}>
        Why to shop with us?
        {WhyToShopDatas.map((data, index) => {
          return (
            <Stack
              direction="row"
              py={1}
              my={1}
              border="1px solid #0c831f"
              alignItems="center"
              borderRadius={1}
              key={index}
            >
              <img src={data.img} />
              <Box pl={2}>
                <Typography
                  fontSize={12}
                  sx={{
                    fontSize: 12,
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  {data.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#666666",
                  }}
                  variant="h6"
                >
                  {data.description}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </Typography>
    </Box>
  );
};

export default WhyToShop;
