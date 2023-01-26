import React from "react";
import { Box, Container } from "@mui/material";
import ImportantLinks from "./FooterComponents/ImportantLinks/ImportantLinks";
import BrandLinks from "./FooterComponents/BrandLinks/BrandLinks";
import PaymentPartner from "./FooterComponents/PaymentPartner/PaymentPartner";
import EndCredit from "./FooterComponents/EndCredit/EndCredit";

const Footer = () => {
  return (
    <Box >
      <Box maxWidth="1200px" margin="0 auto" >
        <ImportantLinks />
        <BrandLinks />
        <PaymentPartner />
      </Box>
      <EndCredit />
    </Box>
  );
};

export default Footer;
