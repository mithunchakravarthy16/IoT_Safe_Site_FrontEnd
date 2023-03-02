import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  listItemContainer: (props: any) => ({
    padding: " 15px",
    // lineHeight: "35px",
    background: props?.palette?.dashboard?.white,
    margin: "17px 0px",
    border: `1px solid ${props?.palette?.dashboard?.lightBlue2}`, //lightBlue2
    borderRadius: "7px",
    cursor: "pointer",
    marginRight: 6,
    paddingBottom: 10,
  }),
  listItemTitle: (props: any) => ({
    fontWeight: 600,
    fontSize: 18,
    // lineHeight: "22px",
    color: props?.palette?.dashboard?.darkRedBlack, //darkRedBlack
    marginBottom: 5,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 15,
    },
  }),
  listItemLocation: (props: any) => ({
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "40px",
    color: props?.palette?.dashboard?.lightRedBlack, // lightRedBlack
    display: "flex",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: 14,
    },
  }),
  expandedListItem: (props: any) => ({}),
  collapsedListItem: (props: any) => ({}),
  locationIconStyle: (props: any) => ({
    marginRight: 10,
  }),
  listItemIconDetails: (props: any) => ({
    display: "flex",
    color: props?.palette?.dashboard?.black,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 2,
    alignItems: "center",
  }),
  listItemIconName: (props: any) => ({
    color: props?.palette?.dashboard?.darkGrey4, // darkGrey4
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
    backgroundColor: props?.palette?.dashboard?.blue, // blue
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
    alignItems: "center",
    borderTop: `1px solid ${props?.palette?.dashboard?.whiteGrayShade}`, //whiteGrayShade
    padding: "10px 0px 5px 0px",
    fontSize: 14,
    [muiTheme.breakpoints.down(1601)]: {
      fontSize: 13,
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontSize: 13,
    },
  }),
  listItemTimeStyle: (props: any) => ({
    color: props?.palette?.dashboard?.darkRedBlack2,
    fontSize: "12px",
    fontWeight: 400,
  }),

  listItemSection: (props: any) => ({
    width: "22%",
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
    color: props?.palette?.dashboard?.darkBlueBlackShade, // darkBlueBlackShade
    fontSize: "14px",
    fontWeight: 600,
  }),
});
export default useStyles;
