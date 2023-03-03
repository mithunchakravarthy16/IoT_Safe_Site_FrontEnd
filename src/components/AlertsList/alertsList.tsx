import { useState, useEffect, Fragment, createRef } from "react";
import moment from "moment";
import theme from "../../theme/theme";
import Tabs from "../../elements/Tabs";
import SearchIcon from "../../assets/searchIcon.svg";
import CloseIcon from "../../assets/closeIcon.svg";
import SearchBox from "../../elements/SearchBox";
import useTranslation from "../../localization/translations";
import AlertsListItem from "components/AlertsListItem";
import { formattedAlertListData } from "../../utils.ts/utils";
import useStyles from "./styles";

const AlertsList: React.FC<any> = (props) => {
  const {
    alertsData,
    consolidatedData,
    selectedMarker,
    setSelectedNotification,
    selectedNotification,
    tabIndex,
    setTabIndex,
    setNotificationTimeStamp,
    alertsMainList,
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    alertsRightPanel,
    dashboarListTitle,
    listTitleName,
    listSearch,
    dashboardListSection,
    searchClass,
    noResultStyle,
    customNotificationTabs,
  } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const { search, noResult, alerts, events, operations } = useTranslation();

  const [selectedRefId, setSelectedRefId] = useState("");
  const [searchOpen, setSearchOpen] = useState<any>(false);

  const [alertsDataList, setAlertsDataList] = useState(
    formattedAlertListData(tabIndex, alertsData)
  );

  const [searchValue, setSearchValue] = useState<any>(alertsDataList);
  const handleTabs = (index: number) => {
    setTabIndex(index);
    setSearchOpen(false);
    setSelectedNotification("");
  };

  useEffect(() => {
    setAlertsDataList(formattedAlertListData(tabIndex, alertsData));
    setSearchValue(formattedAlertListData(tabIndex, alertsData));
  }, [tabIndex]);

  useEffect(() => {
    setAlertsDataList(formattedAlertListData(tabIndex, alertsData));
    setSearchValue(formattedAlertListData(tabIndex, alertsData));
  }, []);

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

  const tabsList = [
    {
      name: events,
      val: 0,
      count: alertsMainList?.events?.length,
    },
    {
      name: alerts,
      val: 1,
      count: alertsMainList?.alerts?.length,
    },
    {
      name: operations,
      val: 2,
      count: alertsMainList?.operations?.length,
    },
  ];

  const handleSearch = (searchValue: any) => {
    let searchResult = alertsDataList?.filter((value: any) => {
      return (
        value?.observation
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase()) ||
        value?.name
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase())
      );
    });
    setSearchValue(searchResult);
    setSearchOpen(true);
    setSelectedNotification("");
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchValue(alertsDataList);
    setSelectedNotification("");
  };

  const handleExpandListItem = (index: number, id: any, dateTime: any) => {
    setSelectedNotification(selectedNotification === id ? -1 : id);
    // setSelectedRefId(id);
    setNotificationTimeStamp(dateTime);
  };

  return (
    <div className={alertsRightPanel}>
      <div className={dashboarListTitle}>
        <div className={listTitleName}>
          {!searchOpen ? (
            alerts
          ) : (
            <SearchBox
              searchInput={searchClass}
              placeHolder={search}
              handleSearch={handleSearch}
              searchIsOpen={true}
              fontColor={appTheme?.palette?.dashboard?.black}
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
          // initialIndex={tabIndex}
          initialIndex={tabIndex}
          tabsList={tabsList}
          handleTabs={handleTabs}
          dashboardNotificationClassName={customNotificationTabs}
          tabType={""}
        />
      </div>
      <div className={dashboardListSection}>
        {searchValue && searchValue.length > 0
          ? searchValue?.map((item: any, index: number) => {
              return (
                <AlertsListItem
                  // refs={refs}
                  data={item}
                  key={index}
                  handleExpandListItem={handleExpandListItem}
                  selectedNotification={selectedNotification}
                  // handleViewDialogue={handleViewDialogue}
                  notificationTimeStamp={""}
                />
              );
            })
          : noResult}
      </div>
    </div>
  );
};
export default AlertsList;
