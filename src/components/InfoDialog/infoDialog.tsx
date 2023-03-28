import React, { useState, useEffect, useRef, useMemo } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import useTranslation from "../../localization/translations";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InfoSubList from "../InfoSubList";

// import dashboardInfoWindow from "../../mockdata/dashboardInfoWindow";
import Tabs from "../../elements/Tabs";

import theme from "../../theme/theme";
import colorCodes from "../../theme/colors";
import useStyles from "./styles";
import Select from "../../elements/Select";
import Chart from "../../elements/Chart";
import Typography from "@mui/material/Typography";
import moment from "moment";
import useWindowDimensions from "hooks/useWindowDimensions";
import TitleInfoSubList from "components/TitleInfoSubList";
import ReactPlayer from "react-player";
import AlertsInfoContainer from "components/AlertsInfoContainer";
import SampleVideoContent from "../../assets/AlertsInfoVideo/video";
import RealTimeChart from "elements/RealTimeChart";
import { FullScreenIcon } from "../../assets/InfoDialogueIcons";
import { getDashboardInfoWindowData } from "redux/actions/dashboardInfoWindowActions";
import { useDispatch, useSelector } from "react-redux";
import screenfull from "screenfull";
import PlayerControls from "elements/PlayerControls";

const DialogWrapper = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    display: "none",
    // marginTop: "60px !important",
  },
  "& .MuiPaper-root": {
    maxHeight: "calc(100% - 96px)",
    width: "100vw",
    maxWidth: "1722px",
    background: `${colorCodes.colorBlack} !important`,
    color: colorCodes.colorWhite,
    padding: 24,
    borderRadius: "15px",
  },
  "& .MuiDialog-container": {
    marginTop: "84px !important",
    background: `${colorCodes.lightWhiteRgba2} !important`,
    backdropFilter: "blur(8px)",
    height: "calc(100vh - 84px) !important",
  },
}));

interface ChildComponentProps {
  widthMemo: number;
  heightMemo: number;
  selectedRealTimeGraph: string;
  graphTitle: string | undefined;
}

const RealTimeGraph1 = React.memo<ChildComponentProps>(
  ({
    widthMemo: chartWidth,
    heightMemo: chartHeight,
    selectedRealTimeGraph: selectedRealTimeGraph1,
    graphTitle: graphOneTitle,
  }) => {
    return (
      <RealTimeChart
        minWidth={chartWidth}
        height={chartHeight}
        pageName={"infoDialogue"}
        // selectedRealTimeGraph1={selectedRealTimeGraph1}
        graphTitle={graphOneTitle}
      />
    );
  }
);

const RealTimeGraph2 = React.memo<ChildComponentProps>(
  ({
    widthMemo: chartWidth,
    heightMemo: chartHeight,
    selectedRealTimeGraph: selectedRealTimeGraph1,
    graphTitle: graphTwoTitle,
  }) => {
    return (
      <RealTimeChart
        minWidth={chartWidth}
        height={chartHeight}
        pageName={"infoDialogue"}
        // selectedRealTimeGraph1={selectedRealTimeGraph1}
        graphTitle={graphTwoTitle}
      />
    );
  }
);

const RealTimeGraph3 = React.memo<ChildComponentProps>(
  ({
    widthMemo: chartWidth,
    heightMemo: chartHeight,
    selectedRealTimeGraph: selectedRealTimeGraph1,
    graphTitle: graphThreeTitle,
  }) => {
    return (
      <RealTimeChart
        minWidth={chartWidth}
        height={chartHeight}
        pageName={"infoDialogue"}
        // selectedRealTimeGraph1={selectedRealTimeGraph1}
        graphTitle={graphThreeTitle}
      />
    );
  }
);

const RealTimeGraph4 = React.memo<ChildComponentProps>(
  ({
    widthMemo: chartWidth,
    heightMemo: chartHeight,
    selectedRealTimeGraph: selectedRealTimeGraph1,
    graphTitle: graphFourTitle,
  }) => {
    return (
      <RealTimeChart
        minWidth={chartWidth}
        height={chartHeight}
        pageName={"infoDialogue"}
        // selectedRealTimeGraph1={selectedRealTimeGraph1}
        graphTitle={graphFourTitle}
      />
    );
  }
);

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

