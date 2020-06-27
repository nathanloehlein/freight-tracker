import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, indigo } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: deepOrange[500],
    },
  },
});

export default theme;
