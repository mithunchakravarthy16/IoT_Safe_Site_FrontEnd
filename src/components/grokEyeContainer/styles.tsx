import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

const useStyles = makeStyles({
  alertsContainerMain: (props: any) => ({ marginTop: 84 }),
  infoIconContainer: (props: any) => ({
    position: "absolute",
    bottom: 0,
    background: props?.palette?.dashboard?.darkBlackRgba1,
    margin: "10px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    width: "calc(100% - 20px)",
    backdropFilter: "blur(7.5px)",
    [muiTheme.breakpoints.down(801)]: {
      overflow: " auto",
    },
  }),
  dragListSytle: (props: any) => ({ margin: "10px 0px 0px 10px" }),

  floorMapContainerStyle: (props: any) => ({
    width: "100%",
    height: "calc(100vh - 114px)",
    position: "relative",
    "& .react-transform-wrapper": {
      height: "calc(100vh - 200px)",
    },
  }),
});
export default useStyles;
