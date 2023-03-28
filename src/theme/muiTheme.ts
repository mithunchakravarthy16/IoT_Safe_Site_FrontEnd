import { createTheme } from "@mui/material/styles";

import breakpoints from "./breakpoints";

import typography from "./typography";




const muiTheme = createTheme();

muiTheme.typography = { ...muiTheme.typography, ...typography };

muiTheme.breakpoints = { ...muiTheme.breakpoints, ...breakpoints };




export default muiTheme;
