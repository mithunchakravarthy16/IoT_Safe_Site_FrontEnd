import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({
  iframVideoContainer: (props: any) => ({
    height: "calc(100vh - 355px)",

    // border: "1px solid #fff",
  }),

  reactPlayerSection: (props: any) => ({
    margin: "0 auto",
  }),

  searchClass: (props: any) => ({
    marginTop: "5px",
    border: `1px solid ${props?.palette?.infoDialogueComponent?.lightGray}`,
    borderRadius: 6,

    "& .MuiIconButton-root": {
      marginRight: 7,
    },
  }),

  customNotificationChipTabs: {
    "& .MuiTabs-flexContainer": {
      // borderBottom: "2px solid #3e3e3e",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 12px",
    },
    "& .MuiButtonBase-root": {
      // fontFamily: "QualcommNext-Regular",
      fontSize: "15px !important",
      marginBottom: "-0.5px !important",
      flex: "1 !important",
      textTransform: "none",
      [muiTheme.breakpoints.down(1367)]: {
        minWidth: "75px !important",
      },
    },
    "& .MuiTab-root": {
      padding: "10px 12px",
      "&:first-child": {
        color: "#38BCDB !important",
        marginRight: 12,
        marginBottom: "4px !important",
        border: "1px solid #38BCDB",
      },
      "&:first-child.Mui-selected": {
        color: "#ffffff !important",
        background: "#38BCDB",
      },
      "&:nth-child(2)": {
        color: "#E13827 !important",
        marginRight: 12,
        marginBottom: "4px !important",
        border: "1px solid #E13827",
      },
      "&:nth-child(2).Mui-selected": {
        color: "#ffffff !important",
        background: "#E13827",
      },
      "&:nth-child(3)": {
        color: "#E0791A !important",
        border: "1px solid #E0791A",
      },
      "&:nth-child(3).Mui-selected": {
        color: "#ffffff !important",
        background: "#E0791A",
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "100% !important",
      background: "#2B2B2B",
      display: "none",
    },
  },

  notificationHeading: (props: any) => ({
    display: "flex",
    padding: "26px",
    color: props?.palette?.infoDialogueComponent?.colorWhite,
    minHeight: "66px",
    // fontFamily: `"QualcommNext-Regular"`,
    fontWeight: 500,
    fontSize: 22,
    [muiTheme.breakpoints.down(1601)]: {
      fontSize: 16,
      minHeight: 50,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 16,
      minHeight: 50,
    },
  }),

  notificationSearchHeading: (props: any) => ({
    padding: "10px 0px 10px 20px",
    minHeight: "76px",
  }),

  notificationSearchIcon: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    cursor: "pointer",
  }),

  notificationTabHeading: (props: any) => ({
    padding: 0,
  }),

  notificationList: (props: any) => ({
    color: props?.palette?.infoDialogueComponent?.colorWhite,
    height: "calc(100vh - 570px)",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgb(97 97 97 / 90%)",
      outline: "1px solid slategrey",
      borderRadius: 5,
    },
    [muiTheme.breakpoints.down(5761)]: {
      height: "calc(100vh - 2844px) !important",
    },
    [muiTheme.breakpoints.down(5121)]: {
      height: "calc(100vh - 2301px) !important",
    },
    [muiTheme.breakpoints.down(3841)]: {
      height: "calc(100vh - 1792px) !important",
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: "calc(100vh - 1924px) !important",
    },
    [muiTheme.breakpoints.down(2733)]: {
      height: "calc(100vh - 1680px) !important",
    },
    [muiTheme.breakpoints.down(2561)]: {
      height: "calc(100vh - 1209px) !important",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "calc(100vh - 1170px) !important",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: "calc(100vh - 405px) !important",
    },
    [muiTheme.breakpoints.down(1681)]: {
      height: "calc(100vh - 492px) !important",
    },
    [muiTheme.breakpoints.down(1601)]: {
      height: "calc(100vh - 405px) !important",
    },
    [muiTheme.breakpoints.down(1537)]: {
      height: "calc(100vh - 405px) !important",
    },
    [muiTheme.breakpoints.down(1401)]: {
      height: "calc(100vh - 492px) !important",
    },
    [muiTheme.breakpoints.down(1367)]: {
      height: "calc(100vh - 402px) !important",
    },
    [muiTheme.breakpoints.down(1281)]: {
      height: "calc(100vh - 466px) !important",
    },
    [muiTheme.breakpoints.down(1181)]: {
      height: "calc(100vh - 398px) !important",
    },
    // [theme.breakpoints.down(1025)]: {
    //   padding: "10px 20px 30px 20px",
    // },
    // [theme.breakpoints.down(1537)]: {
    //   padding: "10px 20px 30px 20px",
    // },
    // [theme.breakpoints.up(1537)]: {
    //   padding: "10px 20px 30px 20px",
    // },
  }),

  customNotificationTabs: (props: any) => ({
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
        color: "#fff !important",
      },
      "&:first-child.Mui-selected": {
        color: "#fff !important",
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      marginLeft: "0px !important",
      width: "30px !important",
      background: "#39B586 !important",
    },
  }),

  chipButtonSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }),
  headerStyle: (props: any) => ({
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "27px",
    display: "flex",
    justifyContent: "space-between",
    // textTransform: "uppercase",
    // marginBottom: 30,
    [muiTheme.breakpoints.down(1281)]: {
      marginBottom: 14,
    },
  }),

  headerRightContentStyle: (props: any) => ({
    marginRight: "20px",
  }),

  tripsElementSection: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    width: "50%",

    padding: "40px 40px 20px 40px",
    // borderRight: `1px solid ${props?.palette?.infoDialogueComponent?.colorWhite}`,
  }),

  infoListItem: (props: any) => ({
    borderRadius: 2,
    padding: "8px 0px 2px 8px",
    flex: 1,
  }),

  tripsSection2: (props: any) => ({
    border: `1px solid #fff`,
    background: props?.palette?.infoDialogueComponent?.blackShades,
    borderRadius: 2,
    margin: 5,
    // height: "230px",
    // overflow: "auto",
    position: "relative",
    display: "flex",

    flexDirection: "column",
    // boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
    padding: 12,

    flex: 1,
  }),
  tripsSection1: (props: any) => ({
    border: `1px solid #fff`,
    background: props?.palette?.infoDialogueComponent?.blackShades,
    borderRadius: 2,
    margin: 5,
    // height: "230px",
    // overflow: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",

    // boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
    padding: 12,

    flex: 1,
  }),

  tripsSection: (props: any) => ({
    border: `1px solid #fff`,
    background: props?.palette?.infoDialogueComponent?.blackShades,
    borderRadius: 2,
    margin: 5,
    // height: "230px",
    // overflow: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
    padding: 12,

    flex: 1,
  }),

  incomeCurrentSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5px",
    width: "100%",
    [muiTheme.breakpoints.down(1281)]: {
      height: "25px",
    },
  }),

  incomeText: (props: any) => ({
    // fontfamily: `"QualcommNext-Regular"`,
    fontSize: 16,
    lineHeight: "22px",
    // color: theme.palette.blue,
    marginRight: 16,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 13,
    },
  }),

  violationSection: (props: any) => ({
    background: props?.palette?.infoDialogueComponent?.blackShades,
    border: " 0.5px solid #E0DEDE",
    borderRadius: "2px",
    height: "calc(100vh - 400px) !important",
    overflow: "auto",
    margin: "8px",
    [muiTheme.breakpoints.down(5761)]: {
      height: "calc(100vh - 2700px) !important",
    },
    [muiTheme.breakpoints.down(5121)]: {
      height: "calc(100vh - 2159px) !important",
    },
    [muiTheme.breakpoints.down(3841)]: {
      height: "calc(100vh - 1622px) !important",
    },
    [muiTheme.breakpoints.down(3073)]: {
      height: "calc(100vh - 1764px) !important",
    },
    [muiTheme.breakpoints.down(2733)]: {
      height: "calc(100vh - 1509px) !important",
    },
    [muiTheme.breakpoints.down(2561)]: {
      height: "calc(100vh - 1060px) !important",
    },
    [muiTheme.breakpoints.down(2049)]: {
      height: "calc(100vh - 1002px) !important",
    },
    [muiTheme.breakpoints.down(1921)]: {
      height: "calc(100vh - 581px) !important",
    },
    [muiTheme.breakpoints.down(1681)]: {
      height: "calc(100vh - 492px) !important",
    },
    [muiTheme.breakpoints.down(1601)]: {
      height: "calc(100vh - 405px) !important",
    },
    [muiTheme.breakpoints.down(1537)]: {
      height: "calc(100vh - 422px) !important",
    },
    [muiTheme.breakpoints.down(1401)]: {
      height: "calc(100vh - 492px) !important",
    },
    [muiTheme.breakpoints.down(1367)]: {
      height: "calc(100vh - 402px) !important",
    },
    [muiTheme.breakpoints.down(1281)]: {
      height: "calc(100vh - 466px) !important",
    },
    [muiTheme.breakpoints.down(1181)]: {
      height: "calc(100vh - 398px) !important",
    },
    "@media (max-height: 1281px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 740px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 906px) !important",
      },
    },
    "@media (max-height: 1201px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 659px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 806px) !important",
      },
    },
    "@media (max-width: 2000px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 742px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 890px) !important",
      },
    },
    "@media (max-height: 1121px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 584px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 752px) !important",
      },
    },
    "@media (max-height: 1081px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 543px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 682px) !important",
      },
    },

    "@media (max-height: 969px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 437px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 577px) !important",
      },
    },
    "@media (max-height: 961px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 473px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 615px) !important",
      },
    },
    "@media (max-height: 900px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 424px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 574px) !important",
      },
    },
    "@media (max-height: 881px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 396px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 560px) !important",
      },
    },
    "@media (max-height: 825px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 428px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 574px) !important",
      },
    },
    "@media (max-height: 820px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 383px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 530px) !important",
      },
    },
    "@media (max-height: 801px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 383px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 530px) !important",
      },
    },
    "@media (max-height: 768px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 234px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 380px) !important",
      },
    },
    // "@media (max-height: 633px)": {
    //   "&.height-adjustment": {
    //     height: "calc(100vh - 346px) !important",
    //   },
    //   "& .notificationListHeight": {
    //     height: "calc(100vh - 486px) !important",
    //   },
    // },
    "@media (max-height: 600px)": {
      "&.height-adjustment": {
        height: "calc(100vh - 346px) !important",
      },
      "& .notificationListHeight": {
        height: "calc(100vh - 486px) !important",
      },
    },
  }),
  subListRow: (props: any) => ({
    marginBottom: "12px !important",
    // [muiTheme.breakpoints.down(1350)]: {
    //   marginBottom: "2px !important",
    // },
    "& :last-child": {
      marginRight: 0,
    },
  }),
  subListRow1: (props: any) => ({
    marginBottom: "12px !important",
    marginRight: "20px !important",
    display: "flex",
    justifyContent: "flex-end",
  }),

  alertRightIcons: (props: any) => ({
    marginRight: "15px",
    // justifyContent: "flex-end",
  }),

  subListSection: (props: any) => ({}),
  infoVideoTitle: (props: any) => ({
    marginLeft: 8,
  }),
  tripsElementListSection: (props: any) => ({
    height: "calc(100vh - 415px)",
    overflow: "auto",
  }),
  videoMapSection: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 355px)",
  }),
  infoMainListClassName: (props: any) => ({
    height: "100%",

    borderRadius: 2,
    margin: "8px 0px 2px 8px",
    flex: 1,
  }),
  infoMainListClassNameOne: (props: any) => ({
    borderRadius: 2,
    margin: "8px 0px 2px 8px",
    flex: 1,
    overflow: "hidden",
  }),
  infoDialogClassName: (props: any) => ({
    display: "flex",

    margin: 6,
    borderRadius: 4,
  }),
  pastViolationsClass: (props: any) => ({
    display: "flex",

    margin: 16,
    borderRadius: 4,
  }),
}));

export default useStyles;
