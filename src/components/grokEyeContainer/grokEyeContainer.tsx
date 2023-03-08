import { useState, useEffect, Fragment } from "react";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";
import AlertsList from "components/AlertsList";
import AlertsMap from "components/AlertsMap";
import alerts from "mockdata/alerts";
import VideoDragDrop from "elements/Draggable";
import useTranslation from "../../localization/translations";
import useStyles from "./styles";
import { GrokList } from "elements";

const GrokEyeContainer: React.FC<any> = (props) => {
  const {} = props;

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

  const alertsMainList = alerts;

  const [notifications, setNotifications] = useState([]);
  const [notificationTimeStamp, setNotificationTimeStamp] = useState();

  useEffect(() => {
    const { events, alerts, operations } = alertsMainList;
    const combinedNotifications: any = [];

    events?.forEach((event, index) => {
      combinedNotifications.push({ ...event, type: "events" });
    });

    alerts?.forEach((alerts, index) => {
      combinedNotifications.push({ ...alerts, type: "alerts" });
    });

    operations?.forEach((operations, index) => {
      combinedNotifications.push({ ...operations, type: "operations" });
    });

    const dataValue: any = combinedNotifications?.map(
      (value: any, index: number) => {
        return { ...value, index: index + 1 };
      }
    );

    setNotifications(dataValue);
  }, []);

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

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className={alertsContainerMain}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <VideoDragDrop
              videoList={videoList}
              width={480}
              height={275}
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
