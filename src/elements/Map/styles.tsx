import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import muiTheme from "theme/muiTheme";

export const mapContainerStyles = {
  width: "100%",
  height: "100%",
};

export const mapStyleWidth = {
  width: "100%",
  height: "100%",
};

export const RootContainer = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const useStyles = makeStyles({
  overlayViewBox: (props: any) => ({
    left: "0 !important",
    top: "0 !important",
  }),
});
export default useStyles;
