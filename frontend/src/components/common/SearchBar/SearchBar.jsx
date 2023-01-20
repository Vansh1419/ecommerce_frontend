import { Box, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

const SearchBox = () => {
  return (
    <div>
      <Box
        sx={{
          mx: 2,
          height: {
            xl: "86px",
            xs: "43px",
          },
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Input
          className="search__container"
          startAdornment={<Search />}
          // placeholder={`${(<Search />)} Search for products, brands and more`}
          placeholder={`Search for products, brands and more`}
          sx={{
            height: 30,
            borderRadius: 2,
            border: 1,
            borderBottom: 0,
            px: 1,
            width: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        />
      </Box>
    </div>
  );
};

export default SearchBox;
