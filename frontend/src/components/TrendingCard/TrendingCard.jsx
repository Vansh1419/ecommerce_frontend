import {Stack, Grid, Box, Typography} from "@mui/material"
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function TrendingCard({ products }) {
  return (
    <>
      <Stack spacing={1} direction="row" alignItems="center">
        <TrendingUpIcon />
        <Typography variant="h6">Trending</Typography>
      </Stack>
      <Grid container flexWrap="wrap" spacing={1} paddingTop={2}>
        {products.map((product, index) => {
          return (
            <Grid item key={index}>
              <Link to={`/search?query=${product.label}`}>
                <Box padding={1} borderRadius={2} bgcolor="rgb(237, 244, 255)">
                  <img
                    style={{
                      height: "72px",
                      width: "72px",
                      borderRadius: "10px",
                    }}
                    src={product.imgUrl}
                  />
                </Box>
              </Link>
              <Typography variant="subtitle2" textAlign="center">
                {product.label}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default TrendingCard;
