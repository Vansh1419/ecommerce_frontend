import { useState } from "react";
import { Button, Typography, Grid, Icon } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../../assets/static/logo.png";
import {
  ArrowRight,
  KeyboardArrowDown,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import AddressBox from "./NavBarComponents/AddressBar/AddressBar";
import SearchBox from "../common/SearchBar/SearchBar";
import Dropdown from "../common/Dropdown/Dropdown";
import Logo from "./NavBarComponents/Logo/Logo";

const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          height: 86,
          width: "100%",
          justifyContent: "space-between",
          borderBottom: 1,
        }}
      >
        {/* Logo Section */}
        <Logo/>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: "70vw",
          }}
        >
          <Grid item xs={12} xl={3}>
            <AddressBox />
          </Grid>

          <Grid item xs={12} xl={9}>
            <SearchBox />
          </Grid>
        </Grid>

        {/* Account Section for large screen */}
        <Box
          mx={2}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Dropdown
            info={{
              option_name: "Account",
              option_icon: <KeyboardArrowDown />,
              options: ["Login", "Signup"],
              height: 1, // 1 for full height and 0 for default mui height
            }}
          />
        </Box>
        {/* Account Section for small screen */}
        <Box
          mx={2}
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <Dropdown
            info={{
              option_name: "",
              option_icon: <PersonOutlineOutlined />,
              options: ["Login", "Signup"],
              height: 1, // 1 for full height and 0 for default mui height
            }}
          />
        </Box>
        {/* Cart Section */}

        <Box
          sx={{
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            height: {
              xs: "70px",
              xl: "100%",
            },
            width: {
              xs: "100%",
              xl: "initial",
            },
            position: {
              xs: "fixed",
              xl: "initial",
            },
            bottom: {
              xs: "10px",
              xl: "initial",
            },
          }}
        >
          <Button
            sx={{
              textTransform: "capitalize",
              width: "90%",
              backgroundColor: "#0c831f",
              color: "#fff",
              justifyContent: "space-between",
              display: "flex",
              px: 2,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#0c831f",
                color: "#fff",
              },
            }}
          >
            <Icon
              sx={{
                display: {
                  xs: "none",
                  xl: "block",
                },
                mr: 1,
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
                display: {
                  xl: "none",
                  xs: "block",
                },
              }}
            >
              <Typography variant="p">View All</Typography>
              <Icon>
                <ArrowRight />
              </Icon>
            </Box>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
