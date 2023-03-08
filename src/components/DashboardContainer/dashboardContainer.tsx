import { useState, useEffect, Fragment } from "react";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme/theme";
import DashboardMap from "components/DashboardMap";
import DashboardList from "../DashboardList";
// import dashboardEquipments from "../../mockdata/dashboardEquipments";
import useStyles from "./styles";
import { getDashboardData } from "redux/actions/dashboardActions";

const DashboardContainer: React.FC<any> = (props) => {
  const {} = props;

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getDashboardData({}));
  }, []);

  const dashboardApiData = useSelector(
    (state: any) => state?.dashboardResponse?.dashboardDataValue
  );

  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const {} = useStyles(appTheme);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [selectedNotification, setSelectedNotification] = useState<number>(-1);
  const [equipmentData, setEquipmentData] = useState<any>();
  const [searchOpen, setSearchOpen] = useState<any>(false);

  const dashboardData = dashboardApiData;

  const { dashboardRootContainer } = useStyles(appTheme);

  useEffect(() => {
    const { aiCameras, envrSensors, floodSensors } = dashboardData;
    const combinedNotifications: any = [];

    aiCameras?.list?.forEach((aiCameras: any, index: number) => {
      combinedNotifications.push({ ...aiCameras, type: "aiCameras" });
    });

    envrSensors?.list?.forEach((envrSensors: any, index: number) => {
      combinedNotifications.push({ ...envrSensors, type: "envrSensors" });
    });

    floodSensors?.list?.forEach((floodSensors: any, index: number) => {
      combinedNotifications.push({ ...floodSensors, type: "floodSensors" });
    });

    const dataValue: any = combinedNotifications?.map(
      (value: any, index: number) => {
        return { ...value, index: index + 1 };
      }
    );

    setEquipmentData(dataValue);
  }, [dashboardData]);

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
        <Grid container className={dashboardRootContainer}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={9}>
            <DashboardMap
              equipmentData={equipmentData}
              selectedNotification={selectedNotification}
              setSelectedNotification={setSelectedNotification}
              setTabIndex={setTabIndex}
              pageName={"Dashboard"}
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
            {equipmentData?.length > 0 ? (
              <DashboardList
                setTabIndex={setTabIndex}
                tabIndex={tabIndex}
                equipmentData={equipmentData}
                dashboardEquipmentsMain={dashboardData}
                selectedNotification={selectedNotification}
                setSelectedNotification={setSelectedNotification}
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
export default DashboardContainer;
