import React, { useEffect, useState, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import useStyles from "./styles";
const INF_Select: React.FC<any> = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

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
    customSelect,
    tableSelect,
    // selectOptions,
  } = useStyles(appTheme);

  const {
    selectList,
    handleSelect,
    customWidth,
    customHeight,
    variant,
    selectLabel,
    disabled,
    graphName,
    pageName,
    tabIndexParkingTabs,
    presetPanelActive,
    selectIndex,
    customSelectCustom,
    isGraphDayDataAvailable,
    drowpDownTextColor,
    dropDownBgColor,
    dropDownSelectedBgColor,
    selectedFormatGraph,
    selectedAnalyticsTitle,
    graphTitle,
    selectedRealTimeGraph,
  } = props;

  const [selectedValue, setselectedValue] = useState(
    
    selectList && selectList[2]?.value
  );

  // const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e: any) => {
    setselectedValue(e.target.value);

    let newSelectedIndex = 0;
    if (selectList && selectList.length > 0) {
      for (let i = 0; i <= selectList.length; i++) {
        if (selectList[i]?.value === e?.target?.value) {
          newSelectedIndex = i;
        }
      }
      handleSelect(e.target.value, graphName);
    }
  };

  useEffect(() => {
    if (
      (selectedAnalyticsTitle === "Equipment #1" ||
        selectedAnalyticsTitle === "Equipment #2" ||
        selectedAnalyticsTitle === "Equipment #3") &&
      graphTitle === "Temperature (°C)"
    ) {
      if (selectList && selectList[0] && selectList[0].value !== "Real Time") {
        setselectedValue(selectList && selectList[0]?.value);
      }
    } else if (
      (selectedAnalyticsTitle === "Equipment#1" ||
        selectedAnalyticsTitle === "Equipment#2" ||
        selectedAnalyticsTitle === "Equipment#3") &&
      graphTitle === "Temperature"
    ) {
      if (selectList && selectList[0] && selectList[0].value !== "Real Time") {
        setselectedValue(selectList && selectList[0]?.value);
      }
    } else {
      if (selectList && selectList[1] && selectList[1].value !== "Day") {
        setselectedValue(selectList && selectList[1]?.value);
      }
    }
  }, []);

  useEffect(() => {
    if (pageName === "analyticsPage") {
      if (
        (selectedAnalyticsTitle === "Equipment #1" ||
          selectedAnalyticsTitle === "Equipment #2" ||
          selectedAnalyticsTitle === "Equipment #3") &&
        graphTitle === "Temperature (°C)"
      ) {
        setselectedValue("Real Time");
        handleSelect("Real Time", graphName);
      } else if (!isGraphDayDataAvailable) {
        setselectedValue("Week");
        handleSelect("Week", graphName);
      } else if (selectedValue === "Real Time") {
        setselectedValue("Week");
        handleSelect("Week", graphName);
      }
    }
  }, [isGraphDayDataAvailable, selectedAnalyticsTitle, graphTitle]);


  useEffect(()=>{
    if(selectedRealTimeGraph){
      setselectedValue("Real Time");
    }

  },[selectedRealTimeGraph])

  return (
    <>
      {variant === "standard" ? (
        <div className={tableSelect}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {selectLabel}
            </InputLabel>
            <Select
              name="select"
              value={selectedValue}
              onChange={handleChange}
              disabled={disabled}
            >
              {selectList &&
                selectList?.length > 0 &&
                selectList?.map((item: any, index: any) => (
                  <MenuItem
                    // className={selectOptions}
                    value={item.label}
                    key={index}
                  >
                    {item.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      ) : (
        <ThemeProvider
          theme={createTheme({
            palette: {
              primary: {
                main: dropDownBgColor
                  ? dropDownBgColor
                  : "#000",
              },
            },

            components: {
              MuiPaper: {
                styleOverrides: {
                  root: {
                    // top : "254px !important",
                    marginTop: "5px !important",
                    backgroundColor: dropDownBgColor
                      ? dropDownBgColor
                      : "#000",
                  },
                },
              },
              MuiMenuItem: {
                styleOverrides: {
                  root: {
                    color: drowpDownTextColor
                      ? drowpDownTextColor
                      : "#fff",
                    backgroundColor: dropDownBgColor
                      ? dropDownBgColor
                      : "#000",
                    // fontSize: "10px",

                    // "&.MuiMenuItem-root": {
                    //   margin: "5px",
                    // },

                    "&.Mui-selected": {
                      "&.MuiMenuItem-root": {
                        backgroundColor: dropDownSelectedBgColor
                          ? dropDownSelectedBgColor
                          : "#fff",
                          color: "#000",
                      },

                      // "&.Mui-focusVisible": { background: "orange" },
                    },
                    "&:hover": {
                      backgroundColor: dropDownBgColor
                        ? dropDownBgColor
                        : "#000",
                    },
                  },
                },
              },
            },
          })}
        >
          <FormControl
            className={customSelectCustom ? customSelectCustom : customSelect}
            style={{ width: customWidth, height: customHeight }}
          >
            <Select
              name="select"
              value={selectedValue}
              onChange={handleChange}
              disabled={disabled}
              displayEmpty
              renderValue={() => (selectedValue ? selectedValue : "")}
              sx={{
                height: customHeight,
                width: customWidth,
                cursor: "pointer",
              }}
              // IconComponent={pageName === "security" ? CustomSvgIcon : ""}
            >
              {selectList &&
                selectList?.length > 0 &&
                selectList?.map((item: any, index: any) =>
                  pageName === "analyticsPage" ? (
                    selectedAnalyticsTitle === "Equipment #1" ||
                    selectedAnalyticsTitle === "Equipment #2" ||
                    selectedAnalyticsTitle === "Equipment #3" ? (
                      graphTitle === "Temperature (°C)" ? (
                        <MenuItem key={index} value={item.label}>
                          {item.label}
                        </MenuItem>
                      ) : isGraphDayDataAvailable ? (
                        index !== 0 ? (
                          <MenuItem key={index} value={item.label}>
                            {item.label}
                          </MenuItem>
                        ) : null
                      ) : index !== 0 && index !== 1 ? (
                        <MenuItem key={index} value={item.label}>
                          {item.label}
                        </MenuItem>
                      ) : null
                    ) : isGraphDayDataAvailable ? (
                      index !== 0 ? (
                        <MenuItem key={index} value={item.label}>
                          {item.label}
                        </MenuItem>
                      ) : null
                    ) : index !== 0 && index !== 1 ? (
                      <MenuItem key={index} value={item.label}>
                        {item.label}
                      </MenuItem>
                    ) : null
                  ) : //for infodialogue wndow

                  (selectedAnalyticsTitle === "Equipment#1" ||
                      selectedAnalyticsTitle === "Equipment#2" ||
                      selectedAnalyticsTitle === "Equipment#3") &&
                    graphTitle === "Temperature" ? (
                    <MenuItem key={index} value={item.label}>
                      {item.label}
                    </MenuItem>
                  ) : index !== 0 ? (
                    <MenuItem key={index} value={item.label}>
                      {item.label}
                    </MenuItem>
                  ) : null
                )}
            </Select>
          </FormControl>
        </ThemeProvider>
      )}
    </>
  );
};
export default INF_Select;
