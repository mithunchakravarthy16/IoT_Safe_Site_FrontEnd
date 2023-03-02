import { useState, useEffect, Fragment } from "react";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";
import AlertsList from "components/AlertsList";
import AlertsMap from "components/AlertsMap";
import alerts from "mockdata/alerts";
import useStyles from "./styles";

const AlertsContainer: React.FC<any> = (props) => {
  const {} = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const { alertsContainerMain, floorMapContainerStyle } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [selectedNotification, setSelectedNotification] = useState<any>(-1);
  const [alertsMainData, setAlertsMainData] = useState();
  const [tabIndex, setTabIndex] = useState<number>(1);

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
        return { ...value, id: index + 1, index: index + 1 };
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

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container className={alertsContainerMain}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
            <AlertsMap />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            {alertsData && alertsData?.length > 0 ? (
              <AlertsList
                setSelectedNotification={setSelectedNotification}
                selectedNotification={selectedNotification}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                setNotificationTimeStamp={setNotificationTimeStamp}
                alertsData={alertsData}
                alertsMainList={alertsMainList}
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
export default AlertsContainer;
