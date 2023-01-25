import { useState, useEffect } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const Line1 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        zIndex: "-1",
        height: {
          xs: "3px",
          md: "6px",
        },
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
      }}
    ></Box>
  );
};
const Line2 = ({ index }) => {
  const [width, setWidth] = useState("0%");
  const [color, setColor] = useState(false);

  useEffect(() => {
    if (index === 5) {
      setColor(true);
      setWidth("100%");
    } else if (index < 5) {
      setWidth(`${(index - 1) * 33}%`);
    }
  }, [index]);
  return (
    <Box
      sx={{
        width: { width },
        height: {
          xs: "3px",
          md: "6px",
        },
        transform: "translateY(-50%)",
        position: "absolute",
        top: "50%",
        backgroundColor: color ? "red" : "#0c831f",
        borderRadius: "5px",
      }}
    ></Box>
  );
};
const Dot = ({ id, index }) => {
  // const [dotState, setDotState] = useState(false);
  const [color, setColor] = useState("#e0e0e0");
  useEffect(() => {
    if (id <= index && index !== 5) {
      setColor("#0c831f");
    } else if (index === 5) {
      setColor("red");
    }
  }, [id, index]);

  return (
    <Box
      sx={{
        width: {
          xs: "15px",
          md: "30px",
        },
        height: {
          xs: "15px",
          md: "30px",
        },
        borderRadius: "50%",
        backgroundColor: color,
      }}
    ></Box>
  );
};
const ProgressBar = ({ id }) => {
  const [dotIndex, setDotIndex] = useState(0);
  useEffect(() => {
    setDotIndex(id);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
      }}
    >
      <Line1 />
      <Dot id={1} index={dotIndex} />
      <Dot id={2} index={dotIndex} />
      <Dot id={3} index={dotIndex} />
      <Dot id={4} index={dotIndex} />
      <Line2 index={dotIndex} />
    </Box>
  );
};
export default ProgressBar;
