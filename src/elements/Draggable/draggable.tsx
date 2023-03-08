import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import DraggableList from "react-draggable-lists";
import ReactPlayer from "react-player";
import SampleVideoContent from "../../assets/AlertsInfoVideo/video";
import VideoDragIcon from "../../assets/videoDragIcon.svg";
import theme from "theme/theme";

import useStyles from "./styles";

const VideoDragDrop: React.FC<any> = (props) => {
  const { videoList, width, height, rowSize } = props;
  let { SampleVideo } = SampleVideoContent;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

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

  const {
    cameraTitleName,
    videoBoxStyle,
    dragListContainerStyle,
    dragIconImageStyle,
  } = useStyles(appTheme);

  return (
    <div>
      <div className={dragListContainerStyle}>
        <DraggableList width={width} height={height} rowSize={rowSize}>
          {videoList?.map((item: any, i: number) => (
            <div className={videoBoxStyle}>
              <div className={cameraTitleName}>
                {" "}
                <div>
                  {item?.cameraName} | {item?.zone}
                </div>
                <div className={dragIconImageStyle}>
                  <img src={VideoDragIcon} alt="VideoDragIcon" />
                </div>
              </div>
              <ReactPlayer
                width="100%"
                height="100%"
                playing
                loop
                muted
                controls={true}
                // className={videoPlayerClass}
                url={SampleVideo}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </div>
          ))}
        </DraggableList>
      </div>
    </div>
  );
};

export default VideoDragDrop;
