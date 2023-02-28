import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  {
    loginButton: (props: any) => ({
      maxWidth: "373px !important",
      borderRadius: "24px !important",
      marginTop: "30px !important",
      backgroundColor: `${props?.palette?.buttonElement?.darkBlue1} !important`,
      height: "48px",
      color: `${props?.palette?.buttonElement?.colorWhite} !important`,
      fontSize: "16px !important",
      fontWeight: "600 !important",
      
    }),
    CustomButton: (props: any) => ({
      maxWidth: "373px !important",
      width: "114px",
      borderRadius: "15.27px !important",
      backgroundColor: `${props?.palette?.buttonElement?.deepDarkBlue} !important`,
      height: "30.55px",
      color: `${props?.palette?.buttonElement?.colorWhite} !important`,
      fontSize: "9.5px !important",
      fontWeight: "700 !important",
    }),

    CustomButtonDisable: (props: any) => ({
      maxWidth: "373px !important",
      width: "114px",
      borderRadius: "15.27px !important",
      backgroundColor: `${props?.palette?.buttonElement?.paleGray} !important`,
      height: "30.55px",
      color: `${props?.palette?.buttonElement?.colorWhite} !important`,
      fontSize: "9.5px !important",
      fontWeight: "700 !important",
      pointerEvents: "none",
    }),
  },
  { index: 1 }
);
export default useStyles;
