import React from 'react';
import MUIDataTable from 'mui-datatables';
import Grid from '@material-ui/core/Grid';

import { DataContext } from '../App';
import { addCustomOptionsToColumns } from '../utils/dataTranslator';

export const DataGrid = () => {
  const { state, dispatch } = React.useContext(DataContext);

  const convertFilterData = (list) => {
    dispatch({
      type: 'FILTERS_REPLACED',
      payload: list,
    });
  };

  const options = {
    filter: true,
    filterType: 'multiselect',
    responsive: 'standard',
    selectableRows: 'none',
    onFilterChange: (column, list) => convertFilterData(list),
  };
  return (
    <Grid container direction={'row'} spacing={6}>
      <Grid item xs={12}>
        {state.shipmentData && state.filters && (
          <MUIDataTable
            title={'Shipment Data'}
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
