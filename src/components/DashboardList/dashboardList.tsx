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
import InfoDialog from "components/InfoDialog";
import Typography from "@mui/material/Typography";

const DashboardList: React.FC<any> = (props) => {
  const {
    tabIndex,
    setTabIndex,
    equipmentData,
    dashboardEquipmentsMain,
    selectedNotification,
    setSelectedNotification,
    searchOpen,
    setSearchOpen,
  } = props;
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const [dataList, setDataList] = useState(
    formattedCardListData(tabIndex, equipmentData)
  );
  const [searchValue, setSearchValue] = useState<any>(dataList);
  const [selectedRefId, setSelectedRefId] = useState<any>("");

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
    listItemMainSection,
  } = useStyles(appTheme);

  const { equipment, aiCameras, envrSensor, floodSensor, search, noResult } =
    useTranslation();

  useEffect(() => {
    setDataList(formattedCardListData(tabIndex, equipmentData));
    setSearchValue(formattedCardListData(tabIndex, equipmentData));
  }, [tabIndex]);

  const handleSearch = (searchValue: any) => {
    let searchResult = dataList?.filter((value: any) => {
      return (
        value?.title
          ?.toLowerCase()
          .includes(searchValue?.toString()?.toLowerCase()) ||
        value?.area
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
    setSearchValue(dataList);
    setSelectedNotification("");
  };

  const handleTabs = (index: number) => {
    setTabIndex(index);
    setSearchOpen(false);
    setSelectedNotification("");
    setSelectedRefId("");
  };

  const handleExpandListItem = (id: number) => {
    setSelectedNotification(selectedNotification === id ? "" : id);
    setSelectedRefId(id);
  };

  const tabsList = [
    {
      name: aiCameras,
      val: 0,
      count: `(${dashboardEquipmentsMain?.aiCameras?.list?.length})`,
      icon: tabIndex === 0 ? AICameraActive : AICameraInactive,
    },
    {
      name: envrSensor,
      val: 1,
      count: `(${dashboardEquipmentsMain?.envrSensors?.list?.length})`,
      icon:
        tabIndex === 1 ? EnvironmentSensorActive : EnvironmentSensorInactive,
    },
    {
      name: floodSensor,
      val: 2,
      count: `(${dashboardEquipmentsMain?.floodSensors?.list?.length})`,
      icon: tabIndex === 2 ? FloodSensorActive : FloodSensorInactive,
    },
  ];

  const [showInfoDialogue, setShowInfoDialogue] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedId, setSelectedId] = useState<any>();

  const handleInfoDialogue = (evt: React.MouseEvent, type: string, id: any) => {
    setSelectedNotification("");
    setShowInfoDialogue(true);
    setSelectedType(type);
    setSelectedId(id);
  };

  const refs =
    searchValue && searchValue.length > 0
      ? searchValue.reduce((acc: any, value: any) => {
          acc[value.index] = createRef<any>();
          return acc;
        }, {})
      : "";

  useEffect(() => {
    if ((selectedNotification || selectedRefId) && refs) {
      setTimeout(() => {
        refs[
          selectedNotification ? selectedNotification : selectedRefId
        ]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    }
  }, [refs, selectedRefId, selectedNotification]);

  useEffect(() => {
    if (selectedNotification === -1 || selectedNotification === "") {
      if (tabIndex === 0 && refs[1]) {
        refs[1]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      if (tabIndex === 1 && refs[7]) {
        refs[7]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      if (tabIndex === 2 && refs[17]) {
        setTimeout(() => {
          refs[17]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 300);
      }
    }
  }, [tabIndex, refs, selectedNotification]);

  return (
    <>
      <div className={dashboardRightPanel}>
        <div className={dashboarListTitle}>
          <div className={listTitleName}>
            {!searchOpen ? (
              <Typography variant="h3">equipment</Typography>
            ) : (
              <SearchBox
                searchInput={searchClass}
                placeHolder={search}
                handleSearch={handleSearch}
                searchIsOpen={true}
                fontColor={appTheme?.palette?.dashboard?.grayShade3}
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
            tabType={"listTab"}
          />
        </div>{" "}
        <div className={listItemMainSection}>
          {searchValue && searchValue?.length > 0 ? (
            searchValue?.map((item: any, index: number) => {
              return (
                <DashboardListItems
                  refs={refs}
                  data={item}
                  key={index}
                  selectedNotification={selectedNotification}
                  setSelectedNotification={setSelectedNotification}
                  handleExpandListItem={handleExpandListItem}
                  handleInfoDialogue={handleInfoDialogue}
                />
              );
            })
          ) : (
            <div className={noResultStyle}>{noResult}</div>
          )}
        </div>
      </div>
      <div>
        {showInfoDialogue && (
          <InfoDialog
            selectedType={selectedType}
            selectedId={selectedId}
            setShowInfoDialogue={setShowInfoDialogue}
          />
        )}
      </div>
    </>
  );
};
export default DashboardList;
