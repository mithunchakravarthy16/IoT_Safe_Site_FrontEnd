import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import DraggableList from "react-draggable-lists";
import ReactPlayer from "react-player";
import SampleVideoContent from "../../assets/AlertsInfoVideo/video";
import VideoDragIcon from "../../assets/videoDragIcon.svg";
import theme from "theme/theme";
import screenfull from 'screenfull';

import useStyles from "./styles";
import PlayerControls from "elements/PlayerControls";

const formate = (seconds: any)=>{
  if(isNaN(seconds)){
    return "00:00"
  }
  const date = new Date(seconds*1000)
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2,"0");
  
  if(hh){
    return `${hh}:${mm.toString().padStart(2,"0")}:${ss}`
  }
  
  return `${mm}:${ss}`
  }

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

  const playerContainerRef = useRef<any>(null);

 const playerRef = useRef<any>(null);


  const[state, setSate]= useState<any>({playing: true, muted: true, volume: 50, playbackRate:1.0, played: 0, seeking: false});

  const{playing, muted, volume, playbackRate, played, seeking}=state;
console.log("played", played)
  const handlePlayPause = ()=>{

    setSate({...state, playing: !state.playing})

  }

 

  const handleMute = ()=>{
    setSate({...state, muted: !state.muted})
  }

  const handleVolumeChange = (e: any, newValue: any)=>{
    
    setSate(
      {...state,
      volume: (newValue/100),
       muted: newValue === 0 ? true : false,
      }
       )
  }

  const handleVolumeSeekDown = (e: any, newValue: any)=> {
    
    setSate(
      {...state,
      volume: (newValue/100).toFixed(2),
       muted: newValue === 0 ? true : false,
      }
       )
  }

  const handlePlaybackRateChange = (rate:any)=>{
    setSate({...state, playbackRate: rate})
  }

  const toggleFullScreen = ()=> {
    
    screenfull.toggle(playerContainerRef.current)
  }

  const handleProgress = (changeState: any)=> {
  
   if(!state.seeking){
    setSate({...state, ...changeState})
   }
    
  }

  const handleSeekChange = (e: any, newValue: any)=>{
    
    setSate({...state, played: (newValue/100).toFixed(2)}) 
  }

  const handleSeekMouseDown = (e: any)=>{
    
    setSate({...state, seeking: true}) 
  }

  const handleSeekMouseUp = (e: any, newValue: any)=>{
    
    setSate({...state, seeking: false}) 
    playerRef.current.seekTo(newValue/100)
  }

  const [timeDisplayFormate, setTimeDisplayFormate] = useState("normal")

  const currentTimeVideo : any = playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
  const duration : any = playerRef.current ? playerRef.current.getDuration() : "00:00";

  const elapsedTime = timeDisplayFormate === "normal" ? formate(currentTimeVideo) : `-${duration-currentTimeVideo}`;
  const totalDuration = formate(duration);

  const handleChangeDisplayFormate = ()=>{
    setTimeDisplayFormate( timeDisplayFormate === "normal" ? "remaining" : "normal") 
  }
  

  return (
    <div>
      <div className={dragListContainerStyle}>
        <DraggableList width={width} height={height} rowSize={rowSize}>
          {videoList?.map((item: any, i: number) => (
            console.log("dfdac"),
            <div ref = {playerContainerRef} className={videoBoxStyle}>
              
              {/* <div className={cameraTitleName}>
                {" "}
                <div>
                  {item?.cameraName} | {item?.zone}
                </div>
                <div className={dragIconImageStyle}>
                  <img src={VideoDragIcon} alt="VideoDragIcon" />
                </div>
              </div> */}
              <ReactPlayer
                width="100%"
                height="100%"
                ref={playerRef}
                playing={playing}
                muted={muted}
                loop
                volume={volume}
                playbackRate={playbackRate}
                onProgress={handleProgress}
                // controls={true}
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
              <PlayerControls
                  onPlayPause={handlePlayPause}
                  playing={playing}
                  muted={muted}
                  onMute={handleMute}
                  onVolumeChange={handleVolumeChange}
                  onVolumeSeekUp={handleVolumeSeekDown}
                  volume={volume}
                  // playbackRate={playbackRate}
                  // onPlaybackRateChange={handlePlaybackRateChange}
                  onToggleFullScreen = {toggleFullScreen}
                  played={played}
                  onSeek={handleSeekChange}
                  onSeekMouseDown={handleSeekMouseDown}
                  onSeekMouseUp={handleSeekMouseUp}
                  elapsedTime={elapsedTime}
                  totalDuration={totalDuration}
                  onChangeDisplayFormate={handleChangeDisplayFormate}
                  />
            </div>
          ))}
        </DraggableList>
      </div>
    </div>
  );
};

export default VideoDragDrop;
