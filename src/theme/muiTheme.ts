import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import typography from "./typography";
import palette from "./palette";


const muiTheme = createTheme();

muiTheme.typography = { ...muiTheme.typography, ...typography };

muiTheme.breakpoints = { ...muiTheme.breakpoints, ...breakpoints };

muiTheme.palette = { ...muiTheme.palette, ...palette };


export default muiTheme;
