import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  customTable: () => ({
    padding: "30px 40px",
    "& .MuiTableContainer-root": {
      boxShadow: "none !important",
    },
    "& .MuiTableRow-head": {
      background: "#F0F4FF",
      borderRadius: "5px",
      "& :first-child": {
        width: "60px !important",
      },
    },
    "& .MuiTableCell-head": {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      textAlign: "left",
      color: "#445B7D",
      padding: "30px 11px !important",
    },

    "& .MuiTableCell-body": {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "24px",
      textAlign: "left",
      color: "#2D3748",
      padding: "11px !important",
    },
  }),
  rowInitial: () => ({
    width: "58px",
    height: "58px",
    background: "#5677EC",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginLeft: "18px ",
  }),
  deleteSection: () => ({
    color: "#E43E24 !important",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "& img": {
      marginRight: "20px !important",
    },
  }),

  adminRightPanelHeader: () => ({
    padding: "30px 30px 30px 30px ",
    borderBottom: "1px solid rgb(0 0 0 / 10%)",
    "& :last-child": {
      borderBottom: "none !important",
    },
  }),
  previewButton: () => ({
    fontFamily: "Montserrat !important",
    fontWeight: " 600 !important",
    fontSize: "20px !important",
    lineHeight: "24px !important",
    color: "#1A3175 !important",
    border: "1px solid #1a3175 !important",
    padding: "12px 16px !important",
    marginRight: "20px !important",
  }),
  adminHeaderButtonSection: () => ({
    display: "flex",
    justifyContent: "flex-end",
  }),
  updateButton: () => ({
    fontFamily: "Montserrat !important",
    fontWeight: " 600 !important",
    fontSize: "20px !important",
    lineHeight: "24px !important",
    background: "#1a3175 !important",
    padding: "12px 16px !important",
    marginRight: "20px !important",
    color: "white !important",
  }),
  colorSchemeHeading: () => ({
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: " 24px",
    lineHeight: "29px",
    color: "#000000",
  }),
  innerPanel: () => ({
    background: "#FFFFFF",
    borderRadius: "24px",
    height: "100%",
  }),
});
export default useStyles;
