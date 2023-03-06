import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

const useStyles = makeStyles({
  alertsContainerMain: (props: any) => ({
    // marginTop: 84
  }),
  [muiTheme.breakpoints.down(801)]: {
    marginTop: 98,
  },
});
export default useStyles;
