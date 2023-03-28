import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  colorSchemeHeading: (props: any) => ({
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: " 24px",
    lineHeight: "29px",
    color: "#000000",
    margin: 30,
  }),
  textAreaStyle: (props: any) => ({
    margin: "0px 0px 0px 30px",
    width: "60%",
    height: "100px",
    border: "1px solid #93A8C1",
  }),
}));
export default useStyles;
