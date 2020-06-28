import { readRemoteFile } from 'react-papaparse';
import { getColumnData, getRowData } from './dataTranslator';

export const useCsvHandler = (props) => {
  const { dispatch, state } = props;

  if (state.isLoaded === true) {
    !state.columnData && getColumnData(state, dispatch);

    !state.rowData && getRowData(state, dispatch);
  }

  if (state.isLoaded === false) {
    readRemoteFile('data/shipment-data.csv', {
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
        dispatch({
          type: 'DATA_LOADED',
          payload: results,
        });
      },
    });
  }
};

export default useCsvHandler;
