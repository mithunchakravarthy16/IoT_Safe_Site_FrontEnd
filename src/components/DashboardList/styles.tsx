import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  dashboardRightPanel: (props: any) => ({
    background: props?.palette?.dashboard?.whiteGrayShade,
    padding: "26px 12px 13px 17px",
    borderLeft: `2px solid ${props?.palette?.dashboard?.lightGrey2}`,
    height: "calc(100vh - 124px)",
  }),
  listItemMainSection: (props: any) => ({
    height: "calc(100vh - 310px)",
    overflow: "auto",
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
    border: `1px solid ${props?.palette?.dashboard?.grayShade3}`,
    background: props?.palette?.dashboard?.white,
    color: props?.palette?.dashboard?.grayShade3,
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
      fontSize: "15px !important",
      // marginBottom: "-0.5px !important",
      flex: "1 !important",
      textTransform: "none",
    },
    "& .MuiTab-root": {
      padding: "10px 12px",
      minHeight: "88px !important",
      [muiTheme.breakpoints.down(1281)]: {
        padding: "0px 12px",
      },
      "&:first-child": {
        margin: "20px 10px 0px 0px",
        border: `1px solid ${props?.palette?.dashboard?.lightGrayWhiteShade}`,
        borderRadius: "5px 5px 0px 0px",
        fontSize: 18,
        background: props?.palette?.dashboard?.lightGrayWhiteShade,
      },
      "&:first-child.Mui-selected": {
        color: `${props?.palette?.dashboard?.darkGreenShade} !important`,
        background: props?.palette?.dashboard?.darkBlueBlackShade,
        borderBottom: `5px solid ${props?.palette?.dashboard?.darkGreenShade}`,
        fontSize: 14,
      },
      "&:first-child.Mui-selected img": {},
      "&:nth-child(2)": {
        margin: "20px 10px 0px 0px",
        border: `1px solid ${props?.palette?.dashboard?.lightGrayWhiteShade}`,
        borderRadius: "5px 5px 0px 0px",
        fontSize: 18,
        background: props?.palette?.dashboard?.lightGrayWhiteShade,
      },
      "&:nth-child(2).Mui-selected": {
        color: `${props?.palette?.dashboard?.darkGreenShade} !important`,
        background: props?.palette?.dashboard?.darkBlueBlackShade,
        borderBottom: `5px solid ${props?.palette?.dashboard?.darkGreenShade}`,
        fontSize: 14,
      },
      "&:nth-child(3)": {
        margin: "20px 0px 0px 0px",
        border: `1px solid ${props?.palette?.dashboard?.lightGrayWhiteShade}`,
        borderRadius: "5px 5px 0px 0px",
        fontSize: 18,
        background: props?.palette?.dashboard?.lightGrayWhiteShade,
      },
      "&:nth-child(3).Mui-selected": {
        color: `${props?.palette?.dashboard?.darkGreenShade} !important`,
        background: props?.palette?.dashboard?.darkBlueBlackShade,
        borderBottom: `5px solid ${props?.palette?.dashboard?.darkGreenShade}`,
        fontSize: 14,
      },
    },
    "& .MuiTabs-root .MuiTabs-indicator": {
      width: "100% !important",
      // background: "#2B2B2B",
      display: "none",
    },
  }),
});
export default useStyles;
