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
  backgroundColor: () => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: " 22px",
    textAlign: "left",
    color: " #445B7D",
    padding: " 30px 30px 0px 30px ",
  }),
  radioButton: () => ({
    paddingBottom: "30px !important",
    "& .MuiFormControlLabel-label": {
      color: "#445B7D",
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      textAlign: "left",
    },
  }),
  radioButtonHeader: () => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "left",
    color: "#000000",
    marginBottom: "18px",
  }),
  adminRightPanelBody: () => ({
    padding: "30px 30px 0px 30px ",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  }),
  adminRightPanelBackgroundColor: () => ({
    padding: "30px 30px 30px 30px ",
    borderBottom: "1px solid rgb(0 0 0 / 10%)",
  }),
  customSelects: () => ({
    minWidth: "100px !important",
    minheight: "5px !important",
    paddingRight: "24px",
    paddingBottom: "30px",
    "& .MuiSelect-select": {
      padding: "15px 11px !important",
      background: "#FFFFFF",
      border: "1px solid #93A8C1",
      borderRadius: " 5px",
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      textAlign: "left",
      color: "#000000",
    },
    "& .MuiInputBase-root": {
      borderRadius: "50px",
      fontSize: 14,
      // lineHeight: 21,
      textAlign: "center",
      fontWeight: "bold",
      position: "relative",
      color: "#000",
      "& .MuiSvgIcon-root": {
        position: "absolute",
        right: "10px",
        color: "black !important",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        display: "none !important",
      },
    },

    "& .MuiSelect-iconOutlined": {
      color: `#000 !important`,
    },
  }),
  adminPlusIconClass: () => ({
    position: "relative",
    "& img": {
      position: "absolute",
      top: "57px",
      left: "77px",
      cursor: "pointer",
    },
  }),
  colorPickerItem: () => ({
    width: "250px !important",
  }),
  deleteIconClass: () => ({
    position: "relative",
    "& img": {
      position: "absolute",
      top: "55px",
      left: "26px",
      cursor: "pointer",
    },
  }),
  insideContainer: () => ({
    height: "calc(100vh - 340px)",
    overflow: " auto",
  }),
  adminUser: () => ({}),
}));
export default useStyles;
