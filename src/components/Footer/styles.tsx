import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  () => ({
    footer: (props: any) => ({
      background: props?.palette?.footer?.footerBg,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
      height: "35px",
      position: "fixed",
      bottom: 0,
      [muiTheme.breakpoints.down(801)]: {
        bottom: "inherit",
      },
    }),
    copyRights: (props: any) => ({
      color: props?.palette?.login?.colorBlack,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& span": {
        fontFamily: `'Nunito Sans', sans-serif !important'`,
        fontWeight: " 500",
        fontSize: "12px",
        lineHeight: "18px",
        [muiTheme.breakpoints.down(1181)]: {
          fontSize: "10px",
          lineHeight: "14px",
        },
      },
      "& img": {
        margin: "0 8px",
        width: "80px",
        // [muiTheme.breakpoints.down(1281)]: {
        //   width: "60px",
        // },
        // [muiTheme.breakpoints.down(1181)]: {
        //   width: "50px",
        // },
      },
    }),
  }),
  { index: 1 }
);

export default useStyles;
