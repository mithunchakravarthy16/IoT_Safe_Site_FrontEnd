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
    },
    selectedNotification,
    setSelectedNotification,
    handleExpandListItem,
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
  } = useStyles(appTheme);

  const {
    listIconName1,
    listIconName2,
    listIconName3,
    listItemConnectivityText,
    listItemIconArrayName1,
    listItemIconArrayName2,
    listItemIconArrayName3,
  } = useTranslation();

  const [listItemIconArray, setListItemIconArray] = useState<any>();

  useEffect(() => {
    let iconListArray: any = [];
    if (data) {
      switch (data.category) {
        case "aiCameras":
          iconListArray = [
            {
              icon: BellRingingIcon,
              value: incidentsObservation,
              label: listItemIconArrayName1,
            },
            {
              icon: OprAlertIcon,
              value: operationAlertObservation,
              label: listItemIconArrayName2,
            },
            {
              icon: MotionIcon,
              value: motionObservation,
              label: listItemIconArrayName3,
            },
          ];
          break;
        default:
          iconListArray = [
            {
              icon: BellRingingIcon,
              value: incidentsObservation,
              label: listItemIconArrayName1,
            },
            {
              icon: OprAlertIcon,
              value: operationAlertObservation,
              label: listItemIconArrayName2,
            },
            {
              icon: MotionIcon,
              value: motionObservation,
              label: listItemIconArrayName3,
            },
          ];
          break;
      }
      setListItemIconArray(iconListArray);
    }
  }, [selectedNotification]);
  return (
    <>
      <div
        className={listItemContainer}
        onClick={() => handleExpandListItem(index)}
      >
        {selectedNotification === index ? (
          <div className={expandedListItem}>
            <div className={expandedListHeaderStyle}>
              <div>
                <div className={listItemTitle}>{title}</div>
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
                {area}
              </div>{" "}
              <div className={expandedListButtonContainer}>
                <div className={expandedListButtonStyle}>
                  <Tooltip tooltipValue={listIconName1}>
                    <img src={EyeButton} alt={listIconName1} />
                  </Tooltip>
                </div>
                <div className={expandedListButtonStyle}>
                  <Tooltip tooltipValue={listIconName2}>
                    <img src={AlertButton} alt={listIconName2} />
                  </Tooltip>
                </div>
                <div className={expandedListButtonStyle}>
                  <Tooltip tooltipValue={listIconName3}>
                    <img src={CallButton} alt={listIconName3} />
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
              <span className={spanTextClass}>{listItemConnectivityText}</span>
              <span className={spanTextValue}>{connectivityPercentage}</span>
            </div>
            <div className={lineClass}></div>
            <div className={expandedListIconContainer}>
              {listItemIconArray &&
                listItemIconArray.length > 0 &&
                listItemIconArray?.map((item: any, index: number) => {
                  return (
                    <div className={listItemSection} key={index}>
                      <div className={listIemIcon}>
                        <img src={item?.icon} alt="Icons" width={25} />
                      </div>
                      <div className={listIemDetails}>
                        {" "}
                        <div className={listItemIconDetails}>{item?.value}</div>
                        <div className={listItemIconName}>{item?.label}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <div className={collapsedListItem}>
            <div className={listItemTitle}>{title}</div>
            <div className={listItemLocation}>{area}</div>
          </div>
        )}
      </div>
    </>
  );
};
export default DashboardListItems;
