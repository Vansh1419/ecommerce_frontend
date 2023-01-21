import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import BasicLayout from "./pages/BasicLayout";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Box className="App" paddingTop={11}>
      <Routes>
        <Route element={<BasicLayout />} path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/search" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
