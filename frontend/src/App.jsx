import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import BasicLayout from "./pages/BasicLayout";
import Search from "./pages/Search/Search";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Box className="App" position="absolute" top="85px">
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="not-found" element={<Error />} />
        <Route path="*" element={<Navigate to="/not-found" replace/>} />
      </Routes>
    </Box>
  );
}

export default App;
