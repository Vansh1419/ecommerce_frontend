import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { positioningCentreWithFlex } from "../../../common/styles/PositioningStyles";

const EndCredit = () => {
  const datas = [
    {
      socialMediaIcons: <Facebook />,
      socialMediaLink: "https://www.instagram.com/_vansh_1003/",
    },
    {
      socialMediaIcons: <Instagram />,
      socialMediaLink: "https://www.instagram.com/_vansh_1003/",
    },
    {
      socialMediaIcons: <LinkedIn />,
      socialMediaLink: "https://www.instagram.com/_vansh_1003/",
    },
    {
      socialMediaIcons: <Twitter />,
      socialMediaLink: "https://www.instagram.com/_vansh_1003/",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fcfcfc",
        minHeight: "100px",
        pt: 8,
        borderTop: "1px solid #eaeaea",
        mb: {
          xs: "100px",
          md: 0,
        },
        flexDirection: "column",
        ...positioningCentreWithFlex(),
      }}
    >
      <Typography variant="body2" sx={{ color: "#666", textAlign: "center" }}>
        © Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        impedit eum modi, dolorum reprehenderit molestias!
      </Typography>
      <Stack spacing={2} pt={8} direction="row" alignItems="center">
        <Typography variant="p"> Developer Info</Typography>
        <Button
          variant="text"
          href="https://the-shady-one.netlify.app/"
          target="_blank"
        >
          Vansh
        </Button>
        <Button
          variant="text"
          href="https://the-shady-one.netlify.app/"
          target="_blank"
        >
          Rohit
        </Button>
      </Stack>
      <Stack spacing={2} p={8} direction="row" alignItems="center">
        {datas.map((data, index) => {
          return (
            <a
              key={index}
              href={data.socialMediaLink}
              target="_blank"
              style={{
                textDecoration: "none",
                fontSize: "60px !important",
                color: "#666",
              }}
            >
              {data.socialMediaIcons}
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default EndCredit;
