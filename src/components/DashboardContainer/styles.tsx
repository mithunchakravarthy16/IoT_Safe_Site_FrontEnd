import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  fullscreenMapStyle: (props: any) => ({
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 550000,
  }),
  fullscreenMapInnerStyle: (props: any) => ({
    width: "80vw",
    height: "90vh",
    backgroundColor: "#FFF",
  }),
});
export default useStyles;
