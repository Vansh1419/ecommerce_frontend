import { Grid, Box } from "@mui/material";
import { KeyboardArrowDown, PersonOutlineOutlined } from "@mui/icons-material";
import AddressBar from "./NavBarComponents/AddressBar/AddressBar";
import SearchBar from "../common/SearchBar/SearchBar";
import Dropdown from "../common/Dropdown/Dropdown";
import Logo from "./NavBarComponents/Logo/Logo";
import { positioningCentreWithFlex } from "../common/styles/PositioningStyles";
import { navStyle } from "./NavBarStyle";
import CartButton from "./NavBarComponents/CartButton/CartButton";
import AccountSection from "./NavBarComponents/AccountSection/AccountSection";

const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          ...navStyle(),
        }}
      >

        {/* Logo Section */}
        <Logo />

        {/* Address and Search Bar Section */}
        <Grid
          container
          sx={{
            ...positioningCentreWithFlex(),
            maxWidth: "70vw",
          }}
        >
          <Grid item xs={12} xl={3}>
            <AddressBar />
          </Grid>

          <Grid item xs={12} xl={9}>
            <SearchBar />
          </Grid>
        </Grid>

        {/* Account Section */}
        <AccountSection />

        {/* Cart Section */}
        <CartButton />

      </Box>
    </div>
  );
};

export default Navbar;
