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

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = styled(Slider)({
  // color: "#52af77",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 14,
    width: 14,
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
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { controlWrapper, bottomIcon, volueSlider } = useStyles(appTheme);

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

  console.log("Playercontrolplayed", played);

  return (
    <>
      <div className={controlWrapper}>
        <Grid
          container
          direction="row"
          alignContent="center"
          justifyContent="space-between"
        >
          <Grid item>
            <div>
              {pageName === "infoVideo"
                ? `${aiCamera} C# 3454 | ${zone} 1 `
                : `${item?.cameraName} | ${item?.zone}`}
            </div>
          </Grid>
          <Grid item>
            <IconButton onClick={onToggleFullScreen} className={bottomIcon}>
              <FullscreenIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: "20px" }}
        >
          <Grid item xs={12}>
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
                  <PauseIcon fontSize="small" />
                ) : (
                  <PlayArrowIcon fontSize="small" />
                )}
              </IconButton>

              <IconButton onClick={onMute} className={bottomIcon}>
                {muted ? (
                  <VolumeOffIcon fontSize="small" />
                ) : (
                  <VolumeUpIcon fontSize="small" />
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

              <Button
                variant="text"
                style={{ color: "#fff", marginLeft: "20px" }}
                onClick={onChangeDisplayFormate}
              >
                <span>
                  {elapsedTime}/{totalDuration}
                </span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default PlayerControls;
