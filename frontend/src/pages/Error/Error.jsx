import { Grid, Container, Box, Typography, Button } from "@mui/material";
import PageNotFound from "../../assets/pagenotfound.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Box width="100vw">
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          <Grid item xs={6}>
            <img width="100%" src={PageNotFound} alt="page not found" />
          </Grid>
          <Grid item xs={6} padding={5}>
            <Typography variant="h4" fontWeight="700" marginBottom={1}>
              Oops!
            </Typography>
            <Typography variant="h6" marginBottom={1}>
              The page you are looking for can’t be found.
            </Typography>
            <Typography variant="body1" color="#888888" marginBottom={2.5}>
              You might find these links useful
            </Typography>
            <Link style={{textDecoration:"none"}} to="/"><Button  variant="outlined">Go to Home</Button></Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Error;
