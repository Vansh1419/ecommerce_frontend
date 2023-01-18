import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import Dropdown from "../../../common/Dropdown/Dropdown";

const AddressBox = () => {
  return (
    <div>
      <Grid
        container
        className="address__container"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          px: {
            xl: 2,
            xs: 0,
          },
          height: {
            xl: "86px",
            xs: "43px",
          },
          mixBlendMode: "multiply",
          mx: 2,
          "&:hover": {
            background: "#f5f5f5",
          },
        }}
      >
        <Grid item xs={5} sm={3} xl={12}>
          <Typography variant="p">Delivery at</Typography>
        </Grid>
        <Grid item xs={7} sm={9} xl={12}>
          <Dropdown
            info={{
              option_name: "Current address",
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
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressBox;
