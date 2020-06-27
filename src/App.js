import React from "react";
import "./App.css";
import useCsvHandler from "./utils/csvHandler";
import DataGrid from "./components/DataGrid";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import { reducer, initialState } from "./reducers/appReducer";
import { theme } from "./utils/theme";
import { AddNewShipment } from "./components/AddNewShipment";

export const DataContext = React.createContext();

export const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  useCsvHandler({ state, dispatch });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <Layout>
          <div className="App">
            <DataGrid />
            <AddNewShipment />
          </div>
        </Layout>
      </ThemeProvider>
    </DataContext.Provider>
  );
};

export default App;
