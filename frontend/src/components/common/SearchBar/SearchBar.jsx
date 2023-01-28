import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const handleFocus = (e) => {
    navigate("/search");
  };
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      navigate(`/search?query=${query}`);
      setQuery("");
    }
  };
  return (
    <TextField
      autoFocus
      value={query}
      onChange={handleQueryChange}
      onKeyDown={handleEnter}
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
