import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({

  
  controlWrapper: (props: any) => ({
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // background: "rgb(30, 31, 32, 63%);",
    // backdropFilter: "blur(2.5px)",
    color: props?.palette?.dashboard?.white,
    width: "100%",
    padding: "5px 0px 5px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: 0.5,
  }),

  
  bottomIcon: (props: any) => ({
    color: "#999 !important",
    "&:hover":{
      color:"fff !important"
    }
  }),

  
  volueSlider: (props: any) => ({
    width: "10% !important",
  }),
















  fullScreenIconImgStyle: (props: any) => ({
    marginRight: 10,
    cursor: "pointer",
    zIndex: "999"
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
        color: `${props?.palette?.infoDialogue?.whiteColor} !important`,
      },
      "&:first-child.Mui-selected": {
        color: `${props?.palette?.infoDialogue?.whiteColor} !important`,
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      marginLeft: "0px !important",
      width: "30px !important",
      background: `${props?.palette?.infoDialogue?.TabBgColor} !important`,
    },
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

  tripsSection2: (props: any) => ({
    border: `1px solid ${props?.palette?.infoDialogue?.whiteColor}`,
    background: props?.palette?.infoDialogue?.blackShades,
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
    border: `1px solid ${props?.palette?.infoDialogue?.whiteColor}`,
    background: props?.palette?.infoDialogue?.blackShades,
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
    border: `1px solid ${props?.palette?.infoDialogue?.whiteColor}`,
    background: props?.palette?.infoDialogue?.blackShades,
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



  subListSection: (props: any) => ({}),
 

}));

export default useStyles;
