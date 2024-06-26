import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  alertSubListRow1: (props: any) => ({
    marginBottom: "12px !important",
    marginTop: "20px !important",

    display: "flex",
    justifyContent: "space-between",
  }),

  alertCustomNotificationTabs: (props: any) => ({
    "& .MuiTabs-flexContainer": {
      // borderBottom: "2px solid #3e3e3e",
    },

    "& .MuiButtonBase-root": {
      marginRight: "0 !important",
      maxWidth: "300px !important",
      textTransform: "none",
    },

    "& .MuiTab-root": {
      // fontFamily: `"QualcommNext-Regular"`,
      fontSize: "20px",
      lineHeight: "24px",
      padding: 0,
      alignItems: "flex-start",
      // [muiTheme.breakpoints.down(1281)]: {
      //   fontSize: 14,
      // },
      "&:first-child": {
        marginRight: "0 !important",
        maxWidth: "600px !important",
        color: `${props?.palette?.alertsInfoContainer?.colorWhite} !important`,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      },
      "&:first-child.Mui-selected": {
        color: `${props?.palette?.alertsInfoContainer?.colorWhite} !important`,
        background: props?.palette?.alertsInfoContainer?.blackShades1,
      },
      "&:nth-child(2)": {
        marginRight: "0 !important",
        maxWidth: "600px !important",
        color: `${props?.palette?.alertsInfoContainer?.colorWhite} !important`,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      },
      "&:nth-child(2).Mui-selected": {
        color: `${props?.palette?.alertsInfoContainer?.colorWhite} !important`,
        background: props?.palette?.alertsInfoContainer?.blackShades1,
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      marginLeft: "10%",
      width: "30% !important",
      background: `${props?.palette?.alertsInfoContainer?.darkGreenShade2} !important`,
      height: "2px",
      border: `1px solid ${props?.palette?.alertsInfoContainer?.darkGreenShade2}`,
      borderRadius: "1.5px",
    },
  }),

  alertSubListRightSide: (props: any) => ({
    display: "flex",
    marginRight: "10px",
    // justifyContent: "flex-end",
  }),

  alertRightIcons: (props: any) => ({
    cursor: "pointer",

    marginRight: "15px",
    // justifyContent: "flex-end",
  }),

  iframVideoContainer: (props: any) => ({
    height: "calc(100vh - 355px)",

    // border: "1px solid #fff",
  }),

  carImageClass: (props: any) => ({
    height: "calc(100vh - 350px)",
    objectFit: "cover",
  }),
});
export default useStyles;
