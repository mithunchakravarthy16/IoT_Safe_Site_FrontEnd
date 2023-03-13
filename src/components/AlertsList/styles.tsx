import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  alertsRightPanel: (props: any) => ({
    background: props?.palette?.dashboard?.whiteGrayShade,
    padding: "26px 12px 13px 17px",
    borderLeft: `2px solid ${props?.palette?.dashboard?.lightGrey2}`,
    height: "calc(100vh - 124px)",
  }),
  dashboarListTitle: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 3px",
    borderBottom: `1px solid ${props?.palette?.dashboard?.lightBlue4}`,
    height: 53,
    alignItems: "center",
  }),
  listTitleName: (props: any) => ({
    fontSize: 20,
    color: props?.palette?.dashboard?.darkBlue2,
    width: "85%",
    fontWeight: 600,
    lineHeight: "24px",
    textTransform: "capitalize",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 18,
    },
  }),
  listSearch: (props: any) => ({
    cursor: "pointer",
  }),
  dashboardListSection: (props: any) => ({
    height: "calc(100vh - 263px)",
    overflow: "auto",
    marginRight: "-12px",
    marginTop: 10,
  }),
  searchClass: (props: any) => ({
    border: `1px solid ${props?.palette?.dashboard?.lightGrey}`,
    background: props?.palette?.dashboardList?.white,
    color: props?.palette?.dashboardList?.lightGrey3,
    borderRadius: 6,
    height: "40px",
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
    "& .MuiInputBase-root": {
      // fontWeight: 500,
    },
  }),

  noResultStyle: (props: any) => ({
    margin: 10,
  }),

  customNotificationTabs: (props: any) => ({
    "& .MuiTabs-flexContainer": {
      // borderBottom: "2px solid #3e3e3e",
      justifyContent: "space-between",
    },
    "& .MuiButtonBase-root": {
      fontSize: "14px !important",
      // marginBottom: "-0.5px !important",
      flex: "1 !important",
      textTransform: "none",
      fontWeight: 400,
      fontFamily: `'Nunito Sans', sans-serif !important'`,
    },
    "& .MuiTab-root": {
      padding: "10px 12px",
      [muiTheme.breakpoints.down(1281)]: {
        padding: "6px 12px",
      },
      "&:first-child": {
        color: `${props?.palette?.dashboard?.skyBlueColor} !important`,
        margin: "15px 20px 0px 0px",
        border: `1px solid ${props?.palette?.dashboard?.skyBlueColor}`,
        [muiTheme.breakpoints.down(1281)]: {
          fontSize: 14,
          margin: "10px 10px 0px 0px",
        },
      },
      "&:first-child.Mui-selected": {
        color: `${props?.palette?.dashboard?.white} !important`,
        background: props?.palette?.dashboard?.skyBlueColor,
      },
      "&:nth-child(2)": {
        color: `${props?.palette?.dashboard?.darkRedColor} !important`,
        margin: "15px 20px 0px 0px",
        border: `1px solid ${props?.palette?.dashboard?.darkRedColor}`,
        [muiTheme.breakpoints.down(1281)]: {
          fontSize: 14,
          margin: "10px 10px 0px 0px",
        },
      },
      "&:nth-child(2).Mui-selected": {
        color: `${props?.palette?.dashboard?.white} !important`,
        background: props?.palette?.dashboard?.darkRedColor,
      },
      "&:nth-child(3)": {
        color: `${props?.palette?.dashboard?.goldenOrangeColor} !important`,
        margin: "15px 0px 0px 0px",
        border: `1px solid ${props?.palette?.dashboard?.goldenOrangeColor}`,
      },
      "&:nth-child(3).Mui-selected": {
        color: `${props?.palette?.dashboard?.white} !important`,
        background: props?.palette?.dashboard?.goldenOrangeColor,
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "100% !important",
      background: props?.palette?.dashboard?.goldenOrangeColor,
      display: "none",
    },
  }),
});
export default useStyles;
