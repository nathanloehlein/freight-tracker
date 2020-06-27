import StatusIcon from "../components/StatusIcons";
import React from "react";
import Link from "@material-ui/core/Link";
import OpenInNewTwoToneIcon from "@material-ui/icons/OpenInNewTwoTone";

export const getValueNormalized = (value) =>
  value.toString() ? value.toString().toLowerCase().replace(/\s/g, "") : value;

export const extractColumns = (state) =>
  state &&
  state.shipmentData &&
  state.shipmentData.data[0].map((value, index) => {
    const filterValues = state.filters[index];
    return {
      name: getValueNormalized(value),
      label: value,
      options: {
        filterList:
          filterValues && filterValues.length > 0 ? filterValues : undefined,
      },
    };
  });

export const getColumnData = (state, dispatch) => {
  const columnData = extractColumns(state);

  dispatch({
    type: "COLUMN_DATA_ADDED",
    payload: columnData,
  });
};

export const extractRows = (data, columnData) =>
  data
    .slice(1)
    .map((row) =>
      row.reduce(
        (acc, value, index) => ({ ...acc, [columnData[index].name]: value }),
        {}
      )
    );

export const getRowData = (state, dispatch) => {
  const rowData =
    state.columnData && extractRows(state.shipmentData.data, state.columnData);

  dispatch({
    type: "ROW_DATA_ADDED",
    payload: rowData,
  });
};

export const addCustomIconsToColumns = (columnData, rowData, columns) => {
  return columnData.map((column) => {
    if (columns.includes(column.name)) {
      column.options = {
        ...column.options,
        customBodyRenderLite: (dataIndex) => (
          <StatusIcon status={rowData[dataIndex][column.name]} />
        ),
      };
    }
    return column;
  });
};

export const addGoogleMapsLinksToColumns = (columnData, rowData, columns) => {
  return columnData.map((column) => {
    if (columns.includes(column.name)) {
      column.options = {
        ...column.options,
        customBodyRenderLite: (dataIndex) => {
          const address = rowData[dataIndex][column.name];
          const urlSafeAddress = encodeURIComponent(address).replace(
            /\s/g,
            "+"
          );
          return (
            <Link
              href={`https://google.com/maps/search/${urlSafeAddress}`}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {address} <OpenInNewTwoToneIcon className={"openInNew"} />
            </Link>
          );
        },
      };
    }
    return column;
  });
};

export const addCustomOptionsToColumns = (columnData, rowData) => {
  let optionsAdded = addCustomIconsToColumns(columnData, rowData, [
    "status",
    "mode",
  ]);
  optionsAdded = addGoogleMapsLinksToColumns(optionsAdded, rowData, [
    "origin",
    "destination",
  ]);
  return optionsAdded;
};

export const getColumnAggData = (state, columnName) => {
  const counts = {};
  if (state.rowData && state.columnData) {
    state.rowData.forEach((row) =>
      counts[row[columnName]]
        ? counts[row[columnName]]++
        : (counts[row[columnName]] = 1)
    );
  }
  return counts;
};

export const getPossibleValues = (state, columnName) => {
  const possibleValues = new Set();
  const colName = getValueNormalized(columnName);

  if (state.rowData && state.columnData) {
    state.rowData.forEach((row) => {
      possibleValues.add(row[colName]);
    });
  }

  return [...possibleValues].sort((a, b) => (a > b ? 1 : -1));
};

export default {
  extractRows,
  getRowData,
  extractColumns,
  getColumnData,
  getColumnAggData,
  addCustomIconsToColumns,
  getPossibleValues,
};
