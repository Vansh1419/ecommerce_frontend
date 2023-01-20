import React from "react";
import { Box } from "@mui/material";
import ImportantLinks from "./FooterComponents/ImportantLinks/ImportantLinks";
import BrandLinks from "./FooterComponents/BrandLinks/BrandLinks";
import PaymentPartner from "./FooterComponents/PaymentPartner/PaymentPartner";
import EndCredit from "./FooterComponents/EndCredit/EndCredit";

const Footer = () => {
  return (
    <div>
      <Box width={"100%"}>
        <Box
          sx={{
            width: "95%",
            maxWidth: "1280px",
            borderTop: "1px solid #eaeaea",
            margin: "10px auto",
            mt: 16,
          }}
        >
          <ImportantLinks />
          <BrandLinks />
          <PaymentPartner />
        </Box>
        <EndCredit />
      </Box>
    </div>
  );
};

export default Footer;
