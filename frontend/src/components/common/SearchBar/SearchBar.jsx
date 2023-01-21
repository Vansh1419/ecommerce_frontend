import { Box, Input, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { searchBarBox } from "./SearchBarStyle";

const SearchBar = () => {
  return (
    <TextField
      size="small"
      className="search__container"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      placeholder={`Search for products, brands and more`}
      fullWidth
    />
  );
};

export default SearchBar;
