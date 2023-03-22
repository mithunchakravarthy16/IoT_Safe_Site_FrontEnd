import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  () => ({
    logoImg: (props: any) => ({
      display: "flex",
      alignItems: "center",
      color: props?.palette?.header?.colorWhite,
      "& :first-child": {
        cursor: "pointer",
        marginRight: "13px",
        width: 212,
        [muiTheme.breakpoints.down(1537)]: {
          width: 212,
        },
        [muiTheme.breakpoints.down(1025)]: {
          width: 212,
        },
      },
      "& span": {
        fontFamily: `'Nunito Sans', sans-serif'`,
        fontWeight: 900,
        fontSize: "18px",
        lineHeight: "25px",
        color: props?.palette?.header?.colorWhite,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      },
    }),
    header: (props: any) => ({
      alignItems: "center",
      background: props?.palette?.login?.adminLogoBg,
      boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.05)",
      zIndex: 1500,
      padding: "11px 16px",
      position: "fixed",
      top: 0,
    }),
    headerRight: (props: any) => ({
      display: "flex",
      justifyContent: "flex-end",
      [muiTheme.breakpoints.down(801)]: {
        position: "absolute",
        top: "6px",
        right: "18px",
      },
    }),
    headerRightLogo: (props: any) => ({
      display: "flex",
      alignItems: "center",
      "& :first-child": {
        marginRight: "32px",
      },
    }),
  }),
  { index: 1 }
);

export default useStyles;
