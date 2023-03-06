import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import AlertsContainer from "components/AlertsContainer";
import theme from "../../theme/theme";
import useStyles from "./styles";
import GrokEyeContainer from "components/grokEyeContainer";

const GrokEye = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const { alertsContainerMain } = useStyles(appTheme);

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
    <>
      <Grid container className={alertsContainerMain}>
        <Grid item xs={12}>
          <GrokEyeContainer />
        </Grid>
      </Grid>
    </>
  );
};
export default GrokEye;
