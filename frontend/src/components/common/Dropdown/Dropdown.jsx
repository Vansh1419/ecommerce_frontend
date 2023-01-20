import React from "react";
import { Button, Menu, Box, MenuItem, Typography, Icon } from "@mui/material";

const Dropdown = ({ info }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let i = 0;
  return (
    <Box sx={{ color: "black" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "black",
          height: info.height ? "85px" : "40%",
          width: "100%",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: info.option_name ? "space-around" : "center",
          }}
        >
          <Typography
            variant="p"
            pl={0}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
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
        sx={{
          minWidth: "0px",
        }}
      >
        {info.options.map((option) => {
          return (
            <MenuItem
              key={i++}
              onClick={handleClose}
              sx={{
                maxWidth: "300px",
              }}
            >
              {option}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default Dropdown;
