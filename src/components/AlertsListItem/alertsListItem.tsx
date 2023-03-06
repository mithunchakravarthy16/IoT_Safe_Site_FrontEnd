import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import GrayLocationIcon from "../../assets/GrayLocationIcon.svg";
import LocationIcon from "../../assets/LocationIcon.svg";
import AlertButton from "../../assets/alertsButton.svg";
import CallButton from "../../assets/CallButton.svg";
import EyeButton from "../../assets/EyeButton.svg";
import DeleteButton from "../../assets/deleteButton.svg";
import useTranslation from "../../localization/translations";
import Tooltip from "elements/Tooltip";
import useStyles from "./styles";

const AlertsListItem: React.FC<any> = (props) => {
  const {
    data,
    data: {
      title,
      area,
      id,
      currentTimeStamp,
      subTitle,
      name,
      index,
      observation,
      zone,
    },
    handleExpandListItem,
    selectedNotification,
    handleViewDialogue,
    refs,
    notificationTimeStamp,
    handleInfoDialogue,
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
    listItemContainer,
    listItemTitle,
    listItemLocation,
    expandedListItem,
    collapsedListItem,
    locationIconStyle,
    expandedListHeaderStyle,
    listItemFooterStyle,
    listItemIconName,
    listItemTimeStyle,
    listItemSection,
    expandedListButtonContainer,
    expandedListButtonStyle,
    expandedSubtitle,
    lineClass,
  } = useStyles(appTheme);

  const { call911, viewDetails, raiseAlert } = useTranslation();

  return (
    <>
      <div
        className={listItemContainer}
        onClick={() => handleExpandListItem(index, currentTimeStamp)}
        // ref={refs[id]}
      >
        {selectedNotification === index ? (
          <div className={expandedListItem}>
            <div className={expandedListHeaderStyle}>
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
            </div>

            <div className={listItemLocation}>
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
        ) : (
          <div className={collapsedListItem}>
            <div className={listItemTitle}>{observation}</div>
            <div className={listItemLocation}>
              <img
                src={GrayLocationIcon}
                alt="location Icon"
                className={locationIconStyle}
                width={16}
              />
              {zone}
            </div>
            <div className={lineClass}></div>

            <div className={listItemFooterStyle}>
              {area}
              <span className={listItemTimeStyle}>{currentTimeStamp}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default AlertsListItem;
