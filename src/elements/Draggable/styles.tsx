import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  videoBoxStyle: (props: any) => ({
    position: "relative",
  }),
  cameraTitleName: (props: any) => ({
    position: "absolute",
    top: 0,
    background: props?.palette?.dashboard?.blackGrayWhite, //blackGrayWhite
    backdropFilter: "blur(2.5px)",
    color: props?.palette?.dashboard?.white,
    width: "97.5%",
    padding: "10px 0px 10px 10px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: 0.5,
  }),
  dragListContainerStyle: (props: any) => ({
    display: "flex",
    flexWrap: "wrap",
    rowGap: "0px",
    columnGap: "10px",
    cursor: "default",
    height: "calc(100vh - 133px)",
  }),
  dragIconImageStyle: (props: any) => ({
    marginRight: 10,
    cursor: "pointer",
  }),
  dragListItemStyle: (props: any) => ({}),
});
export default useStyles;