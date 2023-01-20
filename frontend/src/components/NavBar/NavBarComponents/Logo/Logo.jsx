import React from "react";

// * importing logo
import logo from "../../../../assets/static/logo.png";

// * importing styles
import {
  positioning,
  coloring,
  cursor,
  logoMediaQueries,
  logoDimensions,
} from "./Logostyle";

import { Box } from "@mui/material";

const Logo = () => {
  return (
    <div>
      <Box
        className="logo__container"
        sx={{
          ...positioning(),
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
