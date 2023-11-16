import React from "react";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box gridColumn="span 12" height="75vh">
          <BarChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Bar;
