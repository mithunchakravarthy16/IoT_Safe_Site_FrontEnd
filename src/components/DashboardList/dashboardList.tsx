import { useState, useEffect, createRef } from "react";
import theme from "../../theme/theme";
import DashboardListItems from "../DashboardListItems";
import SearchBox from "../../elements/SearchBox";
import useTranslation from "../../localization/translations";
import useStyles from "./styles";

const DashboardList: React.FC<any> = (props) => {
  const {
    dashboardData,
    setSelectedMarker,
    selectedMarker,
    setSelectedNotification,
    selectedNotification,
    notificationTimeStamp,
    handleViewDialogue,
  } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [searchOpen, setSearchOpen] = useState<any>(false);

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

  const {
    dashboardRightPanel,
    dashboarListTitle,
    listTitleName,
    listSearch,
    dashboardListSection,
    searchClass,
    noResultStyle,
  } = useStyles(appTheme);

  const {} = useTranslation();

  return (
    <>
      <div className={dashboardRightPanel}>
        DashboardList
        <DashboardListItems />
      </div>
    </>
  );
};
export default DashboardList;
