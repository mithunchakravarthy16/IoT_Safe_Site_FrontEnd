import { useState, useEffect } from "react";
import theme from "theme/theme";
import Tooltip from "elements/Tooltip";
import useTranslation from "localization/translations";
import AlertButton from "assets/AlertButton.svg";
import CallButton from "assets/CallButton.svg";
import EyeButton from "assets/EyeButton.svg";
import LocationIcon from "assets/LocationIcon.svg";
import BellRingingIcon from "assets/BellRingingIcon.svg";
import MotionIcon from "assets/MotionIcon.svg";
import OprAlertIcon from "assets/OprAlertIcon.svg";
import TowerIcon from "assets/TowerIcon.svg";
import CloseCalloutIcon from "assets/CloseCalloutIcon.svg";
import TemperatureIcon from "assets/ListInfoIcons/TemperatureIcon.svg";
import BatteryIcon from "assets/ListInfoIcons/BatteryIcon.svg";
import CarbonMonoxideIcon from "assets/ListInfoIcons/CarbonMonoxideIcon.svg";
import HumidityIcon from "assets/ListInfoIcons/HumidityIcon.svg";
import WaterLevelIcon from "assets/ListInfoIcons/WaterLevelIcon.svg";
import DeleteButton from "assets/deleteButton.svg";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

const InfoBox: React.FC<any> = (props) => {
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
      currentTimeStamp,
      subTitle,
      name,
      observation,
      zone,
    },
    toggleInfoWindow,
    singleMarkerId,
    singleMarkerLocation,
    singleCategory,
    key,
    pageName,
    handleInfoDialogue,
  } = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const [listItemIconArray, setListItemIconArray] = useState<any>([]);

  const {
    listItemTitle,
    listItemLocation,
    expandedListItemCallout,
    locationIconStyle,
    listItemIconDetails,
    listIemIcon,
    expandedListIconContainer,
    listItemIconName,
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
    listItemCloseIcon,
    infoIconListContainer,
    itemIconValueStyle,
    itemValueStyle,
    itemNameStyle,
    listItemFooterStyle,
    listItemTimeStyle,
    listItemLocationArea,
    expandedListHeaderAlertsStyle,
  } = useStyles(appTheme);

  const {
    grokEye,
    raiseAlert,
    call,
    connectivity,
    incidents,
    operationAlert,
    motion,
    viewDetails,
    call911,
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

  const handleClose = () => {
    toggleInfoWindow(
      singleMarkerId,
      singleMarkerLocation,
      singleCategory,
      true
    );
  };

  return (
    <>
      {pageName === "Dashboard" ? (
        <div className={expandedListItemCallout} key={key}>
          <div className={expandedListHeaderStyle}>
            <div>
              <div className={listItemTitle}>
                <Typography variant="h6">{title}</Typography>
              </div>
            </div>
            <div className={listItemCloseIcon} onClick={handleClose}>
              <img src={CloseCalloutIcon} />
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
            </div>
            <div className={expandedListButtonContainer}>
              <div
                className={expandedListButtonStyle}
                onClick={() => {
                  handleInfoDialogue(type, id);
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
                        <div className={itemValueStyle}>
                          <Typography variant="h4">{item?.value}</Typography>
                        </div>
                      </div>
                      <div className={itemNameStyle}>
                        <Typography variant="h4">{item?.name}</Typography>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={expandedListItemCallout}>
          <div className={expandedListHeaderAlertsStyle}>
            <div>
              <div className={listItemTitle}>{observation}</div>
            </div>
            <div className={expandedListButtonContainer}>
              <div
                className={expandedListButtonStyle}
                onClick={() => {
                  handleInfoDialogue(observation);
                }}
              >
                <Tooltip tooltipValue={viewDetails}>
                  <img src={EyeButton} alt="Grok Eye" />
                </Tooltip>
              </div>
              <div className={expandedListButtonStyle}>
                <Tooltip tooltipValue={raiseAlert}>
                  <img src={AlertButton} alt="Alert Button" />
                </Tooltip>
              </div>
              <div className={expandedListButtonStyle}>
                <Tooltip tooltipValue={call911}>
                  <img src={CallButton} alt="CallButton" />
                </Tooltip>
              </div>
              <div className={expandedListButtonStyle}>
                <Tooltip tooltipValue={"Delete"}>
                  <img src={DeleteButton} alt="DeleteButton" />
                </Tooltip>
              </div>
            </div>
            <div className={listItemCloseIcon} onClick={handleClose}>
              <img src={CloseCalloutIcon} />
            </div>
          </div>

          <div className={listItemLocationArea}>
            <img
              src={LocationIcon}
              alt="location Icon"
              className={locationIconStyle}
              width={16}
            />
            {area}, {zone}
          </div>
          <div className={lineClass}></div>
          <div className={listItemFooterStyle}>
            {name}

            <span className={listItemTimeStyle}>{currentTimeStamp}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoBox;
