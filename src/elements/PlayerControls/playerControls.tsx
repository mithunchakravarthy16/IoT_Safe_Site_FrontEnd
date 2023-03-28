import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import theme from "../../theme/theme";
import PauseIcon from "@mui/icons-material/Pause";
import useStyles from "./styles";
import useTranslation from "localization/translations";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VideoDragIcon from "../../assets/videoDragIcon.svg";
import Typography from "@mui/material/Typography";

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = styled(Slider)({
  color: "#5A5757",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const PlayerControls: React.FC<any> = (props) => {
  const {
    onPlayPause,
    playing,
    muted,
    onMute,
    onVolumeChange,
    onVolumeSeekUp,
    volume,
    playbackRate,
    onPlaybackRateChange,
    played,
    onSeek,
    onSeekMouseDown,
    onSeekMouseUp,
    elapsedTime,
    totalDuration,
    onChangeDisplayFormate,
    onToggleFullScreen,
    item,
    pageName,
    zoneNumber,
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    controlWrapper,
    bottomIcon,
    volueSlider,
    fullScreenIcon,
    VideoDragIconClass,
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

  const { aiCamera, zone } = useTranslation();

  return (
    <>
      <div className={controlWrapper}>
        <Grid
          container
          direction="row"
          alignContent="center"
          justifyContent="space-between"
          alignItems="center"
          style={{ background: "rgba(30, 31, 32, 63%)",  backdropFilter: "blur(2.5px)", paddingLeft:"10px"}}
        >
          <Grid item >
            <div>
            <Typography variant="h4">
              {pageName === "infoVideo"
                ? `${aiCamera} C# 3454 | ${zone} ${zoneNumber} `
                : `${item?.cameraName} | ${item?.zone}`}
                </Typography>
            </div>
          </Grid>
          <Grid item>
            <IconButton onClick={onToggleFullScreen} className={fullScreenIcon}>
              <FullscreenIcon fontSize = {pageName === "infoVideo" ? "large" : "small"} />
            </IconButton>
            {pageName !== "infoVideo" ? 
            <img
            src={VideoDragIcon}
            alt="VideoDragIcon"
            width={6}
            style={{
              color: "#fff !important",
              marginRight: "18px",
              position: "absolute",
              right: "-6px",
              top: "12px",
            }}
          />
          : null}
            
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: "0px 20px" }}
        >
          <Grid item xs={12} style={{ height: "25px" }}>
            <PrettoSlider
              valueLabelDisplay="auto"
              min={0}
              max={100}
              value={played * 100}
              // step={0.001}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
              slots={{
                valueLabel: (props: any) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container alignItems="center" direction="row">
              <IconButton onClick={onPlayPause} className={bottomIcon}>
                {playing && played !== 1 ? (
                  <PauseIcon fontSize={pageName === "infoVideo" ? "large" : "small"} />
                ) : (
                  <PlayArrowIcon fontSize={pageName === "infoVideo" ? "large" : "small"} />
                )}
              </IconButton>

              <IconButton onClick={onMute} className={bottomIcon}>
                {muted ? (
                  <VolumeOffIcon fontSize={pageName === "infoVideo" ? "large" : "small"} />
                ) : (
                  <VolumeUpIcon fontSize={pageName === "infoVideo" ? "large" : "small"} />
                )}
              </IconButton>

              <Slider
                min={0}
                max={100}
                value={volume * 100}
                className={volueSlider}
                onChange={onVolumeChange}
                onChangeCommitted={onVolumeSeekUp}
              />

              <div
                // variant="text"
                style={{ color: "#fff", marginLeft: "20px" }}
                onClick={onChangeDisplayFormate}
              >
                <span>
                  {elapsedTime}/{totalDuration}
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default PlayerControls;
