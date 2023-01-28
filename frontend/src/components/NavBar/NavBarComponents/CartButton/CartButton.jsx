import React, { useState } from "react";
import { Box, Button, Drawer, Icon, Typography } from "@mui/material";
import { ArrowRight, ShoppingCartOutlined } from "@mui/icons-material";
import { positioningCentreWithFlex } from "../../../common/styles/PositioningStyles";
import {
  cartContainerStyle,
  cartButtonStyle,
  iconSmallerScreen,
  iconLargerScreen,
} from "./CartButtonstyle";
import { Stack } from "@mui/system";
import Checkout from "../../../Checkout/Checkout";

const CartButton = ({ disableForSearchPage }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerClose = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div>
      <Box
        sx={{
          ...positioningCentreWithFlex(),
          ...cartContainerStyle(disableForSearchPage),
        }}
      >
        <Button
          onClick={handleDrawerClose}
          sx={{
            ...cartButtonStyle(disableForSearchPage),
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
        <Checkout openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} anchor="right"/>
      </Box>
    </div>
  );
};

export default CartButton;
