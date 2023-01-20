import { Box, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { searchBarBox, searchBarInput } from "./SearchBarStyle";

const SearchBar = () => {
  return (
    <div>
      <Box
        sx={{
          ...searchBarBox(),
        }}
      >
        <Input
          className="search__container"
          startAdornment={<Search />}
          placeholder={`Search for products, brands and more`}
          sx={{
            ...searchBarInput(),
          }}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
