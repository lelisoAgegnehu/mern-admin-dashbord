import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import {
  AdminPanelSettingsOutlined,
  CalendarViewMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutline,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

function Sidebar({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) {
  const { pathname } = useLocation();
  const [active, setActive] = useState();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const navItems = [
    { text: "Dashboard", icon: <HomeOutlined /> },
    { text: "Client Facing", icon: null },
    { text: "Products", icon: <ShoppingCartOutlined /> },
    { text: "Customers", icon: <Groups2Outlined /> },
    { text: "Transactions", icon: <ReceiptLongOutlined /> },
    { text: "Geography", icon: <PublicOutlined /> },
    { text: "Sales", icon: null },
    { text: "Overview", icon: <PointOfSaleOutlined /> },
    { text: "Daily", icon: <TodayOutlined /> },
    { text: "Monthly", icon: <CalendarViewMonthOutlined /> },
    { text: "Breakdown", icon: <PieChartOutline /> },
    { text: "Management", icon: null },
    { text: "Admin", icon: <AdminPanelSettingsOutlined /> },
    { text: "Performance", icon: <TrendingUpOutlined /> },
  ];
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              borderWidth: isNonMobile ? 0 : "2px",
              boxSizing: "border-box",
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[200],
            },
          }}
          variant="persistent"
          anchor="left"
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <Box width="100%">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box m="1.5rem 2rem 1rem 2rem">
                <Box display="flex" alignItems="center" gap="0.5rem"></Box>
                <Typography textAlign="center" variant="h4" fontWeight="bold">
                  ADMIN DASH
                </Typography>
              </Box>
              {!isNonMobile && (
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const iconText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${iconText}`);
                        setActive(iconText);
                      }}
                      sx={{
                        backgroundColor:
                          active === iconText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === iconText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === iconText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[100],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === iconText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default Sidebar;
