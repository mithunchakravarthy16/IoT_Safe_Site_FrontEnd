import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";

import useStyles from "./styles";

const DashboardMap: React.FC<any> = (props) => {
  const {} = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { infoIconContainer, dashboardMapContainer } = useStyles(appTheme);
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

  const {} = useTranslation();

  return <div className={dashboardMapContainer}>DashboardMap</div>;
};
export default DashboardMap;
