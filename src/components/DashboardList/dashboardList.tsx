import { useState, useEffect, createRef } from "react";
import theme from "../../theme/theme";
import DashboardListItems from "../DashboardListItems";
import Tabs from "elements/Tabs";
import useTranslation from "../../localization/translations";
import SearchBox from "../../elements/SearchBox";
import { formattedCardListData } from "utils.ts/utils";
import SearchIcon from "../../assets/searchIcon.svg";
import CloseIcon from "../../assets/closeIcon.svg";
import AICameraActive from "../../assets/TabIcons/AICameraActive.svg";
import AICameraInactive from "../../assets/TabIcons/AICameraInActive.svg";
import EnvironmentSensorActive from "../../assets/TabIcons/EnvironmentSensorActive.svg";
import EnvironmentSensorInactive from "../../assets/TabIcons/EnvironmentSensorInactive.svg";
import FloodSensorActive from "../../assets/TabIcons/FloodSensorActive.svg";
import FloodSensorInactive from "../../assets/TabIcons/FloodSensorInactive.svg";
import useStyles from "./styles";

const DashboardList: React.FC<any> = (props) => {
  const {
    tabIndex,
    setTabIndex,
    equipmentData,
    dashboardEquipmentsMain,
    selectedNotification,
    setSelectedNotification,
  } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const [searchOpen, setSearchOpen] = useState<any>(false);
  const [tablistData, setTablistData] = useState(equipmentData);
  const [dataList, setDataList] = useState(
    formattedCardListData(tabIndex, equipmentData)
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

  const {
    dashboardRightPanel,
    dashboarListTitle,
    listTitleName,
    listSearch,
    dashboardListSection,
    searchClass,
    noResultStyle,
    customNotificationTabs,
  } = useStyles(appTheme);

  const { dashboardListName } = useTranslation();

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        setDataList(formattedCardListData(tabIndex, equipmentData));
        break;
      case 1:
        setDataList(formattedCardListData(tabIndex, equipmentData));
        break;
      case 2:
        setDataList(formattedCardListData(tabIndex, equipmentData));
        break;
    }
  }, [tabIndex]);

  const handleSearch = (searchValue: any) => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleTabs = (index: number) => {
    setTabIndex(index);
    setSearchOpen(false);
    // setSelectedNotification("");
  };

  const handleExpandListItem = (id: number) => {
    setSelectedNotification(selectedNotification === id ? -1 : id);
  };

  const tabsList = [
    {
      name: "AI Cameras",
      val: 0,
      count: `(${dashboardEquipmentsMain?.aiCameras?.list?.length})`,
    },
    {
      name: "Envr. Sensor",
      val: 1,
      count: `(${dashboardEquipmentsMain?.envrSensors?.list?.length})`,
    },
    {
      name: "Flood Sensor",
      val: 2,
      count: `(${dashboardEquipmentsMain?.floodSensors?.list?.length})`,
    },
  ];

  return (
    <>
      <div className={dashboardRightPanel}>
        <div className={dashboarListTitle}>
          <div className={listTitleName}>
            {!searchOpen ? (
              `${dashboardListName}`
            ) : (
              <SearchBox
                searchInput={searchClass}
                // placeHolder={search}
                handleSearch={handleSearch}
                searchIsOpen={true}
                fontColor={appTheme?.palette?.dashboardList?.darkGrey3}
              />
            )}
          </div>
          <div className={listSearch}>
            <img
              src={searchOpen ? CloseIcon : SearchIcon}
              alt="search"
              onClick={searchOpen ? handleSearchClose : handleSearch}
            />
          </div>
        </div>
        <div>
          <Tabs
            initialIndex={tabIndex}
            tabsList={tabsList}
            handleTabs={handleTabs}
            dashboardNotificationClassName={customNotificationTabs}
          />
        </div>{" "}
        {dataList &&
          dataList?.length > 0 &&
          dataList?.map((item: any, index: number) => {
            return (
              <DashboardListItems
                data={item}
                key={index}
                selectedNotification={selectedNotification}
                setSelectedNotification={setSelectedNotification}
                handleExpandListItem={handleExpandListItem}
              />
            );
          })}
      </div>
    </>
  );
};
export default DashboardList;
