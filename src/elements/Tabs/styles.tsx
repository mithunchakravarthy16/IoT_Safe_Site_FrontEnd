import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  tabsRoot: {
    "@media (max-height: 650px)": {
      minHeight: "30px",
      height: "30px",
    },
  },
  tabRoot: {
    "@media (max-height: 650px)": {
      minHeight: "30px",
      height: "30px",
    },
  },
  itemCount: {
    fontSize: 13,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 12,
    },
  },
  itemText: {
    fontSize: 13,
    fontWeight: 600,
    lineHeight: "19px",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 13,
      fontWeight: 400,
      lineHeight: "19px",
    },
  },
  tabHeadingText: {
    fontSize: 16,
    fontWeight: 700,
    marginTop: 10,
  },
});
export default useStyles;
