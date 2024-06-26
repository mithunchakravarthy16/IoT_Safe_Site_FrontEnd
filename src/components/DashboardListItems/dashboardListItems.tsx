import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import Button from "../../elements/Button";
import useTranslation from "../../localization/translations";
import Tooltip from "elements/Tooltip";
import AlertButton from "../../assets/AlertButton.svg";
import CallButton from "../../assets/CallButton.svg";
import EyeButton from "../../assets/EyeButton.svg";
import LocationIcon from "../../assets/LocationIcon.svg";
import BellRingingIcon from "../../assets/BellRingingIcon.svg";
import MotionIcon from "../../assets/MotionIcon.svg";
import OprAlertIcon from "../../assets/OprAlertIcon.svg";
import TowerIcon from "../../assets/TowerIcon.svg";
import TemperatureIcon from "../../assets/ListInfoIcons/TemperatureIcon.svg";
import BatteryIcon from "../../assets/ListInfoIcons/BatteryIcon.svg";
import CarbonMonoxideIcon from "../../assets/ListInfoIcons/CarbonMonoxideIcon.svg";
import HumidityIcon from "../../assets/ListInfoIcons/HumidityIcon.svg";
import WaterLevelIcon from "../../assets/ListInfoIcons/WaterLevelIcon.svg";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

const DashboardListItems: React.FC<any> = (props) => {
  const {
    data,
    data: {
      title,
      area,
      index,
      connectivityPercentage,
      incidentsObservation,
      operationAlertObservation,
      motionObservation,
      type,
      infoIconList,
      id,
    },
    refs,
    selectedNotification,
    setSelectedNotification,
    handleExpandListItem,
    handleInfoDialogue,
  } = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
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
    listItemContainer,
    listItemTitle,
    listItemLocation,
    expandedListItem,
    collapsedListItem,
    locationIconStyle,
    listItemIconDetails,
    listIemIcon,
    expandedListIconContainer,
    selectedButtonStyles,
    listItemFooterStyle,
    listItemIconName,
    listItemTimeStyle,
    listItemSection,
    expandedListButtonContainer,
    expandedListHeaderStyle,
    expandedListButtonStyle,
    lineClass,
    listIemDetails,
    listItemTower,
    listItemLocationAreaSection,
    spanTextClass,
    spanTextValue,
    infoIconListContainer,
    itemIconValueStyle,
    itemValueStyle,
    itemNameStyle,
  } = useStyles(appTheme);

  const {
    grokEye,
    raiseAlert,
    call,
    connectivity,
    incidents,
    operationAlert,
    motion,
    call911,
    viewDetails,
  } = useTranslation();

  const notificationIconArray = [
    {
      icon: BellRingingIcon,
      value: incidentsObservation,
      label: incidents,
    },
    {
      icon: OprAlertIcon,
      value: operationAlertObservation,
      label: operationAlert,
    },
    {
      icon: MotionIcon,
      value: motionObservation,
      label: motion,
    },
  ];

  const infoListIconArray = [
    { icon: TemperatureIcon },
    { icon: HumidityIcon },
    { icon: type === "envrSensors" ? CarbonMonoxideIcon : WaterLevelIcon },
    { icon: BatteryIcon },
  ];

  const listItemDetails = infoIconList?.map((item: any, index: number) =>
    Object.assign({}, item, infoListIconArray[index])
  );

  return (
    <div>
      {" "}
      <div
        className={listItemContainer}
        onClick={() => handleExpandListItem(index)}
        ref={refs[index]}
      >
        {selectedNotification === index ? (
          <div className={expandedListItem}>
            <div className={expandedListHeaderStyle}>
              <div>
                <div className={listItemTitle}>
                  <Typography variant="h6">{title}</Typography>
                </div>
              </div>
            </div>

            <div className={listItemLocation}>
              <div className={listItemLocationAreaSection}>
                <img
                  src={LocationIcon}
                  alt="location Icon"
                  className={locationIconStyle}
                  width={17}
                />
                <Typography variant="h4">{area}</Typography>
              </div>{" "}
              <div className={expandedListButtonContainer}>
                <div
                  className={expandedListButtonStyle}
                  onClick={(evt) => {
                    handleInfoDialogue(evt, type, id);
                  }}
                >
                  <Tooltip tooltipValue={viewDetails}>
                    <img src={EyeButton} alt={grokEye} />
                  </Tooltip>
                </div>
                <div className={expandedListButtonStyle}>
                  <Tooltip tooltipValue={raiseAlert}>
                    <img src={AlertButton} alt={raiseAlert} />
                  </Tooltip>
                </div>
                <div className={expandedListButtonStyle}>
                  <Tooltip tooltipValue={call911}>
                    <img src={CallButton} alt={call} />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className={listItemTower}>
              {" "}
              <img
                src={TowerIcon}
                alt="TowerIcon"
                className={locationIconStyle}
                width={16}
              />
              <span className={spanTextClass}>
                <Typography variant="h4">{connectivity}</Typography>
              </span>
              <span className={spanTextValue}>{connectivityPercentage}</span>
            </div>
            <div className={lineClass}></div>
            <div className={expandedListIconContainer}>
              {notificationIconArray &&
                notificationIconArray.length > 0 &&
                notificationIconArray?.map((item: any, index: number) => {
                  return (
                    <div className={listItemSection} key={index}>
                      <div className={listIemIcon}>
                        <img src={item?.icon} alt="Icons" width={25} />
                      </div>
                      <div className={listIemDetails}>
                        {" "}
                        <div className={listItemIconDetails}>
                          <Typography variant="h4">{item?.value}</Typography>
                        </div>
                        <div className={listItemIconName}>
                          <Typography variant="h4">{item?.label}</Typography>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {infoIconList && infoIconList?.length > 0 ? (
              <div className={infoIconListContainer}>
                {listItemDetails &&
                  listItemDetails.length > 0 &&
                  listItemDetails?.map((item: any, index: number) => {
                    return (
                      <div>
                        <div className={itemIconValueStyle}>
                          <div>
                            <img src={item?.icon} alt="Icon" />
                          </div>
                          <div className={itemValueStyle}>{item?.value}</div>
                        </div>
                        <div className={itemNameStyle}>{item?.name}</div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className={collapsedListItem}>
            <div className={listItemTitle}>
              <Typography variant="h3">{title}</Typography>
            </div>
            <div className={listItemLocation}>
              <Typography variant="h4">{area}</Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DashboardListItems;
