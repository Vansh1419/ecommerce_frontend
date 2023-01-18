import { useState } from "react";
import {
  Button,
  Container,
  Input,
  Menu,
  MenuItem,
  Typography,
  Grid,
  Icon,
} from "@mui/material";
import { Box } from "@mui/system";
import logo from "../../assets/static/logo.png";
import Navbar_dropdown from "./navbar-components/navbar_dropdown/navbar_dropdown.component";
import {
  ArrowRight,
  KeyboardArrowDown,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Navbar_SearchBox from "./navbar-components/navbar_search/navbar_search.component";
import Navbar_addressBox from "./navbar-components/navbar_address/navbar_address.component";

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
        <Box
          className="logo__container"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            width: 176,
            borderRight: 1,
            // display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            mixBlendMode: "multiply",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <img src={logo} alt="" className="logo" height={60} />
        </Box>
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
            <Navbar_addressBox />
          </Grid>

          <Grid item xs={12} xl={9}>
            <Navbar_SearchBox />
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
          <Navbar_dropdown
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
          <Navbar_dropdown
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
