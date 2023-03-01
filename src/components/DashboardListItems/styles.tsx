import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  listItemContainer: (props: any) => ({}),
  listItemTitle: (props: any) => ({
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 10,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 16,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
  }),
  listItemLocation: (props: any) => ({
    fontWeight: 400,
    fontSize: 14,
    color: props?.palette?.dashboard?.blueGrayNewShade, // "rgba(134, 147, 168, 1)"
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 14,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
  }),
  listItemTower: (props: any) => ({
    fontWeight: 400,
    fontSize: 14,
    // color: props?.palette?.dashboard?.blueGrayNewShade,
    display: "flex",
    alignItems: "center",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 14,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
  }),

  listItemLocationAreaSection: (props: any) => ({
    display: "flex",
    alignItems: "center",
  }),
  expandedListItem: (props: any) => ({
    padding: "13px 13px 9px",
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
    background: props?.palette?.dashboard?.darkBlueGrayShade,
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
    fontSize: 14,
    marginBottom: 5,
    // lineHeight: 2,
    alignItems: "center",
  }),
  listItemIconName: (props: any) => ({
    color: props?.palette?.dashboard?.blueGrayNewShade,
    fontSize: "14px",
    letterSpacing: 0.35,
    // lineHeight: 1,
  }),
  listIemIcon: (props: any) => ({
    marginRight: 10,
    display: "flex",
  }),
  expandedListIconContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0px",
    paddingBottom: 10,
  }),
  selectedButtonStyles: (props: any) => ({
    // backgroundColor: props?.palette?.dashboardList?.blue, // blue
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
    margin: 0,
  }),
  expandedListButtonStyle: (props: any) => ({
    marginLeft: 5,
  }),
  expandedSubtitle: (props: any) => ({
    fontSize: "14px",
    fontWeight: 600,
  }),
  lineClass: (props: any) => ({
    borderTop: `0.5px solid ${props?.palette?.dashboard?.grayShade3}`, //lightBlue2
    margin: "10px 0px",
  }),
  spanTextClass: (props: any) => ({
    color: props?.palette?.dashboard?.white,
  }),
  spanTextValue: (props: any) => ({
    margin: "0px 10px",
    background: props?.palette?.dashboard?.paleGreenShade,
    borderRadius: 40,
    padding: "3px 6px",
    color: props?.palette?.dashboard?.black,
    fontSize: 14,
    fontWeight: 800,
  }),
  infoIconListContainer: (props: any) => ({
    margin: 5,
    borderRadius: 7,
    padding: 15,
    background: props?.palette?.dashboard?.darkBlueBlackShade2,
    display: "flex",
    justifyContent: "space-between",
  }),
  itemIconValueStyle: (props: any) => ({
    display: "flex",
  }),

  itemValueStyle: (props: any) => ({
    color: props?.palette?.dashboard?.white,
    fontSize: 14,
    fontWeight: 600,
    marginLeft: 5,
  }),
  itemNameStyle: (props: any) => ({
    color: props?.palette?.dashboard?.lightGrey,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0.5,
  }),
});
export default useStyles;
