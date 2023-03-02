import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import LocationIcon from "../../assets/locationIcon.svg";
import AlertButton from "../../assets/alertsButton.svg";
import CallButton from "../../assets/callButton.svg";
import DeleteButton from "../../assets/deleteButton.svg";
import useTranslation from "../../localization/translations";
import Tooltip from "elements/Tooltip";
import useStyles from "./styles";

const AlertsListItem: React.FC<any> = (props) => {
  const {} = props;

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
  } = useStyles(appTheme);

  const {} = useTranslation();

  return (
    <>
      <div
        className={listItemContainer}
        // onClick={() => handleExpandListItem(id, index, currentTimeStamp)}
        // ref={refs[id]}
      >
        Alert List Item
        {/* {selectedNotification === index ? (
          <div className={expandedListItem}>
            <div className={expandedListHeaderStyle}>
              <div>
                <div className={listItemTitle}>{title}</div>
                {subTitle ? (
                  <div className={expandedSubtitle}>{subTitle}</div>
                ) : (
                  ""
                )}
              </div>
              <div className={expandedListButtonContainer}>
                <div className={expandedListButtonStyle}>
                  <Tooltip tooltipValue={"Raise alert"}>
                    <img src={AlertButton} alt="Alert Button" />
                  </Tooltip>
                </div>
                <div className={expandedListButtonStyle}>
                  <Tooltip tooltipValue={"Call"}>
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
              {area}
            </div>

            <div className={listItemFooterStyle}>
              {name}

              <span className={listItemTimeStyle}>{currentTimeStamp}</span>
            </div>
          </div>
        ) : (
          <div className={collapsedListItem}>
            <div className={listItemTitle}>{title}</div>
            <div className={listItemLocation}>
              <img
                src={LocationIcon}
                alt="location Icon"
                className={locationIconStyle}
                width={16}
              />
              {area}
            </div>
            <div className={listItemFooterStyle}>
              {name}

              <span className={listItemTimeStyle}>{currentTimeStamp}</span>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};
export default AlertsListItem;
