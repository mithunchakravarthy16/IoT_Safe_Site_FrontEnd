import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(
  () => ({
    root: (props: any) => ({
      flexGrow: 1,
    }),

    logoImg: (props: any) => ({
      display: "flex",
      alignItems: "center",
      color: props?.palette?.header?.colorWhite,
      "& :first-child": {
        cursor: "pointer",
        marginRight: "13px",
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
      background: props?.palette?.header?.headerBg,
      boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.05)",
      zIndex: 1500,
      padding: "16px",
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
    avatharSection: (props: any) => ({
      display: "flex",
      alignItems: "center",
      marginRight: 2,
      color: `${props?.palette?.header?.colorWhite}!important`,
      "& .MuiIconButton-root": {
        zIndex: 1500,
        color: `${props?.palette?.header?.colorWhite}!important`,
      },
    }),
    avatharBackground: (props: any) => ({
      backgroundColor: `${props?.palette?.header?.avatarBgColorViolet}!important`,
      fontFamily: `'Nunito Sans', sans-serif !important'`,
      lineHeight: "19px",
      fontSize: "16px !important",
    }),
    logoSection: (props: any) => ({
      display: "flex",
      alignItems: "center",
    }),

    avatharName: (props: any) => ({
      marginLeft: 20,
      marginRight: 26,
      "& p": {
        margin: 0,
      },
      "& :first-child": {
        fontFamily: `'Nunito Sans', sans-serif'`,
        fontWeight: 500,
        lineHeight: "17px",
        fontSize: "14px",
        color: props?.palette?.header?.colorWhite,
        textTransform: "capitalize",
        marginBottom: 3,
        [muiTheme.breakpoints.down(1025)]: {
          fontSize: "11px",
        },
      },
      "& :last-child": {
        fontFamily: `'Nunito Sans', sans-serif'`,
        fontSize: "12px",
        lineHeight: "14px",
        fontWeight: 400,
        color: props?.palette?.header?.colorWhite,
        textTransform: "capitalize",
        [muiTheme.breakpoints.down(1025)]: {
          fontSize: "11px",
        },
      },
    }),
    avatharIcon: (props: any) => ({
      "&.MuiIconButton-root": {
        color: props?.palette?.header?.colorWhite,
        left: "0px",
      },
    }),
    logoutSection: (props: any) => ({
      display: "flex",
      alignItems: "center",
    }),
    logoutText: (props: any) => ({
      fontSize: "14px !important",
      fontWeight: "700 !important",
      color: props?.palette?.header?.darkGrayLogoutText,
    }),
    customMenu: (props: any) => ({
      zIndex: "1500 !important",
      "& .MuiMenu-list": {
        background: `${props?.palette?.header?.colorWhite}!important`,
        marginTop: "10px !important",
        border: `1px solid ${props?.palette?.header?.lightGrayLogoutText} !important`,
        borderRadius: "4px !important",
        marginLeft: 26,
      },
      "& .MuiPaper-root": {
        background: "none !important",
        boxShadow: "none !important",
        minWidth: 200,
      },
      "& .MuiList-root": {
        "&::before": {
          width: 10,
          height: 10,
          content: '""',
          transform: "rotate(225deg)",
          boxSizing: "border-box",
          backgroundColor: props?.palette?.header?.colorWhite,
          position: "absolute",
          right: 17,
          top: -6,
          border: `1px solid ${props?.palette?.header?.lightGrayLogoutText}`,
          borderStyle: "solid",
          borderWidth: "0px 1px 1px 0px",
        },
      },
      "& .MuiButtonBase-root": {
        padding: "6px 14px !important",
        "&:hover": {
          background: "transparent !important",
        },
      },
    }),

    tabStyle: (props: any) => ({
      "& .MuiTab-root": {
        fontSize: "18px",
        color: props?.palette?.header?.lightSkyBlue1,
        fontFamily: `'Nunito Sans', sans-serif'`,
        fontWeight: " 500",
        lineHeight: "60px",
        textTransform: "capitalize",
        flex: 1,
        [muiTheme.breakpoints.down(1537)]: {
          fontSize: "12px",
        },
        [muiTheme.breakpoints.down(1281)]: {
          fontSize: "12px",
        },
        [muiTheme.breakpoints.down(1025)]: {
          fontSize: "11px",
        },
        [muiTheme.breakpoints.down(801)]: {
          fontSize: "10px",
          lineHeight: "15px !important",
        },
      },
      "& .MuiTab-root.Mui-selected": {
        color: props?.palette?.header?.colorWhite,
      },
      "& .MuiTabs-indicator": {
        backgroundColor: props?.palette?.header?.indicatorColor,
        borderRadius: "50px 50px 0px 0px !important",
        height: 5,
        width: "46px !important",
        position: "absolute",
        bottom: 0,
        transform: "translate(55px, 0px) !important",
        [muiTheme.breakpoints.down(5761)]: {
          transform: "translate(158px, 0px) !important",
        },
        [muiTheme.breakpoints.down(3841)]: {
          transform: "translate(136px, 0px) !important",
        },
        [muiTheme.breakpoints.down(3073)]: {
          transform: "translate(103px, 0px) !important",
        },
        [muiTheme.breakpoints.down(2733)]: {
          transform: "translate(92px, 0px) !important",
        },
        [muiTheme.breakpoints.down(2561)]: {
          transform: "translate(82px, 0px) !important",
        },
        [muiTheme.breakpoints.down(2049)]: {
          transform: "translate(60px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1921)]: {
          transform: "translate(56px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1793)]: {
          transform: "translate(51px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1681)]: {
          transform: "translate(47px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1601)]: {
          transform: "translate(43px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1537)]: {
          transform: "translate(41px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1401)]: {
          transform: "translate(35px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1281)]: {
          transform: "translate(30px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1181)]: {
          transform: "translate(48px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1153)]: {
          transform: "translate(46px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1025)]: {
          transform: "translate(38px, 0px) !important",
        },
        [muiTheme.breakpoints.down(801)]: {
          transform: "translate(75px, 0px) !important",
        },
      },
    }),
    personIconClass: (props: any) => ({
      marginRight: "4px",
    }),
  }),
  { index: 1 }
);

export default useStyles;
