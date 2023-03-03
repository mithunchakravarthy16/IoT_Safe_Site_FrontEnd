import { useState, useEffect, Fragment, createRef } from "react";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import theme from "../../theme/theme";

import useStyles from "./styles";
import Tabs from "elements/Tabs";
import {  
    AlertOrangeIcon,
    CallIconBlue,
    DeleteIcon,
  } from "../../assets/InfoDialogueIcons";

  import {  
    SampleVideo,
  } from "../../assets/AlertsInfoVideo/video";
  import {  
    SampleImage,
  } from "../../assets/AlertsInfoVideo/image";
// import HazardousAQI from "../../assets/AlertsInfoVideo/video/HazardousAQI.mp4";


const AlertsInfoContainer: React.FC<any> = (props) => {
  const {
    
  } = props;

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

  const alertSubtabsList = [
    {
      name: "Video",
      val: 0,
    },
    {
      name: "Image",
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
        <div className={alertRightIcons}><img src={AlertOrangeIcon} /></div>
        <div className={alertRightIcons}><img src={CallIconBlue} /></div>
        <div className={alertRightIcons}><img src={DeleteIcon} /></div>
      </div>
      </Grid>
      
      <Grid item xs={12} className={iframVideoContainer}>
        {
          tabIndex === 0 ?
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
        :
        <div className={carImageClass}>
        <img 
        src={SampleImage} 
        width={"100%"}
        className={carImageClass}
        /> 
        </div>    
        }
        
               
      </Grid>
      </>
  );
};
export default AlertsInfoContainer;
