import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  videoBoxStyle: (props: any) => ({
    position: "relative",
    margin: "15px 0px 0px 15px",
  }),
  cameraTitleName: (props: any) => ({
    position: "absolute",
    top: 0,
    background: props?.palette?.dashboard?.blackGrayWhite, //blackGrayWhite
    backdropFilter: "blur(2.5px)",
    color: props?.palette?.dashboard?.white,
    width: "99%",
    padding: "5px 0px 5px 5px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: 0.5,
  }),
  dragListContainerStyle: (props: any) => ({
    width: "100%",
    height: "calc(100vh - 100px)",
    overflow: "scroll",
  }),
  dragIconImageStyle: (props: any) => ({
    marginRight: 10,
    cursor: "pointer",
  }),
});
export default useStyles;
