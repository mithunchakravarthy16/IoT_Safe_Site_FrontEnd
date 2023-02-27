import { makeStyles } from "@mui/styles";
import logisticLogo from "../../assets/Login_BG.jpg";
import loginPolygon from "../../assets/polygons.png";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles(() => ({
  loginBannerSection: (props: any) => ({
    backgroundImage: `url("${logisticLogo}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 0px)",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      right: "0px",
      bottom: "0px",
      background: `url("${loginPolygon}")`,
      width: "167px",
      height: "89px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      [muiTheme.breakpoints.down(1181)]: {
        width: "124px",
        height: "60px",
      },
      [muiTheme.breakpoints.down(1025)]: {
        width: "124px",
        height: "60px",
      },
    },
  }),
  loginWidth: () => ({
    width: 700,
    [muiTheme.breakpoints.down(1281)]: {
      width: 600,
    },
  }),
  loginFormSection: (props: any) => ({
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  eyeOff: (props: any) => ({
    width: 17,
    cursor: "pointer",
  }),
  attherate: (props: any) => ({
    color: props?.palette?.login?.atthirate,
    fontStyle: "normal",
  }),
  innerForm: (props: any) => ({
    background: props?.palette?.login?.loginBannerTitle,
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
    borderRadius: " 5px",
    padding: `75px 81px 40px 81px`,
    [muiTheme.breakpoints.down(1601)]: {
      padding: "20px 50px 20px",
    },
    [muiTheme.breakpoints.down(1350)]: {
      padding: `20px 52px 20px`,
    },
    [muiTheme.breakpoints.down(1281)]: {
      padding: "20px 50px 20px",
    },
    [muiTheme.breakpoints.down(1181)]: {
      padding: `32px 52px 32px`,
    },
    [muiTheme.breakpoints.down(1025)]: {
      padding: `32px 52px 32px`,
    },
  }),
  loginBannerContent: (props: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& img": {
      [muiTheme.breakpoints.down(1181)]: {
        width: " 75%",
      },
      [muiTheme.breakpoints.down(1025)]: {
        width: " 60%",
      },
    },
  }),
  logoSection: (props: any) => ({
    textAlign: "center",
    padding: "35px 2px",
    background: props?.palette?.login?.logoBg,
    boxShadow: "0px 4px 15px rgb(0 0 0 / 5%)",
    borderRadius: "5px 5px 0px 0px",
    "& img": {
      [muiTheme.breakpoints.down(1281)]: {
        width: "50%",
      },
      [muiTheme.breakpoints.down(1181)]: {
        width: "60%",
      },
      [muiTheme.breakpoints.down(1025)]: {
        width: "50%",
      },
    },
    [muiTheme.breakpoints.down(1350)]: {
      padding: "16px 2px",
    },
    [muiTheme.breakpoints.down(1281)]: {
      padding: "16px 2px",
    },
    [muiTheme.breakpoints.down(1181)]: {
      padding: "24px 2px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      padding: "24px 2px",
    },
  }),
  welcomeSection: (props: any) => ({
    marginBottom: 23,
    [muiTheme.breakpoints.down(1281)]: {
      marginBottom: 10,
    },
  }),
  welcomeContent: (props: any) => ({
    fontFamily: `"QualcommNext-Regular"`,
    fontWeight: " 600",
    fontSize: "34px",
    lineHeight: "42px",
    color: props?.palette?.login?.welcomeContent,
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: "24px",
      lineHeight: "24px",
    },
  }),
  inputTitle: (props: any) => ({
    fontFamily: `"QualcommNext-Regular"`,
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
    marginBottom: 30,
    [muiTheme.breakpoints.down(1350)]: {
      marginBottom: 10,
    },

    "& .MuiInputBase-input": {
      fontFamily: `"QualcommNext-Regular"`,
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
  radioButtonSection: (props: any) => ({
    marginBottom: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [muiTheme.breakpoints.down(1367)]: {
      marginBottom: 10,
    },
    [muiTheme.breakpoints.down(1281)]: {
      marginBottom: 10,
    },
    [muiTheme.breakpoints.down(1181)]: {
      marginBottom: 20,
    },
    [muiTheme.breakpoints.down(1025)]: {
      marginBottom: 20,
    },
    "& .MuiRadio-root": {
      "&.Mui-checked": {
        color: props?.palette?.login?.loginButton,
      },
    },
    "& .MuiFormControlLabel-label": {
      fontFamily: `"QualcommNext-Regular"`,
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
      color: props?.palette?.login?.inputTitleColor,
      [muiTheme.breakpoints.down(1281)]: {
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
  }),
  forgotPassword: (props: any) => ({
    fontFamily: `"QualcommNext-Regular"`,
    fontWeight: " 400",
    fontSize: "16px",
    lineHeight: "19px",
    color: props?.palette?.login?.inputTitleColor,
    cursor: "pointer",
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: "14px",
      lineHeight: "21px",
    },
  }),
  loginButton: (props: any) => ({
    "& .MuiButtonBase-root": {
      background: props?.palette?.login?.loginButton,
      borderRadius: "5px",
      fontFamily: `"QualcommNext-Regular"`,
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "24px",
      color: props?.palette?.login?.loginBannerTitle,
      textTransform: "Capitalize",
      padding: 18,
      "&:hover": {
        background: props?.palette?.login?.loginButton,
      },
      [muiTheme.breakpoints.down(1281)]: {
        padding: 12,
        fontSize: "16px",
        lineHeight: "21px",
      },
    },
  }),
  formikErrorClass: (props: any) => ({
    fontFamily: `"QualcommNext-Regular"`,
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
  copyRights: (props: any) => ({
    color: props?.palette?.login?.copyRight,
    position: "fixed",
    bottom: "0%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    "& span": {
      fontFamily: `"QualcommNext-Regular"`,
      fontWeight: " 500",
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& img": {
      margin: "0 8px",
      width: 150,
      [muiTheme.breakpoints.down(1350)]: {
        width: "100px",
      },
      [muiTheme.breakpoints.down(1281)]: {
        width: "120px",
      },
      [muiTheme.breakpoints.down(1025)]: {
        width: "100px",
      },
    },
    [muiTheme.breakpoints.down(1367)]: {
      position: "absolute",
      bottom: "8px",
    },
    [muiTheme.breakpoints.down(1350)]: {
      position: "absolute",
      bottom: "8px",
    },
    [muiTheme.breakpoints.down(1350)]: {
      fontWeight: " 500",
      fontSize: "12px",
      lineHeight: "20px",
    },
    [muiTheme.breakpoints.down(1025)]: {
      fontWeight: " 500",
      fontSize: "12px",
      lineHeight: "20px",
    },
  }),
}));
export default useStyles;
