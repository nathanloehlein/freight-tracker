export const initialState = {
  shipmentData: null,
  columnData: null,
  rowData: null,
  isLoaded: false,
  isError: false,
  filters: [...Array(8)].map(_ => Array(0)),
  favFilters: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return {
        ...state,
        shipmentData: action.payload,
        isLoaded: true,
        isError: false,
      };
    case "DATA_ERROR":
      return {
        ...state,
        shipmentData: action.payload,
        isLoaded: true,
        isError: true,
      };
    case "COLUMN_DATA_ADDED":
      return {
        ...state,
        columnData: action.payload,
      };
    case "ROW_DATA_ADDED":
      return {
        ...state,
        rowData: action.payload,
      };
    case "ROW_ADDED":
      return {
        ...state,
        rowData: [...state.rowData, action.payload],
      };
    case "FILTER_ADDED":
      const newStateFilters = [...state.filters];
      newStateFilters[action.payload.index].push(action.payload.value);
      return {
        ...state,
        filters: newStateFilters,
      };
    case "FILTER_REMOVED":
      return {
        ...state,
        filters: state.filters[action.payload.index].filter(
          (currentFilter) => currentFilter.value !== action.payload.value
        ),
      };
    case "FILTERS_REPLACED":
      return {
        ...state,
        filters: action.payload,
      };
    case "FAV_FILTER_SAVED":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