const InfoDialog: React.FC<any> = (props) => {
  let { SampleVideo } = SampleVideoContent;
  const {
    selectedType,
    selectedId,
    setShowInfoDialogue,
    pageName,
    selectedTitle,
  } = props;

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    headerStyle,
    headerRightContentStyle,
    tripsSection1,
    tripsSection,

    tripsSection2,
    subListRow,
    subListRow1,

    subListSection,

    customNotificationTabs,
    incomeCurrentSection,
    incomeText,

    iframVideoContainer,
    fullScreenIconImgStyle,
    cameraTitleName,
    videoContainer,
    controlWrapper,
    bottomIcon,
    volueSlider,
  } = useStyles(appTheme);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getDashboardInfoWindowData({}));
  }, []);

  const dashboardInfoWindowApiData = useSelector(
    (state: any) =>
      state?.dashboardInfoWindowResponse?.dashboardInfoWindowDataValue
  );

  const dashboardInfoWindow = dashboardInfoWindowApiData;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const {
    temperature,
    humidity,
    carbonMonoxide,
    voc,
    waterLevel,
    rainfall,
    aiCamera,
    zone,
  } = useTranslation();

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

  const [equipmentViewDetailsItem, setEquipmentViewDetailsItem] = useState<any>(
    dashboardInfoWindow?.envrSensorInfoData?.map((item: any) => {
      if (item?.id === selectedId) {
        return item;
      }
    })
  );

  const { width, height } = useWindowDimensions();
  const [chartWidth, setChartWidth] = useState<number>(100);
  const [chartHeight, setChartHeight] = useState<number>(200);

  // useEffect(() => {
  //   if (width <= 1024) {
  //     setChartWidth(410);
  //     setChartHeight(141);
  //   } else if (height <= 600) {
  //     setChartWidth(410);
  //     setChartHeight(68);
  //   }
  //   // else if (height <= 633) {
  //   //   setChartWidth(410);
  //   //   setChartHeight(60);
  //   // }
  //   else if (height <= 720) {
  //     setChartWidth(410);
  //     setChartHeight(118);
  //   } else if (height <= 768) {
  //     setChartWidth(410);
  //     setChartHeight(110);
  //   } else if (height <= 800) {
  //     setChartWidth(410);
  //     setChartHeight(150);
  //   } else if (height <= 820) {
  //     setChartWidth(410);
  //     setChartHeight(160);
  //   } else if (height <= 824) {
  //     setChartWidth(410);
  //     setChartHeight(140);
  //   } else if (height <= 900) {
  //     setChartWidth(410);
  //     setChartHeight(160);
  //   } else if (height <= 937) {
  //     setChartWidth(410);
  //     setChartHeight(176);
  //   } else if (height <= 960) {
  //     setChartWidth(410);
  //     setChartHeight(185);
  //   } else if (height <= 1024) {
  //     setChartWidth(410);
  //     setChartHeight(183);
  //   } else if (height <= 1050) {
  //     setChartWidth(410);
  //     setChartHeight(170);
  //   } else if (height <= 1120) {
  //     setChartWidth(410);
  //     setChartHeight(183);
  //   } else if (width <= 1152) {
  //     setChartWidth(410);
  //     setChartHeight(142);
  //   } else if (width <= 1280) {
  //     setChartWidth(410);
  //     setChartHeight(210);
  //   } else if (width <= 1280) {
  //     setChartWidth(410);
  //     setChartHeight(210);
  //   } else if (width <= 1280) {
  //     setChartWidth(410);
  //     setChartHeight(210);
  //   } else if (width <= 1366) {
  //     setChartWidth(410);
  //     setChartHeight(94);
  //   } else if (width <= 1600) {
  //     setChartWidth(410);
  //     setChartHeight(158);
  //   } else if (width <= 1680) {
  //     setChartWidth(410);
  //     setChartHeight(170);
  //   } else if (width <= 2000) {
  //     setChartWidth(410);
  //     setChartHeight(146);
  //   } else if (width <= 2732) {
  //     setChartWidth(410);
  //     setChartHeight(187);
  //   }
  // }, [width, height]);

  useEffect(() => {
    if (selectedType === "aiCameras") {
      dashboardInfoWindow?.aiCamerasInfoData?.map((item: any) => {
        if (item?.id === selectedId) {
          setEquipmentViewDetailsItem(item);
        }
      });
    } else if (selectedType === "envrSensors") {
      dashboardInfoWindow?.envrSensorInfoData?.map((item: any) => {
        if (item?.id === selectedId) {
          setEquipmentViewDetailsItem(item);
        }
      });
    } else if (selectedType === "floodSensors") {
      dashboardInfoWindow?.floodSensorInfoData?.map((item: any) => {
        if (item?.id === selectedId) {
          setEquipmentViewDetailsItem(item);
        }
      });
    }
  }, [selectedType, selectedId, dashboardInfoWindow]);

  const zoneNumber = selectedId && selectedId?.charAt(selectedId?.length - 1);

  const [open, setOpen] = useState(!false);

  const handleClose = () => {
    setOpen(!open);
    setShowInfoDialogue(false);
  };

  const [infoSubList, setInfoSubList] = useState<any>(
    equipmentViewDetailsItem?.infoIconList
  );

  const tabsList = [
    {
      name:
        equipmentViewDetailsItem?.title && equipmentViewDetailsItem?.area
          ? `${equipmentViewDetailsItem?.title} - ${equipmentViewDetailsItem?.area}`
          : selectedTitle
          ? selectedTitle
          : "",
      val: 0,
    },
  ];

  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleTabs = (index: number) => {
    setTabIndex(index);
  };

  const [tempratureGraphData, setTempratureGraphData] = useState<any>();
  const [humidityGraphData, setHumidityGraphData] = useState<any>();
  const [hoursOfOperationGraphData, setHoursOfOperationGraphData] =
    useState<any>();
  const [tripsGraphData, setTripsGraphData] = useState<any>();

  const [tempratureGraphDataStateUpdates, setTempratureGraphDataStateUpdates] =
    useState<any>();
  const [humidityGraphDataStateUpdates, setHumidityGraphDataStateUpdates] =
    useState<any>();
  const [
    hoursOfOperationGraphDataStateUpdates,
    setHoursOfOperationGraphDataStateUpdates,
  ] = useState<any>();
  const [tripsGraphDataStateUpdates, setTripsGraphDataStateUpdates] =
    useState<any>();

  const [graphOneTitle, setGraphOneTitle] = useState<string>();
  const [graphTwoTitle, setGraphTwoTitle] = useState<string>();
  const [graphThreeTitle, setGraphThreeTitle] = useState<string>();
  const [graphFourTitle, setGraphFourTitle] = useState<string>();

  useEffect(() => {
    setInfoSubList(equipmentViewDetailsItem?.infoIconList);

    equipmentViewDetailsItem?.analytics?.map((data: any, index: number) => {
      switch (index) {
        case 0:
          setTempratureGraphDataStateUpdates(data?.data?.weekly?.analyticsData);
          setTempratureGraphData(data?.data);
          setGraphOneTitle(data?.type);

          break;
        case 1:
          setHumidityGraphDataStateUpdates(data?.data?.weekly?.analyticsData);
          setHumidityGraphData(data?.data);
          setGraphTwoTitle(data?.type);
          break;
        case 2:
          setHoursOfOperationGraphDataStateUpdates(
            data?.data?.weekly?.analyticsData
          );
          setHoursOfOperationGraphData(data?.data);
          setGraphThreeTitle(data?.type);
          break;
        case 3:
          setTripsGraphDataStateUpdates(data?.data?.weekly?.analyticsData);
          setTripsGraphData(data?.data);
          setGraphFourTitle(data?.type);

          break;
        default:
        // setTempratureGraphDataStateUpdates(data?.data?.day?.analyticsData);
        // setTempratureGraphData(data?.data);
      }
    });
  }, [equipmentViewDetailsItem]);

  useEffect(() => {
    getTempratureGraphData();
    getHumidityGraphData();
    getHoursOfOperationGraphData();
    getTripsGraphData();
  }, [
    tempratureGraphDataStateUpdates,
    humidityGraphDataStateUpdates,
    hoursOfOperationGraphDataStateUpdates,
    tripsGraphDataStateUpdates,
  ]);

  const [updatedTempratureGraphData, setUpdatedTempratureGraphData] =
    useState<any>();
  const [updatedHumidityGraphData, setUpdatedHumidityGraphData] =
    useState<any>();
  const [
    updatedHoursOfOperationGraphData,
    setUpdatedHoursOfOperationGraphData,
  ] = useState<any>();
  const [updatedTripsGraphData, setUpdatedTripsGraphData] = useState<any>();

  const getTempratureGraphData = () => {
    let data = [
      {
        data: graphDataManipulation(tempratureGraphDataStateUpdates),

        color: appTheme.palette.infoDialogue.greenShades,
      },
    ];

    setUpdatedTempratureGraphData(data);
  };

  const getHumidityGraphData = () => {
    const data = [
      {
        data: graphDataManipulation(humidityGraphDataStateUpdates),

        color: appTheme.palette.infoDialogue.blueShades,
      },
    ];
    setUpdatedHumidityGraphData(data);
  };

  const getHoursOfOperationGraphData = () => {
    const data = [
      {
        data: graphDataManipulation(hoursOfOperationGraphDataStateUpdates),

        color: appTheme.palette.infoDialogue.indianRed,
      },
    ];
    setUpdatedHoursOfOperationGraphData(data);
  };

  const getTripsGraphData = () => {
    let data = [
      {
        data: graphDataManipulation(tripsGraphDataStateUpdates),

        color: appTheme.palette.infoDialogue.yellowShades,
      },
    ];

    setUpdatedTripsGraphData(data);
  };

  const graphDataManipulation = (analyticsGraphData: any) => {
    let manipulatedGraphData = [];
    if (analyticsGraphData) {
      if (analyticsGraphData) {
        for (let i = 0; i < analyticsGraphData?.length; i++) {
          manipulatedGraphData.push([
            // new Date(analyticsGraphData[i]?.node).getTime(),
            analyticsGraphData[i]?.count,
          ]);
        }
      }
    }
    return manipulatedGraphData;
  };

  // Updated Time 12Hrs Format - Day

  let times: any = [],
    periods: any = ["AM", "PM"],
    hours: any = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    prop: any = null,
    hour: any = null,
    min: any = null;

  for (prop in periods) {
    for (hour in hours) {
      for (min = 0; min < 60; min += 60) {
        times.push(
          ("0" + hours[hour]).slice(-2) +
            ":" +
            ("0" + min).slice(-2) +
            " " +
            periods[prop]
        );
      }
    }
  }

  const currentTime = moment().format("h A");
  const xAxisArray = times.filter(
    (value: any) =>
      moment(value, ["h A"]).format("HH") <
      moment(currentTime, ["h A"]).format("HH")
  );
  const xAxisTimeArray = xAxisArray.slice(
    xAxisArray.length - 10,
    xAxisArray.length
  );
  const xAxisNewValueTime = Array.from(xAxisTimeArray, (ps) => ps);

  // Updated Time 24Hrs Format - Day

  var hoursPerDay: any = 24;
  var xAxisNewtime: any = [];

  function timeOneDay() {
    var formattedTime;
    var newTimeFormat;
    for (let i = 0; i < hoursPerDay + 1; i++) {
      formattedTime = moment().subtract(i, "hours").format("HH");
      newTimeFormat = formattedTime + ":00";
      xAxisNewtime.unshift(newTimeFormat);
    }
    const newTimePop = xAxisNewtime.pop();
  }
  timeOneDay();

  //Updated Day List - Week

  const today: any = moment();
  const xAxisWeek: any = Array(7)
    .fill(7)
    .map(() => today.subtract(1, "d").format("MM/DD"));

  const xAxisNewValueWeek = xAxisWeek.reverse();

  //Updated Day List - Month

  const todayMonth: any = moment();
  const xAxisMonth: any = Array(30)
    .fill(30)
    .map(() => todayMonth.subtract(1, "d").format("MM/DD"));

  const xAxisNewValueMonth = xAxisMonth.reverse();

  // Year

  let monthName: any = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  );
  let currentDate: any = new Date();

  let result: any = [];
  currentDate.setDate(1);
  for (let i = 0; i <= 11; i++) {
    result.push(
      monthName[currentDate.getMonth()]
      // +
      //   " " +
      //   currentDate.getFullYear().toString().substr(-2)
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  const xAxisNewValue: any = result.reverse();
  const xAxisValueYear: any = xAxisNewValue.slice(
    xAxisNewValue.length - 12,
    xAxisNewValue.length
  );

  const [xAxisChartDataGraph1, setXAxisChartDataGraph1] =
    useState<any>(xAxisNewValueWeek);
  const [xAxisChartDataGraph2, setXAxisChartDataGraph2] =
    useState<any>(xAxisNewValueWeek);
  const [xAxisChartDataGraph3, setXAxisChartDataGraph3] =
    useState<any>(xAxisNewValueWeek);
  const [xAxisChartDataGraph4, setXAxisChartDataGraph4] =
    useState<any>(xAxisNewValueWeek);

  const [xAxisIntervalGraph1, setXAxisIntervalGraph1] = useState(0);
  const [xAxisIntervalGraph2, setXAxisIntervalGraph2] = useState(0);
  const [xAxisIntervalGraph3, setXAxisIntervalGraph3] = useState(0);
  const [xAxisIntervalGraph4, setXAxisIntervalGraph4] = useState(0);

  const selectList = [
    { label: "Real Time", value: "Real Time" },
    { label: "Day", value: "Day" },
    { label: "Week", value: "Week" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" },
  ];
  const monthFomrat = "{value:%m/%e}";
  const dayFormat = "{value:%H:00}";
  const yearFormat = "{value:%b}";

  const [formatGraph1, setFormatGraph1] = useState(monthFomrat);
  const [formatGraph2, setFormatGraph2] = useState(monthFomrat);
  const [formatGraph3, setFormatGraph3] = useState(monthFomrat);
  const [formatGraph4, setFormatGraph4] = useState(monthFomrat);
  const [selectedRealTimeGraph1, setSelectedRealTimeGraph1] =
    useState("Real Time");
  const [selectedRealTimeGraph2, setSelectedRealTimeGraph2] =
    useState("Real Time");
  const [selectedRealTimeGraph3, setSelectedRealTimeGraph3] =
    useState("Real Time");
  const [selectedRealTimeGraph4, setSelectedRealTimeGraph4] =
    useState("Real Time");

  const handleSelect = (val: string, graphName: string) => {
    if (graphName === "graph1") {
      switch (val) {
        case "Real Time":
          setSelectedRealTimeGraph1("Real Time");
          break;
        case "Day":
          setFormatGraph1(dayFormat);
          setTempratureGraphDataStateUpdates(
            tempratureGraphData?.day?.analyticsData
          );
          setXAxisChartDataGraph1(xAxisNewtime);
          setXAxisIntervalGraph1(4);
          setSelectedRealTimeGraph1("");

          break;
        case "Week":
          setFormatGraph1(monthFomrat);
          setTempratureGraphDataStateUpdates(
            tempratureGraphData?.weekly?.analyticsData
          );
          setXAxisChartDataGraph1(xAxisNewValueWeek);
          setXAxisIntervalGraph1(0);
          setSelectedRealTimeGraph1("");
          break;
        case "Month":
          setFormatGraph1(monthFomrat);
          setTempratureGraphDataStateUpdates(
            tempratureGraphData?.monthly?.analyticsData
          );
          setXAxisChartDataGraph1(xAxisNewValueMonth);
          setXAxisIntervalGraph1(5);
          setSelectedRealTimeGraph1("");
          break;
        case "Year":
          setFormatGraph1(yearFormat);
          setTempratureGraphDataStateUpdates(
            tempratureGraphData?.yearly?.analyticsData
          );
          setXAxisChartDataGraph1(xAxisValueYear);
          setXAxisIntervalGraph1(1);
          setSelectedRealTimeGraph1("");
          break;
        default:
          setFormatGraph1(dayFormat);
          setTempratureGraphDataStateUpdates(
            tempratureGraphData?.day?.analyticsData
          );
          break;
      }
    }
    if (graphName === "graph2") {
      switch (val) {
        case "Real Time":
          setSelectedRealTimeGraph2("Real Time");
          break;
        case "Day":
          setFormatGraph2(dayFormat);
          setHumidityGraphDataStateUpdates(
            humidityGraphData?.day?.analyticsData
          );
          setXAxisChartDataGraph2(xAxisNewtime);
          setXAxisIntervalGraph2(4);
          setSelectedRealTimeGraph2("");
          break;
        case "Week":
          setFormatGraph2(monthFomrat);
          setHumidityGraphDataStateUpdates(
            humidityGraphData?.weekly?.analyticsData
          );
          setXAxisChartDataGraph2(xAxisNewValueWeek);
          setXAxisIntervalGraph2(0);
          setSelectedRealTimeGraph2("");
          break;
        case "Month":
          setFormatGraph2(monthFomrat);
          setHumidityGraphDataStateUpdates(
            humidityGraphData?.monthly?.analyticsData
          );
          setXAxisChartDataGraph2(xAxisNewValueMonth);
          setXAxisIntervalGraph2(5);
          setSelectedRealTimeGraph2("");
          break;
        case "Year":
          setFormatGraph2(yearFormat);
          setHumidityGraphDataStateUpdates(
            humidityGraphData?.yearly?.analyticsData
          );
          setXAxisChartDataGraph2(xAxisValueYear);
          setXAxisIntervalGraph2(1);
          setSelectedRealTimeGraph2("");
          break;
        default:
          setFormatGraph2(dayFormat);
          setHumidityGraphDataStateUpdates(
            humidityGraphData?.day?.analyticsData
          );
          break;
      }
    }
    if (graphName === "graph3") {
      switch (val) {
        case "Real Time":
          setSelectedRealTimeGraph3("Real Time");
          break;
        case "Day":
          setFormatGraph3(dayFormat);
          setHoursOfOperationGraphDataStateUpdates(
            hoursOfOperationGraphData?.day?.analyticsData
          );
          setXAxisChartDataGraph3(xAxisNewtime);
          setXAxisIntervalGraph3(4);
          setSelectedRealTimeGraph3("");
          break;
        case "Week":
          setFormatGraph3(monthFomrat);
          setHoursOfOperationGraphDataStateUpdates(
            hoursOfOperationGraphData?.weekly?.analyticsData
          );
          setXAxisChartDataGraph3(xAxisNewValueWeek);
          setXAxisIntervalGraph3(0);
          setSelectedRealTimeGraph3("");
          break;
        case "Month":
          setFormatGraph3(monthFomrat);
          setHoursOfOperationGraphDataStateUpdates(
            hoursOfOperationGraphData?.monthly?.analyticsData
          );
          setXAxisChartDataGraph3(xAxisNewValueMonth);
          setXAxisIntervalGraph3(5);
          setSelectedRealTimeGraph3("");
          break;
        case "Year":
          setFormatGraph3(yearFormat);
          setHoursOfOperationGraphDataStateUpdates(
            hoursOfOperationGraphData?.yearly?.analyticsData
          );
          setXAxisChartDataGraph3(xAxisValueYear);
          setXAxisIntervalGraph3(1);
          setSelectedRealTimeGraph3("");
          break;
        default:
          setFormatGraph3(dayFormat);
          setHoursOfOperationGraphDataStateUpdates(
            hoursOfOperationGraphData?.day?.analyticsData
          );
          break;
      }
    }
    if (graphName === "graph4") {
      switch (val) {
        case "Real Time":
          setSelectedRealTimeGraph4("Real Time");
          break;
        case "Day":
          setFormatGraph4(dayFormat);
          setTripsGraphDataStateUpdates(tripsGraphData?.day?.analyticsData);
          setXAxisChartDataGraph4(xAxisNewtime);
          setXAxisIntervalGraph4(4);
          setSelectedRealTimeGraph4("");
          break;
        case "Week":
          setFormatGraph4(monthFomrat);
          setTripsGraphDataStateUpdates(tripsGraphData?.weekly?.analyticsData);
          setXAxisChartDataGraph4(xAxisNewValueWeek);
          setXAxisIntervalGraph4(0);
          setSelectedRealTimeGraph4("");
          break;
        case "Month":
          setFormatGraph4(monthFomrat);
          setTripsGraphDataStateUpdates(tripsGraphData?.monthly?.analyticsData);
          setXAxisChartDataGraph4(xAxisNewValueMonth);
          setXAxisIntervalGraph4(5);
          setSelectedRealTimeGraph4("");
          break;
        case "Year":
          setFormatGraph4(yearFormat);
          setTripsGraphDataStateUpdates(tripsGraphData?.yearly?.analyticsData);
          setXAxisChartDataGraph4(xAxisValueYear);
          setXAxisIntervalGraph4(1);
          setSelectedRealTimeGraph4("");
          break;
        default:
          setFormatGraph4(dayFormat);
          setTripsGraphDataStateUpdates(tripsGraphData?.day?.analyticsData);
          break;
      }
    }
  };

  const capitalizeFirstLetter = (string: any) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  };

  const playerContainerRef = useRef<any>(null);

  const playerRef = useRef<any>(null);

  const [state, setSate] = useState<any>({
    playing: true,
    muted: true,
    volume: 50,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });

  const { playing, muted, volume, playbackRate, played, seeking } = state;

  useEffect(() => {
    if (played === 1) {
      setSate({ ...state, played: 0, playing: false });
    }
  }, [played]);

  const handlePlayPause = () => {
    setSate({ ...state, playing: !state.playing });
  };

  const handleMute = () => {
    setSate({ ...state, muted: !state.muted });
  };

  const handleVolumeChange = (e: any, newValue: any) => {
    setSate({
      ...state,
      volume: newValue / 100,
      muted: newValue === 0 ? true : false,
    });
  };

  const handleVolumeSeekDown = (e: any, newValue: any) => {
    setSate({
      ...state,
      volume: (newValue / 100).toFixed(2),
      muted: newValue === 0 ? true : false,
    });
  };

  const handlePlaybackRateChange = (rate: any) => {
    setSate({ ...state, playbackRate: rate });
  };

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };

  const handleProgress = (changeState: any) => {
    if (!state.seeking) {
      setSate({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e: any, newValue: any) => {
    setSate({ ...state, played: (newValue / 100).toFixed(2) });
  };

  const handleSeekMouseDown = (e: any) => {
    setSate({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e: any, newValue: any) => {
    setSate({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  const [timeDisplayFormate, setTimeDisplayFormate] = useState("normal");

  const currentTimeVideo: any = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration: any = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";

  const elapsedTime =
    timeDisplayFormate === "normal"
      ? formate(currentTimeVideo)
      : `-${duration - currentTimeVideo}`;
  const totalDuration = formate(duration);

  const handleChangeDisplayFormate = () => {
    setTimeDisplayFormate(
      timeDisplayFormate === "normal" ? "remaining" : "normal"
    );
  };

  return (
    <>
      <DialogWrapper open={open}>
        <div className={headerStyle}>
          <div>
            <Tabs
              initialIndex={0}
              tabsList={tabsList}
              handleTabs={handleTabs}
              dashboardNotificationClassName={customNotificationTabs}
              pageName={"infoDialogue"}
            />
          </div>
          {selectedType === "aiCameras" ? (
            <div className={headerRightContentStyle}>
              <TitleInfoSubList
                highlighted={"safetyScore"}
                infoSubListdata={equipmentViewDetailsItem}
                infoDialogueType={"videoInfo"}
              />
            </div>
          ) : null}
        </div>

        <div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 15,
              top: 12,
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Grid container>
          {pageName === "alerts" ? <AlertsInfoContainer /> : null}

          {selectedType === "aiCameras" ? (
            <>
              <Grid item xs={12} className={iframVideoContainer}>
                <div ref={playerContainerRef} className={videoContainer}>
                  <ReactPlayer
                    ref={playerRef}
                    playing={playing}
                    muted={muted}
                    // controls={true}
                    // className={videoPlayerClass}
                    url={SampleVideo}
                    volume={volume}
                    playbackRate={playbackRate}
                    onProgress={handleProgress}
                    width="100%"
                    height="100%"
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
                    onToggleFullScreen={toggleFullScreen}
                    played={played}
                    onSeek={handleSeekChange}
                    onSeekMouseDown={handleSeekMouseDown}
                    onSeekMouseUp={handleSeekMouseUp}
                    elapsedTime={elapsedTime}
                    totalDuration={totalDuration}
                    onChangeDisplayFormate={handleChangeDisplayFormate}
                    pageName={"infoVideo"}
                    zoneNumber={zoneNumber}
                  />
                </div>
              </Grid>
            </>
          ) : selectedType === "envrSensors" ||
            selectedType === "floodSensors" ? (
            <>
              <Grid item xs={12} className={subListRow1}>
                <TitleInfoSubList
                  highlighted={"safetyScore"}
                  infoSubListdata={equipmentViewDetailsItem}
                />
              </Grid>
              <Grid item xs={12} className={subListRow}>
                <InfoSubList
                  highlighted={"safetyScore"}
                  infoSubList={infoSubList}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container className={subListSection}>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <div className={tripsSection1}>
                          <div className={incomeCurrentSection}>
                            <p className={incomeText}>
                            <Typography variant="h3">
                              {graphOneTitle === "temperature"
                                ? temperature
                                : capitalizeFirstLetter(graphOneTitle)}
                                </Typography>
                            </p>
                            <div
                            // className={customSelectButton}
                            >
                              <Select
                                selectList={selectList}
                                handleSelect={handleSelect}
                                customWidth={"98px"}
                                customHeight={"30px"}
                                graphName={"graph1"}
                                selectedAnalyticsTitle={
                                  ""
                                  // equipmentViewDetailsItem?.title
                                }
                                graphTitle={graphOneTitle}
                                selectedRealTimeGraph={selectedRealTimeGraph1}
                              />
                            </div>
                          </div>

                          {selectedRealTimeGraph1 === "Real Time" ? (
                            <RealTimeGraph1
                              widthMemo={chartWidth}
                              heightMemo={chartHeight}
                              selectedRealTimeGraph={selectedRealTimeGraph1}
                              graphTitle={graphOneTitle}
                            />
                          ) : (
                            // <RealTimeChart
                            //   minWidth={chartWidth}
                            //   height={chartHeight}
                            //   pageName={"infoDialogue"}
                            // />
                            <Chart
                              type={"spline"}
                              minWidth={chartWidth}
                              height={chartHeight}
                              dataPoints={updatedTempratureGraphData}
                              format={formatGraph1}
                              toolTipShared={false}
                              splineWidth={2}
                              graphSequence={"graph1"}
                              tooltipShow={true}
                              isCrosshair={true}
                              dataLabels={false}
                              tabIdentity={"drivers"}
                              xAxisArray={xAxisChartDataGraph1}
                              xAxisInterval={xAxisIntervalGraph1}
                              pageName={"infoDialogue"}
                              graphTitle={graphOneTitle}
                            />
                          )}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className={tripsSection2}>
                          <div className={incomeCurrentSection}>
                            <p className={incomeText}>
                            <Typography variant="h3">
                              {graphTwoTitle === "humidity"
                                ? humidity
                                : capitalizeFirstLetter(graphTwoTitle)}
                                </Typography>
                            </p>
                            <div
                            // className={customSelectButton}
                            >
                              <Select
                                selectList={selectList}
                                handleSelect={handleSelect}
                                customWidth={"98px"}
                                customHeight={"30px"}
                                graphName={"graph2"}
                                selectedRealTimeGraph={selectedRealTimeGraph2}
                              />
                            </div>
                          </div>
                          {selectedRealTimeGraph2 === "Real Time" ? (
                            <RealTimeGraph2
                              widthMemo={chartWidth}
                              heightMemo={chartHeight}
                              selectedRealTimeGraph={selectedRealTimeGraph2}
                              graphTitle={graphTwoTitle}
                            />
                          ) : (
                            //   <RealTimeChart
                            //   minWidth={chartWidth}
                            //   height={chartHeight}
                            //   pageName={"infoDialogue"}
                            // />

                            <Chart
                              type={"spline"}
                              minWidth={chartWidth}
                              height={chartHeight}
                              dataPoints={updatedHumidityGraphData}
                              format={formatGraph2}
                              toolTipShared={false}
                              splineWidth={2}
                              graphSequence={"graph2"}
                              tooltipShow={true}
                              isCrosshair={true}
                              dataLabels={false}
                              tabIdentity={"drivers"}
                              xAxisArray={xAxisChartDataGraph2}
                              xAxisInterval={xAxisIntervalGraph2}
                              pageName={"infoDialogue"}
                              graphTitle={graphTwoTitle}
                            />
                          )}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className={tripsSection}>
                          <div className={incomeCurrentSection}>
                            <p className={incomeText}>
                            <Typography variant="h3">
                              {graphThreeTitle === "carbonMonoxide"
                                ? carbonMonoxide
                                : waterLevel}
                                </Typography>
                            </p>
                            <div
                            // className={customSelectButton}
                            >
                              <Select
                                selectList={selectList}
                                handleSelect={handleSelect}
                                customWidth={"98px"}
                                customHeight={"30px"}
                                graphName={"graph3"}
                                selectedRealTimeGraph={selectedRealTimeGraph3}
                              />
                            </div>
                          </div>
                          {selectedRealTimeGraph3 === "Real Time" ? (
                            <RealTimeGraph3
                              widthMemo={chartWidth}
                              heightMemo={chartHeight}
                              selectedRealTimeGraph={selectedRealTimeGraph3}
                              graphTitle={graphThreeTitle}
                            />
                          ) : (
                            // <RealTimeChart
                            //   minWidth={chartWidth}
                            //   height={chartHeight}
                            //   pageName={"infoDialogue"}
                            // />
                            <Chart
                              type={"spline"}
                              minWidth={chartWidth}
                              height={chartHeight}
                              dataPoints={updatedHoursOfOperationGraphData}
                              format={formatGraph3}
                              toolTipShared={false}
                              splineWidth={2}
                              graphSequence={"graph3"}
                              tooltipShow={true}
                              isCrosshair={true}
                              dataLabels={false}
                              tabIdentity={"drivers"}
                              xAxisArray={xAxisChartDataGraph3}
                              xAxisInterval={xAxisIntervalGraph3}
                              pageName={"infoDialogue"}
                              graphTitle={graphThreeTitle}
                            />
                          )}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className={tripsSection}>
                          <div className={incomeCurrentSection}>
                            <p className={incomeText}>
                            <Typography variant="h3">
                              {graphFourTitle === "voc" ? voc : rainfall}
                              </Typography>
                            </p>
                            <div
                            // className={customSelectButton}
                            >
                              <Select
                                selectList={selectList}
                                handleSelect={handleSelect}
                                customWidth={"98px"}
                                customHeight={"30px"}
                                graphName={"graph4"}
                                selectedRealTimeGraph={selectedRealTimeGraph4}
                              />
                            </div>
                          </div>
                          {selectedRealTimeGraph4 === "Real Time" ? (
                            <RealTimeGraph4
                              widthMemo={chartWidth}
                              heightMemo={chartHeight}
                              selectedRealTimeGraph={selectedRealTimeGraph4}
                              graphTitle={graphFourTitle}
                            />
                          ) : (
                            // <RealTimeChart
                            //   minWidth={chartWidth}
                            //   height={chartHeight}
                            //   pageName={"infoDialogue"}
                            // />
                            <Chart
                              type={"spline"}
                              minWidth={chartWidth}
                              height={chartHeight}
                              dataPoints={updatedTripsGraphData}
                              format={formatGraph4}
                              toolTipShared={false}
                              splineWidth={2}
                              graphSequence={"graph4"}
                              tooltipShow={true}
                              isCrosshair={true}
                              dataLabels={false}
                              tabIdentity={"drivers"}
                              xAxisArray={xAxisChartDataGraph4}
                              xAxisInterval={xAxisIntervalGraph4}
                              pageName={"infoDialogue"}
                              graphTitle={graphFourTitle}
                            />
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : null}
        </Grid>
      </DialogWrapper>
    </>
  );
};

export default InfoDialog;
