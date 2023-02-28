import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  dashboardRightPanel: (props: any) => ({
    background: props?.palette?.dashboard?.white,
    padding: "26px 17px 13px 17px",
    borderLeft: `2px solid ${props?.palette?.dashboard?.lightGrey2}`,
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
    height: "calc(100vh - 216px)",
    overflow: "auto",
    marginRight: "-12px",
    marginTop: 10,
  }),
  searchClass: (props: any) => ({
    border: `1px solid ${props?.palette?.dashboard?.lightGrey}`,
    background: props?.palette?.dashboard?.white,
    color: props?.palette?.dashboard?.lightGrey3,
    borderRadius: 6,
    height: "40px",
    "& .MuiIconButton-root": {
      marginRight: 7,
    },
    "& .MuiInputBase-root": {
      fontWeight: 500,
    },
  }),

  noResultStyle: (props: any) => ({
    margin: 10,
  }),

  customNotificationTabs: {
    "& .MuiTabs-flexContainer": {
      // borderBottom: "2px solid #3e3e3e",
      justifyContent: "space-between",
    },
    "& .MuiButtonBase-root": {
      fontFamily: "QualcommNext-Regular",
      fontSize: "15px !important",
      // marginBottom: "-0.5px !important",
      flex: "1 !important",
      textTransform: "none",
    },
    "& .MuiTab-root": {
      padding: "10px 12px",
      [muiTheme.breakpoints.down(1281)]: {
        padding: "6px 12px",
      },
      "&:first-child": {
        color: "#38BCDB !important",
        margin: "15px 20px 0px 0px",
        border: "1px solid #38BCDB",
        [muiTheme.breakpoints.down(1281)]: {
          fontSize: 14,
          margin: "10px 10px 0px 0px",
        },
      },
      "&:first-child.Mui-selected": {
        color: "#ffffff !important",
        background: "#38BCDB",
      },
      "&:nth-child(2)": {
        color: "#E13827 !important",
        margin: "15px 20px 0px 0px",
        border: "1px solid #E13827",
        [muiTheme.breakpoints.down(1281)]: {
          fontSize: 14,
          margin: "10px 10px 0px 0px",
        },
      },
      "&:nth-child(2).Mui-selected": {
        color: "#ffffff !important",
        background: "#E13827",
      },
      "&:nth-child(3)": {
        color: "#E0791A !important",
        margin: "15px 0px 0px 0px",
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
});
export default useStyles;
