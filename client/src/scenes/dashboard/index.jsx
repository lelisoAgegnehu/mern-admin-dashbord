import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useGetDashboardQuery } from "../../state/api";
import FlexBetween from "../../components/FlexBetween";
import Header from "../../components/Header";
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import StatBox from "../../components/StatBox";
import OverviewChart from "../../components/OverviewChart";

function Dashboard() {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "userId", headerName: "User ID", flex: 1 },
    { field: "createdAt", headerName: "CreatedAt", flex: 1 },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Well come to your dashboard" />
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoFlow="160px"
        gap="20px"
        sx={{
          "& s> div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
          },
        }}
      >
        {/* row 1 */}
        <StatBox
          title="Total Customers"
          value={data && data.totalCustomers}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />

        <StatBox
          title="Today Sales"
          value={data && data.todayStats.totalSales}
          increase="+42%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="sales" isDashboard={true} />
        </Box>

        <StatBox
          title="Monthly Sales"
          value={data && data.thisMonthStats.totalSales}
          increase="+25%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />

        <StatBox
          title="Yearly Sales"
          value={data && data.yearlySalesTotal.totalSales}
          increase="+40%"
          description="Since last month"
          icon={
            <Traffic
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
