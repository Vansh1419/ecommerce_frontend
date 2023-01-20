export const cartContainerStyle = () => ({
  mx: "auto",
  height: {
    xs: "70px",
    md: "100%",
  },
  width: {
    xs: "100%",
    md: "initial",
  },
  position: {
    xs: "fixed",
    md: "initial",
  },
  left: 0,
  right: 0,
  bottom: {
    xs: "10px",
    md: "initial",
  },
});
export const cartButtonStyle = () => ({
  textTransform: "capitalize",
  width: "90%",
  backgroundColor: "#0c831f",
  color: "#fff",
  justifyContent: "space-between",
  display: "flex",
  px: 2,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "#0c831f",
    color: "#fff",
  },
});

export const iconSmallerScreen = () => ({
  display: {
    md: "none",
    xs: "block",
  },
  mr: 1,
});
export const iconLargerScreen = () => ({
  display: {
    md: "block",
    xs: "none",
  },
  mr: 1,
});
