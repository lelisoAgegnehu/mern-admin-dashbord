import { GridColumnMenuContainer } from "@mui/x-data-grid";

const DataGridDataGridCustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer hideMenu={hideMenu} open={open}>
      {/* <HideGridColumnMenu */}
    </GridColumnMenuContainer>
  );
};

export default DataGridDataGridCustomColumnMenu;
