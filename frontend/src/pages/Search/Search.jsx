import { Container, Box, Stack, Typography } from "@mui/material";
import TrendingCard from "../../components/TrendingCard/TrendingCard";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import SearchIcon from "@mui/icons-material/Search";

const products = [
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
  { imgUrl: "https://source.unsplash.com/random/72x72", label: "food" },
];

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  if (query) {
    return (
      <Box sx={{ width: "100vw" }}>
        <Container style={{ maxWidth: "1010px" }}>
          <Stack spacing={1} direction="row" alignItems="center" marginBottom={3}>
            <SearchIcon fontSize="medium" />
            <Typography variant="h6">Showing results for “{query}”</Typography>
          </Stack>
          <ProductGrid query={query} />
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100vw" }}>
      <Container style={{ maxWidth: "1010px" }}>
        <TrendingCard products={products} />
      </Container>
    </Box>
  );
}

export default Search;
