import React from "react";
import { Button, Menu, Box, MenuItem, Typography, Icon } from "@mui/material";
import {
  dropdownButton,
  dropdownButtonTypographyBox,
  dropdownButtonTypography,
} from "./DropdownStyle";

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
    <Box sx={{ color: "black", ml: 1 }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          ...dropdownButton(info.height),
        }}
      >
        <Box
          sx={{
            ...dropdownButtonTypographyBox(info.option_name),
          }}
        >
          <Typography
            variant="p"
            pl={0}
            sx={{
              ...dropdownButtonTypography(),
            }}
          >
            {info.option_name}
          </Typography>
          <Icon sx={{}}>{info.option_icon}</Icon>
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
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
