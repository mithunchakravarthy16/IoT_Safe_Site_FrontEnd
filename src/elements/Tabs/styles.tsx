import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  tabsRoot: {
    "@media (max-height: 650px)": {
      minHeight: "30px",
      height: "30px"
    }
  },
  tabRoot: {
    "@media (max-height: 650px)": {
      minHeight: "30px",
      height: "30px"
    }
  },
  itemCount: {
    fontSize: 14,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 12,
    },
  },
  itemText: {
    fontSize: 12,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 10,
    },
  },
});
export default useStyles;
