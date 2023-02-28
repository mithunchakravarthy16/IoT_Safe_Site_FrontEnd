import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

const useStyles = makeStyles({
  infoIconContainer: (props: any) => ({
    position: "absolute",
    bottom: 0,
    background: props?.palette?.dashboardList?.darkBlackRgba1,
    margin: "0px 10px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    width: "calc(100% - 20px)",
    backdropFilter: "blur(7.5px)",
    [muiTheme.breakpoints.down(801)]: {
      overflow: " auto",
    },
  }),

  dashboardMapContainer: (props: any) => ({
    width: "100%",
    position: "relative",
    height: "calc(100vh - 114px)",
    "& .react-transform-wrapper": {
      height: "calc(100vh - 200px)",
    },
  }),
});
export default useStyles;
