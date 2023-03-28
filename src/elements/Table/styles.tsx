import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  customTable: () => ({
    "& .MuiTableContainer-root": {
      boxShadow: "none !important",
    },
    "& .MuiTableRow-head": {
      background: "#F0F4FF",
      borderRadius: "5px",
    },
    "& .MuiTableCell-head": {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      textAlign: "left",
      color: "#445B7D",
    },
    "& .MuiTableCell-body": {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      textAlign: "left",
      color: "#2D3748",
    },
  }),
});
export default useStyles;
