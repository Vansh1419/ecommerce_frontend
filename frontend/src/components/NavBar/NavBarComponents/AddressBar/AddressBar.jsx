import React from "react";
import { Typography,Box } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import Dropdown from "../../../common/Dropdown/Dropdown";

const AddressBar = () => {
  return (
    <Box display="flex" alignItems="center" flexGrow={1} justifyContent="center">
      <Typography whiteSpace="nowrap" variant="subtitle2">Delivery at</Typography>
      <Dropdown
        info={{
          option_name: "Current Address",
          option_icon: <KeyboardArrowDown />,
          options: [
            "address 1",
            "address 2",
            "address 3",
            "address 4",
            "address 5",
          ],
        }}
      />
    </Box>
  );
};

export default AddressBar;
