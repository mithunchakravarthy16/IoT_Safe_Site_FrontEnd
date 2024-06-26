import { useState, useEffect, Fragment, createRef } from "react";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import theme from "../../theme/theme";
import Tooltip from "elements/Tooltip";
import useStyles from "./styles";
import Tabs from "elements/Tabs";
import {
  AlertOrangeIcon,
  CallIconBlue,
  DeleteIcon,
} from "../../assets/InfoDialogueIcons";

import SampleVideoContent from "../../assets/AlertsInfoVideo/video";
import { SampleImage } from "../../assets/AlertsInfoVideo/image";
import useTranslation from "localization/translations";
// import HazardousAQI from "../../assets/AlertsInfoVideo/video/HazardousAQI.mp4";

const AlertsInfoContainer: React.FC<any> = (props) => {
  const {} = props;

  let {SampleVideo}= SampleVideoContent;
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    alertSubListRow1,
    alertCustomNotificationTabs,
    alertSubListRightSide,
    alertRightIcons,
    iframVideoContainer,
    carImageClass,
  } = useStyles(appTheme);

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

  const {video, image,}= useTranslation()

  const alertSubtabsList = [
    {
      name: video,
      val: 0,
    },
    {
      name: image,
      val: 1,
    },
  ];

  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleTabs = (index: number) => {
    setTabIndex(index);
  };

  return (
    <>
      <Grid item xs={12} className={alertSubListRow1}>
        <div>
          <Tabs
            initialIndex={0}
            tabsList={alertSubtabsList}
            handleTabs={handleTabs}
            dashboardNotificationClassName={alertCustomNotificationTabs}
            pageName={"infoDialogue"}
          />
        </div>
        <div className={alertSubListRightSide}>
          <div className={alertRightIcons}>
            <Tooltip tooltipValue={"Raise Alert"}>
              <img src={AlertOrangeIcon} />
            </Tooltip>
          </div>
          <div className={alertRightIcons}>
            <Tooltip tooltipValue={"Call 911"}>
              <img src={CallIconBlue} />
            </Tooltip>
          </div>
          <div className={alertRightIcons}>
            <Tooltip tooltipValue={"Delete"}>
              <img src={DeleteIcon} />
            </Tooltip>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} className={iframVideoContainer}>
        {tabIndex === 0 ? (
          <ReactPlayer
            playing
            muted
            controls={true}
            // className={videoPlayerClass}
            url={SampleVideo}
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload nofullscreen",
                },
              },
            }}
          />
        ) : (
          <div className={carImageClass}>
            <img src={SampleImage} width={"100%"} className={carImageClass} />
          </div>
        )}
      </Grid>
    </>
  );
};
export default AlertsInfoContainer;
