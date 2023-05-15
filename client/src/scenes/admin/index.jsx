import { Box } from "@mui/material";
import { useGetAdminsQuery } from "../../state/api";
import Header from "../../components/Header";

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery();

  if (!data || isLoading) {
    return <>Loading...</>;
  }

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMIN" subtitle="List of admin users" />
    </Box>
  );
};

export default Admin;
