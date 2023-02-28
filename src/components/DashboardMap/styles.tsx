import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

const useStyles = makeStyles({
  dashboardMapContainer: (props: any) => ({
    width: "100%",
    position: "relative",
    height: "calc(100vh - 60px)",
    "& .react-transform-wrapper": {
      height: "calc(100vh - 200px)",
    },
  }),
});
export default useStyles;
