import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";
import AlertsList from "components/AlertsList";
import AlertsMap from "components/AlertsMap";
import alerts from "mockdata/alerts";
import VideoDragDrop from "elements/Draggable";
import useTranslation from "../../localization/translations";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useStyles from "./styles";
import { GrokList } from "elements";

const GrokEyeContainer: React.FC<any> = (props) => {
  const {} = props;

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_ALERTS_DATA",
      payload: {},
    });
  }, []);

  const alertsAPIData = useSelector(
    (state: any) => state?.alertsResponse?.alertsDataValue
  );

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { alertsContainerMain, floorMapContainerStyle } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [selectedNotification, setSelectedNotification] = useState<any>(-1);
  const [alertsMainData, setAlertsMainData] = useState();
  const [tabIndex, setTabIndex] = useState<number>(1);
  const [searchOpen, setSearchOpen] = useState<any>(false);

  const { aiCamera, zone } = useTranslation();

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

  const alertsMainList = alertsAPIData;

  const [notifications, setNotifications] = useState([]);
  const [notificationTimeStamp, setNotificationTimeStamp] = useState();

  useEffect(() => {
    const { events, alerts, operations } = alertsMainList;
    const combinedNotifications: any = [];

    events?.forEach((event:any, index:any) => {
      combinedNotifications.push({ ...event, type: "events" });
    });

    alerts?.forEach((alerts:any, index:any) => {
      combinedNotifications.push({ ...alerts, type: "alerts" });
    });

    operations?.forEach((operations:any, index:any) => {
      combinedNotifications.push({ ...operations, type: "operations" });
    });

    const dataValue: any = combinedNotifications?.map(
      (value: any, index: number) => {
        return { ...value, index: index + 1 };
      }
    );

    setNotifications(dataValue);
  }, [alertsAPIData]);

  let currentTimeStampValue;
  let timeArrayNew: any = [];
  for (let i = 0; i < notifications?.length; i++) {
    currentTimeStampValue = moment()
      .subtract({
        hours: i === 0 ? i : i > 20 ? 20 : i + 1,
        minutes: i + 59,
        seconds: i + 49,
      })
      .format("MM-DD-YYYY | h:mm A");
    timeArrayNew.push({ currentTimeStamp: currentTimeStampValue });
  }

  let alertsData = timeArrayNew?.map((item: any, i: any) =>
    Object.assign({}, item, notifications[i])
  );

  const videoList = [
    { cameraName: `${aiCamera} C# 3454`, zone: `${zone} 1` },
    { cameraName: `${aiCamera} C# 3455`, zone: `${zone} 2` },
    { cameraName: `${aiCamera} C# 3456`, zone: `${zone} 3` },
    { cameraName: `${aiCamera} C# 3457`, zone: `${zone} 4` },
    { cameraName: `${aiCamera} C# 3458`, zone: `${zone} 5` },
    { cameraName: `${aiCamera} C# 3459`, zone: `${zone} 6` },
  ];

  const [dimension, setDimention] = useState({ width: 0, height: 0 });
  // const { width, height } = useWindowDimensions();
  const [chartWidth, setChartWidth] = useState<number>(480);
  const [chartHeight, setChartHeight] = useState<number>(275);
  console.log(chartHeight, chartWidth);

  useEffect(() => {
    if (dimension.width <= 1024) {
      setChartWidth(410);
      setChartHeight(135);
    } else if (dimension.height <= 600) {
      setChartWidth(410);
      setChartHeight(80);
    } else if (dimension.height <= 633) {
      setChartWidth(410);
      setChartHeight(100);
    } else if (dimension.height <= 720) {
      setChartWidth(410);
      setChartHeight(118);
    } else if (dimension.height <= 768) {
      setChartWidth(410);
      setChartHeight(140);
    } else if (dimension.height <= 800) {
      setChartWidth(410);
      setChartHeight(150);
    } else if (dimension.height <= 820) {
      setChartWidth(410);
      setChartHeight(160);
    } else if (dimension.height <= 820) {
      setChartWidth(410);
      setChartHeight(160);
    } else if (dimension.height <= 881) {
      setChartWidth(410);
      setChartHeight(160);
    } else if (dimension.height <= 900) {
      setChartWidth(410);
      setChartHeight(176);
    } else if (dimension.height <= 937) {
      setChartWidth(410);
      setChartHeight(176);
    } else if (dimension.height <= 960) {
      setChartWidth(410);
      setChartHeight(204);
    } else if (dimension.height <= 1024) {
      setChartWidth(410);
      setChartHeight(183);
    } else if (dimension.height <= 1050) {
      setChartWidth(410);
      setChartHeight(215);
    } else if (dimension.height <= 1080) {
      setChartWidth(410);
      setChartHeight(220);
    } else if (dimension.height <= 1201) {
      setChartWidth(410);
      setChartHeight(260);
    } else if (dimension.height <= 1280) {
      setChartWidth(410);
      setChartHeight(280);
    } else if (dimension.height <= 1600) {
      setChartWidth(410);
      setChartHeight(392);
    } else if (dimension.width <= 1152) {
      setChartWidth(410);
      setChartHeight(142);
    } else if (dimension.width <= 1280) {
      setChartWidth(410);
      setChartHeight(210);
    } else if (dimension.width <= 1280) {
      setChartWidth(410);
      setChartHeight(210);
    } else if (dimension.width <= 1280) {
      setChartWidth(410);
      setChartHeight(210);
    } else if (dimension.width <= 1366) {
      setChartWidth(410);
      setChartHeight(94);
    } else if (dimension.width <= 1536) {
      setChartWidth(410);
      setChartHeight(150);
    } else if (dimension.width <= 1600) {
      setChartWidth(410);
      setChartHeight(158);
    } else if (dimension.width <= 1680) {
      setChartWidth(410);
      setChartHeight(200);
    } else if (dimension.width <= 1792) {
      setChartWidth(410);
      setChartHeight(230);
    } else if (dimension.width <= 1792) {
      setChartWidth(410);
      setChartHeight(230);
    } else if (dimension.width <= 2560) {
      setChartWidth(410);
      setChartHeight(170);
    } else if (dimension.width <= 2732) {
      setChartWidth(410);
      setChartHeight(540);
    } else if (dimension.width <= 3072) {
      setChartWidth(410);
      setChartHeight(622);
    } else if (dimension.width <= 3840) {
      setChartWidth(410);
      setChartHeight(575);
    } else if (dimension.width <= 5120) {
      setChartWidth(410);
      setChartHeight(750);
    } else if (dimension.width <= 5760) {
      setChartWidth(410);
      setChartHeight(930);
    }
  }, [dimension.width, dimension.height]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimention({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className={alertsContainerMain}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <VideoDragDrop
              videoList={videoList}
              width={chartWidth}
              height={chartHeight}
              rowSize={2}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <GrokList />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            {alertsData && alertsData?.length > 0 ? (
              <AlertsList
                setSelectedNotification={setSelectedNotification}
                selectedNotification={selectedNotification}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                setNotificationTimeStamp={setNotificationTimeStamp}
                alertsData={alertsData}
                alertsMainList={alertsMainList}
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
export default GrokEyeContainer;
