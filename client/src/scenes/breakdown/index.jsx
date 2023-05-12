import { Box } from "@mui/material";
import BreakdownChart from "../../components/BreakdownChart";
import Header from "../../components/Header";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of sales bt category" />
      <BreakdownChart />
    </Box>
  );
};

export default Breakdown;
