import { makeStyles } from "@mui/styles";
import MenuShapes from "../../assets/admin-leftpan-shape.png";

const useStyles = makeStyles(() => ({
  adminContentPanel: () => ({
    marginTop: 80,
    padding: " 40px !important",
  }),
  adminLeftPanel: () => ({
    background: "#1A3175",
    borderRadius: " 20px 0px 0px 20px",
    height: "calc(100vh - 280px)",
    padding: "60px 30px",
  }),
  adminRightPanel: () => ({
    background: "#F3F7FF",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    height: "calc(100vh - 200px)",
    padding: 20,
  }),
  menuItemList: () => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#91A2DE",
    marginBottom: "45px",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  menuItemListActive: () => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#fff",
    marginBottom: "45px",
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
    "&::before": {
      content: `''`,
      position: "absolute",
      width: "16.5px",
      height: "72px",
      right: "-34px",
      top: "-24px",
      backgroundImage: `url("${MenuShapes}")`,
    },
  }),
  adminRightPanelHeader: () => ({
    padding: "46px 40px",
    borderBottom: "1px solid rgb(0 0 0 / 10%)",
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
    background: "#1a3175",
    padding: "12px 16px !important",
    marginRight: "20px !important",
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
}));
export default useStyles;
