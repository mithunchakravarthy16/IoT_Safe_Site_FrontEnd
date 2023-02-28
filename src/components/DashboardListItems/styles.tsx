import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  listItemContainer: (props: any) => ({
    padding: " 15px",
    lineHeight: "35px",
    background: props?.palette?.dashboardList?.white,
    margin: "17px 0px",
    border: `1px solid ${props?.palette?.dashboardList?.lightBlue2}`, //lightBlue2
    borderRadius: "7px",
    cursor: "pointer",
    fontFamily: `"QualcommNext-Regular"`,
    marginRight: 6,
    paddingBottom: 10,
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 14,
    },
  }),
  listItemTitle: (props: any) => ({
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "22px",
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
    lineHeight: "22px",
    color: props?.palette?.dashboardList?.lightRedBlack, // lightRedBlack
    display: "flex",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 14,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
  }),
  expandedListItem: (props: any) => ({}),
  collapsedListItem: (props: any) => ({}),
  locationIconStyle: (props: any) => ({
    marginRight: 10,
  }),
  listItemIconDetails: (props: any) => ({
    display: "flex",
    color: props?.palette?.dashboardList?.black,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 2,
    alignItems: "center",
  }),
  listItemIconName: (props: any) => ({
    color: props?.palette?.dashboardList?.darkGrey4, // darkGrey4
    fontSize: "12px",
    lineHeight: 1,
  }),
  listIemIcon: (props: any) => ({
    marginRight: 5,
  }),
  expandedListIconContainer: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0px",
    borderBottom: "1px solid #dadcdf",
    paddingBottom: 10,
  }),
  selectedButtonStyles: (props: any) => ({
    backgroundColor: props?.palette?.dashboardList?.blue, // blue
    borderRadius: "15px !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
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
    width: "22%",
  }),
});
export default useStyles;
