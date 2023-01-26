import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import CurrentOrder from "./CurrentOrder/CurrentOrder";
import PreviousOrder from "./PreviousOrder/PreviousOrder";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OrderHistory = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" , background:"divider"}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Current Orders" {...a11yProps(0)} />
            <Tab label="Previous Orders" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CurrentOrder />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PreviousOrder />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default OrderHistory;
