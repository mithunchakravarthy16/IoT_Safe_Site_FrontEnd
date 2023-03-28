import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({
  newUser: () => ({
    fontFamily: "Montserrat",
    fontWeight: "500 !important",
    fontSize: "24px !important",
    lineHeight: "29px",
    textAlign: "left",
    color: "#000000 !important",
    marginBottom: "40px !important",
  }),
  eyeOff: (props: any) => ({
    width: 17,
    cursor: "pointer",
  }),
  attherate: (props: any) => ({
    color: props?.palette?.login?.atthirate,
    fontStyle: "normal",
  }),
  inputTitle: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif'`,
    fontWeight: " 400",
    fontSize: "18px",
    lineHeight: "22px",
    color: props?.palette?.login?.inputTitleColor,
    marginBottom: 14,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: "16px",
      lineHeight: "21px",
    },
  }),
  inputField: (props: any) => ({
    marginBottom: 50,
    [muiTheme.breakpoints.down(1350)]: {
      marginBottom: 10,
    },

    "& .MuiInputBase-input": {
      fontFamily: `'Nunito Sans', sans-serif'`,
      fontWeight: " 500",
      fontSize: "18px",
      lineHeight: "24px",
      color: props?.palette?.login?.inputPlaceholder,
      "&::placeholder": {
        color: "#8c8c8c",
        opacity: 1,
        fontSize: "18px",
      },
      [muiTheme.breakpoints.down(1350)]: {
        fontSize: "14px",
        lineHeight: "20px",
        padding: 10,
      },
    },
  }),
  formikErrorClass: (props: any) => ({
    fontFamily: `'Nunito Sans', sans-serif'`,
    color: "red",
    padding: 0,
    margin: 0,
    paddingTop: 5,
    fontSize: 13,
    position: "absolute",
    fontWeight: " 500",
    bottom: "4px",
    left: 0,
  }),
  outlineInputField: (props: any) => ({
    position: "relative",
  }),
  adminHeaderButtonSection: () => ({
    display: "flex",
    justifyContent: "flex-end",
    "& :last-child": {
      marginRight: "0 !important",
    },
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
}));

export default useStyles;
