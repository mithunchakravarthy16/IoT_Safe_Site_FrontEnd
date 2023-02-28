import { useState, useEffect, Fragment } from "react";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import theme from "../../theme/theme";
import DashboardMap from "components/DashboardMap";
import DashboardList from "../DashboardList";
import dashboardEquipments from "../../mockdata/dashboardEquipments";
import useStyles from "./styles";

const DashboardContainer: React.FC<any> = (props) => {
  const {} = props;

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const { fullscreenMapStyle, fullscreenMapInnerStyle } = useStyles(appTheme);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [selectedNotification, setSelectedNotification] = useState<number>(-1);
  const [equipmentData, setEquipmentData] = useState<any>();
  const dashboardData = dashboardEquipments;

  useEffect(() => {
    const { aiCameras, envrSensors, floodSensors } = dashboardEquipments;
    const combinedNotifications: any = [];

    aiCameras?.list?.forEach((aiCameras, index) => {
      combinedNotifications.push({ ...aiCameras, type: "aiCameras" });
    });

    envrSensors?.list?.forEach((envrSensors, index) => {
      combinedNotifications.push({ ...envrSensors, type: "envrSensors" });
    });

    floodSensors?.list?.forEach((floodSensors, index) => {
      combinedNotifications.push({ ...floodSensors, type: "floodSensors" });
    });

    const dataValue: any = combinedNotifications?.map(
      (value: any, index: number) => {
        return { ...value, id: index + 1, index: index + 1 };
      }
    );

    setEquipmentData(dataValue);
  }, []);

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

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
            <DashboardMap />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            {equipmentData?.length > 0 ? (
              <DashboardList
                setTabIndex={setTabIndex}
                tabIndex={tabIndex}
                equipmentData={equipmentData}
                dashboardEquipmentsMain={dashboardEquipments}
                selectedNotification={selectedNotification}
                setSelectedNotification={setSelectedNotification}
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
export default DashboardContainer;
