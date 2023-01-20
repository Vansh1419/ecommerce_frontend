export const dropdownButton = (givenHeight) => ({
  color: "black",
  height: givenHeight ? "85px" : "40%",
  width: "100%",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});
export const dropdownButtonTypographyBox = (givenname) => ({
  display: "flex",
  width: "100%",
  justifyContent: givenname ? "space-around" : "center",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
export const dropdownButtonTypography = () => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
