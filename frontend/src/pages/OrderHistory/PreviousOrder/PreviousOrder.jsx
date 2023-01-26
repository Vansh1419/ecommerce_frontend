import { Box, Stack, Typography } from "@mui/material";
import React from "react";
const PreviousOrderDatas = [
  {
    name: "Product",
    img: "https://source.unsplash.com/random/nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.",
    dateOfOrder: "29/01/2022",
  },
  {
    name: "Product",
    img: "https://source.unsplash.com/random/nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.",
    dateOfOrder: "29/01/2022",
  },
  {
    name: "Product",
    img: "https://source.unsplash.com/random/nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.",
    dateOfOrder: "29/01/2022",
  },
  {
    name: "Product",
    img: "https://source.unsplash.com/random/nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.",
    dateOfOrder: "29/01/2022",
  },
  {
    name: "Product",
    img: "https://source.unsplash.com/random/nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatur.",
    dateOfOrder: "29/01/2022",
  },
];
const PreviousOrder = () => {
  return (
    <Box minHeight="60vh">
      {PreviousOrderDatas.map((data, index) => {
        return (
          <Stack
            direction="row"
            key={index}
            sx={{
              border: "1px solid #0c831f",
              p: 2,
              borderRadius: "5px",
              mb: 2,
            }}
          >
            <img
              loading="lazy"
              style={{
                height: "100px",
              }}
              src={data.img}
              alt=""
            />
            <Stack pl={2} justifyContent="space-around">
              <Typography fontSize={18} fontWeight={700} color="#000000">
                {data.name}
              </Typography>
              <Typography fontSize={14} fontWeight={500} color="#666666">
                {data.description}
              </Typography>
              <Typography fontSize={16} fontWeight={800} color="#0c831f">
                {data.dateOfOrder}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};

export default PreviousOrder;
