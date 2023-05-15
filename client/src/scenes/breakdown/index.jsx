import { Box, useMediaQuery } from "@mui/material";
import BreakdownChart from "../../components/BreakdownChart";
import Header from "../../components/Header";

const Breakdown = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of sales bt category" />
      <BreakdownChart isDashboard={isNonMobile} />
    </Box>
  );
};

export default Breakdown;
