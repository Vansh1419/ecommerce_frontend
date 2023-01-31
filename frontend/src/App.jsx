import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import BasicLayout from "./pages/BasicLayout";
import Search from "./pages/Search/Search";
import Error from "./pages/Error/Error";
import Product from "./pages/Product/Product";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import Account from "./pages/Account/Account";

function App() {
  return (
    <Box
      className="App"
      sx={{
        position: "absolute",
        top: "90px",
        width: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="product" element={<Product />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="account" element={<Account/>} />
        </Route>
        <Route path="not-found" element={<Error />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Box>
  );
}

export default App;
