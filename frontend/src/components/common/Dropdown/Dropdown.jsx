import React from "react";
import { Button, Menu, Box, MenuItem, Typography } from "@mui/material";

const Dropdown = ({ info }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ color: "black" }}>
      <Button disableRipple onClick={handleClick}>
        <Typography whiteSpace="nowrap" textTransform="capitalize" variant="subtitle2">{info.option_name}</Typography>
        {info.option_icon}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {info.options.map((option, index) => {
          return (
            <MenuItem key={index} onClick={handleClose}>
              {option}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default Dropdown;
