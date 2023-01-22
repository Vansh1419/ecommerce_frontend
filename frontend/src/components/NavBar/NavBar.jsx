import { Grid, Box } from "@mui/material";
import AddressBar from "./NavBarComponents/AddressBar/AddressBar";
import SearchBar from "../common/SearchBar/SearchBar";
import Logo from "./NavBarComponents/Logo/Logo";
import { navStyle } from "./NavBarStyle";
import CartButton from "./NavBarComponents/CartButton/CartButton";
import AccountSection from "./NavBarComponents/AccountSection/AccountSection";

const Navbar = ({disableAddress, disableAccount,disableForSearchPage}) => {
  return (
    <Box
      sx={{
        ...navStyle(),
      }}
    >
      {/* Logo Section */}
      <Logo />

      {/* Address and Search Bar Section */}
      <Grid container alignItems="center" paddingX={2} justifyContent="center">
        <Grid item xs={12} xl={3} display={disableAddress?"none":"unset"}>
          <AddressBar />
        </Grid>

        <Grid item xs={12} xl={9}>
          <SearchBar />
        </Grid>
      </Grid>

      {/* Account Section */}
      <AccountSection disableAccount={disableAccount} />

      {/* Cart Section */}
      <CartButton disableForSearchPage={disableForSearchPage}  />
    </Box>
  );
};

export default Navbar;
