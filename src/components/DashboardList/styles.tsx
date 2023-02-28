import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  dashboardRightPanel: (props: any) => ({
    background: props?.palette?.dashboardList?.lightGrey1,
    padding: "26px 17px 13px 17px",
    fontFamily: `"QualcommNext-Regular"`,
    borderLeft: `2px solid ${props?.palette?.dashboardList?.lightGrey2}`,
  }),
  dashboarListTitle: (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 3px",
    borderBottom: `1px solid ${props?.palette?.dashboardList?.lightBlue1}`,
    height: 53,
    alignItems: "center",
  }),
  listTitleName: (props: any) => ({
    fontSize: 20,
    color: props?.palette?.dashboardList?.darkBlue2,
    width: "85%",
    fontWeight: 600,
    fontFamily: `"QualcommNext-Regular"`,
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
    border: `1px solid ${props?.palette?.dashboardList?.lightGrey}`,
    background: props?.palette?.dashboardList?.white,
    color: props?.palette?.dashboardList?.lightGrey3,
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
});
export default useStyles;
