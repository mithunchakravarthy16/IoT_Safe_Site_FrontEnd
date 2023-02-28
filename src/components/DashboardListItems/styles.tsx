import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  listItemContainer: (props: any) => ({}),
  listItemTitle: (props: any) => ({
    // fontWeight: 600,
    // fontSize: 18,
    color: props?.palette?.dashboardList?.darkRedBlack, //darkRedBlack
    marginBottom: 10,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 15,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
  }),
  listItemLocation: (props: any) => ({
    fontWeight: 400,
    fontSize: 16,
    color: props?.palette?.dashboardList?.lightRedBlack, // lightRedBlack
    display: "flex",
    alignItems: "center",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 14,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
  }),
  expandedListItem: (props: any) => ({
    padding: " 15px",
    margin: "17px 0px",
    border: `1px solid ${props?.palette?.dashboard?.grayShade3}`, //lightBlue2
    borderRadius: "7px",
    cursor: "pointer",
    marginRight: 6,
    paddingBottom: 10,
    color: props?.palette?.dashboard?.white,
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 14,
    },
    background: "#324658",
  }),
  collapsedListItem: (props: any) => ({
    padding: " 15px",
    // lineHeight: "35px",
    background: props?.palette?.dashboard?.white,
    margin: "17px 0px",
    border: `1px solid ${props?.palette?.dashboard?.grayShade3}`, //lightBlue2
    borderRadius: "7px",
    cursor: "pointer",
    marginRight: 6,
    paddingBottom: 10,
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 14,
    },
  }),
  locationIconStyle: (props: any) => ({
    marginRight: 10,
  }),
  listItemIconDetails: (props: any) => ({
    display: "flex",
    color: props?.palette?.dashboardList?.black,
    fontWeight: 700,
    fontSize: 12,
    // lineHeight: 2,
    alignItems: "center",
  }),
  listItemIconName: (props: any) => ({
    color: props?.palette?.dashboardList?.darkGrey4, // darkGrey4
    fontSize: "12px",
    // lineHeight: 1,
  }),
  listIemIcon: (props: any) => ({
    marginRight: 15,
    display: "flex",
  }),
  expandedListIconContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0px",
    paddingBottom: 10,
  }),
  selectedButtonStyles: (props: any) => ({
    backgroundColor: props?.palette?.dashboardList?.blue, // blue
    borderRadius: "15px !important",
    fontSize: "12px !important",
    // lineHeight: "16px !important",
    boxShadow: "none !important",
    fontWeight: 700,
    textTransform: "none",
  }),
  listItemFooterStyle: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    lineHeight: 0,
    alignItems: "center",
    fontSize: 14,
    [muiTheme.breakpoints.down(1601)]: {
      fontSize: 13,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
    "& .MuiButton-root": {
      textTransform: "none",
    },
  }),
  listItemTimeStyle: (props: any) => ({
    color: props?.palette?.dashboardList?.darkRedBlack2,
    fontSize: "12px",
    fontWeight: 400,
  }),

  listItemSection: (props: any) => ({
    // width: "22%",
    display: "flex",
    justifyContent: "space-between",
  }),
  listIemDetails: (props: any) => ({
    // width: "22%",
    // display: "flex",
    // justifyContent: "space-between",
  }),
  expandedListHeaderStyle: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  expandedListButtonContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  expandedListButtonStyle: (props: any) => ({
    marginLeft: 10,
  }),
  expandedSubtitle: (props: any) => ({
    color: "#5e5454b0",
    fontSize: "14px",
    fontWeight: 600,
  }),
  lineClass: (props: any) => ({
    borderTop: `0.5px solid ${props?.palette?.dashboard?.grayShade3}`, //lightBlue2
    margin: "10px 0px",
  }),
});
export default useStyles;
