import React from "react";

// * importing logo
import logo from "../../../../assets/static/logo.png";

// * importing styles
import {
  coloring,
  cursor,
  logoMediaQueries,
  logoDimensions,
} from "./Logostyle";

import { positioningCentreWithFlex } from "../../../common/styles/PositioningStyles";

import { Box } from "@mui/material";

const Logo = () => {
  return (
    <div>
      <Box
        className="logo__container"
        sx={{
          ...positioningCentreWithFlex(),
          ...coloring(),
          ...cursor(),
          ...logoMediaQueries(),
          ...logoDimensions(),
        }}
      >
        <img src={logo} alt="" className="logo" height={60} />
      </Box>
    </div>
  );
};

export default Logo;
