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
      background: props?.palette?.header?.headerBg,
      boxShadow: "0px 4px 4px 3px rgba(0, 0, 0, 0.05)",
      zIndex: 1500,
      padding: "0 16px",
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
      backgroundColor: `${props?.palette?.header?.darkGreenShade2}!important`,
      fontFamily: `'Nunito Sans', sans-serif !important'`,
      lineHeight: "19px",
      fontSize: "18px !important",
      "&.MuiAvatar-root": {
        borderRadius: "30%",
      },
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
        lineHeight: "17px",
        fontSize: "14px",
        color: props?.palette?.header?.white,
        textTransform: "capitalize",
        marginBottom: 5,
        [muiTheme.breakpoints.down(1025)]: {
          fontSize: "11px",
        },
      },
      "& :last-child": {
        fontFamily: `'Nunito Sans', sans-serif'`,
        fontSize: "12px",
        lineHeight: "14px",
        color: props?.palette?.header?.white,
        textTransform: "capitalize",
        [muiTheme.breakpoints.down(1025)]: {
          fontSize: "11px",
        },
      },
    }),
    avatharIcon: (props: any) => ({
      cursor: "pointer",
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
        background: `${props?.palette?.header?.lightGrayWhiteShade}!important`,
        marginTop: "22px !important",
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
          backgroundColor: props?.palette?.header?.lightGrayWhiteShade,
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
        fontSize: "16px",
        color: props?.palette?.header?.lightSkyBlue1,
        fontFamily: `'Nunito Sans', sans-serif'`,
        fontWeight: " 500",
        // lineHeight: "60px",
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
      },
    }),

    customNotificationTabs: (props: any) => ({
      "& .MuiTabs-flexContainer": {
        // borderBottom: "2px solid #3e3e3e",
        justifyContent: "space-between",
        position: "relative",
      },
      "& .MuiTabs-root": {
        minHeight: "84px !important",
      },
      "& .MuiButtonBase-root": {
        fontSize: "15px !important",
        // marginBottom: "-0.5px !important",
        flex: "1 !important",
        textTransform: "none",
        marginTop: "14px",
        lineHeight: "18px",
      },
      "& .MuiTab-root": {
        padding: 0,
        [muiTheme.breakpoints.down(1281)]: {
          padding: "0px 12px",
        },
        "&:first-child": {
          // margin: "20px 10px 0px 0px",
          // border: `1px solid ${props?.palette?.dashboard?.lightGrayWhiteShade}`,
          // borderRadius: "5px 5px 0px 0px",
          // fontSize: 18,
          // background: props?.palette?.dashboard?.lightGrayWhiteShade,
          color: `${props?.palette?.dashboard?.lightBlueGrayShade} !important`,
        },
        "&:first-child.Mui-selected": {
          color: `${props?.palette?.dashboard?.darkGreenShade} !important`,
          filter: `drop-shadow(0px 0px 14px ${props?.palette?.dashboard?.darkGreenShade} )`,
          // background: props?.palette?.dashboard?.darkBlueBlackShade,
          // borderBottom: `5px solid ${props?.palette?.dashboard?.darkGreenShade}`,
          // fontSize: 14,
        },
        "&:nth-child(2)": {
          // margin: "20px 10px 0px 0px",
          // border: `1px solid ${props?.palette?.dashboard?.lightGrayWhiteShade}`,
          // borderRadius: "5px 5px 0px 0px",
          // fontSize: 18,
          // background: props?.palette?.dashboard?.lightGrayWhiteShade,
          color: `${props?.palette?.dashboard?.lightBlueGrayShade} !important`,
        },
        "&:nth-child(2).Mui-selected": {
          color: `${props?.palette?.dashboard?.darkGreenShade} !important`,
          filter: `drop-shadow(0px 0px 14px ${props?.palette?.dashboard?.darkGreenShade} )`,
          // background: props?.palette?.dashboard?.darkBlueBlackShade,
          // borderBottom: `5px solid ${props?.palette?.dashboard?.darkGreenShade}`,
          // fontSize: 14,
        },
        "&:nth-child(3)": {
          color: `${props?.palette?.dashboard?.lightBlueGrayShade} !important`,
          // margin: "20px 0px 0px 0px",
          // border: `1px solid ${props?.palette?.dashboard?.lightGrayWhiteShade}`,
          // borderRadius: "5px 5px 0px 0px",
          // fontSize: 18,
          // background: props?.palette?.dashboard?.lightGrayWhiteShade,
        },
        "&:nth-child(3).Mui-selected": {
          color: `${props?.palette?.dashboard?.darkGreenShade} !important`,
          filter: `drop-shadow(0px 0px 14px ${props?.palette?.dashboard?.darkGreenShade} )`,
          // background: props?.palette?.dashboard?.darkBlueBlackShade,
          // borderBottom: `5px solid ${props?.palette?.dashboard?.darkGreenShade}`,
          // fontSize: 14,
        },
      },
      "& .MuiTabs-root .MuiTabs-indicator": {
        // width: "100% !important",
        // background: "#2B2B2B",
        backgroundColor: props?.palette?.dashboard?.darkGreenShade,
        borderRadius: "50px 50px 0px 0px !important",
        height: 5,
        position: "absolute",
        bottom: 0,
        transform: "translate(69px, 0px) !important",
        margin: "0px 0px 0px 15px",
        [muiTheme.breakpoints.down(5761)]: {
          transform: "translate(145px, 0px) !important",
        },
        [muiTheme.breakpoints.down(3841)]: {
          transform: "translate(145px, 0px) !important",
        },
        [muiTheme.breakpoints.down(3073)]: {
          transform: "translate(130px, 0px) !important",
        },
        [muiTheme.breakpoints.down(2733)]: {
          transform: "translate(115px, 0px) !important",
        },
        [muiTheme.breakpoints.down(2561)]: {
          transform: "translate(102px, 0px) !important",
        },
        [muiTheme.breakpoints.down(2049)]: {
          transform: "translate(73px, 0px) !important",
        },
        [muiTheme.breakpoints.down(2001)]: {
          transform: "translate(72px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1921)]: {
          transform: "translate(66px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1874)]: {
          transform: "translate(62px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1793)]: {
          transform: "translate(57px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1681)]: {
          transform: "translate(56px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1601)]: {
          transform: "translate(51px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1537)]: {
          transform: "translate(44px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1401)]: {
          transform: "translate(35px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1281)]: {
          transform: "translate(30px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1181)]: {
          transform: "translate(57px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1153)]: {
          transform: "translate(56px, 0px) !important",
        },
        [muiTheme.breakpoints.down(1025)]: {
          transform: "translate(42px, 0px) !important",
        },
        [muiTheme.breakpoints.down(811)]: {
          transform: "translate(90px, 0px) !important",
        },
        [muiTheme.breakpoints.down(769)]: {
          transform: "translate(87px, 0px) !important",
        },
        [muiTheme.breakpoints.down(601)]: {
          transform: "translate(57px, 0px) !important",
        },
      },
    }),
    personIconClass: (props: any) => ({
      marginRight: "4px",
    }),

    avatharUserName: (props: any) => ({
      fontWeight: 800,
      letterSpacing: 0.5,
    }),
    avatharUserRole: (props: any) => ({
      fontWeight: 500,
      letterSpacing: 0.5,
    }),
  }),
  { index: 1 }
);

export default useStyles;
