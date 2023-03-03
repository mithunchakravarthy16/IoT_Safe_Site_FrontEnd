import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import Map from "elements/Map";
import useStyles from "./styles";

const AlertsMap: React.FC<any> = (props) => {
  const {
    alertsData,
    selectedNotification,
    setSelectedNotification,
    setTabIndex,
    pageName,
    searchOpen,
    setSearchOpen,
  } = props;

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const { alertMapContainer } = useStyles(appTheme);
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

  return (
    <div className={alertMapContainer}>
      <Map
        markers={alertsData}
        marker={selectedNotification}
        setSelectedNotification={setSelectedNotification}
        setTabIndex={setTabIndex}
        pageName={pageName}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
    </div>
  );
};
export default AlertsMap;
