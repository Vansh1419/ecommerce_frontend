import { Grid, Box } from "@mui/material";
import AddressBar from "./NavBarComponents/AddressBar/AddressBar";
import SearchBar from "../common/SearchBar/SearchBar";
import Logo from "./NavBarComponents/Logo/Logo";
import { navStyle } from "./NavBarStyle";
import CartButton from "./NavBarComponents/CartButton/CartButton";
import AccountSection from "./NavBarComponents/AccountSection/AccountSection";

const Navbar = () => {
  return (
    <Box
      sx={{
        ...navStyle(),
      }}
    >
      {/* Logo Section */}
      <Logo />

      {/* Address and Search Bar Section */}
      <Grid container alignItems="center" paddingLeft={3}>
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
  );
};

export default Navbar;
