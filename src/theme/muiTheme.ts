import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import typography from "./typography";

const muiTheme = createTheme();
muiTheme.breakpoints = { ...muiTheme.breakpoints, ...breakpoints };
muiTheme.typography = { ...muiTheme.typography, ...typography };

export default muiTheme;
