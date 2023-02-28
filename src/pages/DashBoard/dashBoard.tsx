import { useState, useEffect, Fragment } from "react";
import { Grid, Box } from "@mui/material";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import Map from "elements/Map";
import useStyles from "./styles";

const DashBoard = () => {
  const { hello } = useTranslation();

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  //const { dashboardSection } = useStyles(appTheme);

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
      <Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
            <Map />
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            Equipments
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default DashBoard;
