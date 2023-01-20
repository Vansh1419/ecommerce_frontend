import React from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import { ArrowRight, ShoppingCartOutlined } from "@mui/icons-material";
import { positioningCentreWithFlex } from "../../../common/styles/PositioningStyles";
import {
  cartContainerStyle,
  cartButtonStyle,
  iconSmallerScreen,
  iconLargerScreen,
} from "./CartButtonstyle";

const CartButton = () => {
  return (
    <div>
      <Box
        sx={{
          ...positioningCentreWithFlex(),
          ...cartContainerStyle(),
        }}
      >
        <Button
          sx={{
            ...cartButtonStyle(),
          }}
        >
          <Icon
            sx={{
              ...iconLargerScreen(),
            }}
          >
            <ShoppingCartOutlined />
          </Icon>
          <Box mr={2}>
            <Box>
              <Typography variant="p">1</Typography>
              <Typography variant="p">items</Typography>
            </Box>
            <Box>
              <Typography variant="p">₹</Typography>
              <Typography variant="p">2321</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...iconSmallerScreen(),
            }}
          >
            <Typography variant="p">View All</Typography>
            <Icon>
              <ArrowRight />
            </Icon>
          </Box>
        </Button>
      </Box>
    </div>
  );
};

export default CartButton;
