import { useState } from "react";
import Header from "../../components/Header";
import OverviewChart from "../../components/OverviewChart";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Overview = () => {
  const [view, setView] = useState("units");
  return (
    <Box>
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="view"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
