import { useState, useEffect, Fragment } from "react";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";
import DashboardMap from "components/DashboardMap";
import DashboardList from "../DashboardList";
import useStyles from "./styles";

const DashboardContainer: React.FC<any> = (props) => {
  const {} = props;

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const { fullscreenMapStyle, fullscreenMapInnerStyle } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  useEffect(() => {
    switch (selectedTheme) {
      case "red":
        setAppTheme(theme?.redTheme);
        break;
      case "green":
        setAppTheme(theme?.greenTheme);
        break;
      case "yellow":
        setAppTheme(theme?.yellowTheme);
        break;
      case "default":
        setAppTheme(theme?.defaultTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9.2}>
            <DashboardMap />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={2.8}>
            <DashboardList />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default DashboardContainer;
