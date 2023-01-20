import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/common/Carousel/Carousel";

const images = [
  "https://source.unsplash.com/random/nature",
  "https://source.unsplash.com/random/wildlife",
  "https://source.unsplash.com/random/water",
  "https://source.unsplash.com/random/urban",
];

function Home() {
  return (
    <Box>
      <Carousel slides={images} options={{loop:true}} />
      <Container maxWidth="xl"></Container>
    </Box>
  );
}

export default Home;
