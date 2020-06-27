import React from "react";
import MUIDataTable from "mui-datatables";
import Grid from "@material-ui/core/Grid";

import { DataContext } from "../App";
import { addCustomOptionsToColumns } from "../utils/dataTranslator";

export const DataGrid = () => {
  const { state, dispatch } = React.useContext(DataContext);

  const convertFilterData = (column, list) => {
    dispatch({
      type: "FILTERS_REPLACED",
      payload: list,
    });
  };

  const options = {
    filter: true,
    filterType: "multiselect",
    responsive: "vertical",
    selectableRows: "none",
    onFilterChange: (column, list, type, index, displayData) =>
      convertFilterData(column, list, type, index, displayData),
  };
  return (
    <Grid container direction={"row"} spacing={6}>
      <Grid item>
        {state.shipmentData && (
          <MUIDataTable
            title={"Shipment Data"}
            columns={addCustomOptionsToColumns(state.columnData, state.rowData)}
            data={state.rowData}
            options={options}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default DataGrid;
