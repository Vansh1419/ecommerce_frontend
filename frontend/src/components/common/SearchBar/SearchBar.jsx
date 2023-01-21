import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate()
  const handleFocus = (e)=>{
    navigate("/search")
  }
  return (
    <TextField
      onFocus={handleFocus}
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
