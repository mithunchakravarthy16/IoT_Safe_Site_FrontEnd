import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import SampleVideoContent from "../../assets/AlertsInfoVideo/video";
import VideoDragIcon from "../../assets/videoDragIcon.svg";
import theme from "theme/theme";
import useStyles from "./styles";
import PlayerControls from "elements/PlayerControls";

import screenfull from "screenfull";
import DraggableListItem from "./draggableListItem";

const formate = (seconds: any) => {
  if (isNaN(seconds)) {
    return "00:00";
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }

  return `${mm}:${ss}`;
};

const DraggableList: React.FC<any> = (props) => {
  const { width, height, videoList } = props;
  const [list, setList] = useState<any>(videoList);
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
    dragListItemStyle,
  } = useStyles(appTheme);
  let listItemDrag = useRef<any>();
  let listItemDragOver = useRef<any>();
  const handleDragStart = (event: any, index: number) => {
    listItemDrag.current = index;
    const copyArr = [...list];
    let finalArray: any = [];
    copyArr.forEach((item) => {
      finalArray.push({
        id: item?.id,
        cameraName: item?.cameraName,
        zone: item?.zone,
        isDragging: false,
      });
    });
    finalArray[index].isDragging = true;
    setList(finalArray);
  };
  const handleDragEnter = (event: any, index: number) => {
    listItemDragOver.current = index;
  };
  const handleDragEnd = (event: any, index: number) => {
    const array1 = [...list];
    const array_list_main = array1[listItemDrag.current];
    array1.splice(listItemDrag.current, 1);
    array1.splice(listItemDragOver.current, 0, array_list_main);
    listItemDrag.current = null;
    listItemDragOver.current = null;
    let finalArray: any = [];
    array1.forEach((item) =>
      finalArray.push({
        id: item?.id,
        cameraName: item?.cameraName,
        zone: item?.zone,
        isDragging: false,
      })
    );
    setList(finalArray);
  };
  document.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

 

  return (
    <>
      <div className={dragListContainerStyle}>
        {list?.map((item: any, index: number) => (
            
             <div          
             draggable
             onDragStart={(event) => handleDragStart(event, index)}
             onDragEnter={(event) => handleDragEnter(event, index)}
             onDragEnd={(event) => handleDragEnd(event, index)}
             style={{
               width: width,
               height: height,
             }}
           >
          <DraggableListItem
            item={item}
            index={index}
            width={width}
            height={height}
            videoList={videoList}
          />
          </div>
        ))}
      </div>
    </>
  );
};
export default DraggableList;
