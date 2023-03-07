import React, { useEffect, useState, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import theme from "../../theme/theme";

interface ExtendedXAxisTitleOptions extends Highcharts.XAxisTitleOptions {
  enabled: boolean;
}
interface ExtendedChart extends Highcharts.Chart {
  crosshair: Highcharts.SVGElement;
}
interface ExtendedSeriesLineOptions extends Highcharts.SeriesLineOptions {
  enabledCrosshairs: boolean;
}

const RealTimeChart: React.FC<any> = (props) => {
  const {
    type,
    splineWidth,
    width,
    height,
    dataPoints,
    format,
    graphSequence,
    tooltipShow,
    isCrosshair,
    dataLabels,
    tabIdentity,
    pageName,
    xAxisArray,
    xAxisInterval,
    graphTitle,
    selectedAnalyticListItem,
    
  } = props;
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  let collectedArrayValues: number[] = [];
  let minValue: number = 0;
  let maxValue: number = 0;

  dataPoints &&
    dataPoints[0].data.map((data: any) => {
      collectedArrayValues.push(data[0]);
    });

  minValue = Math.min(...collectedArrayValues);
  maxValue = Math.max(...collectedArrayValues);

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

  const [toolTipBg, setToolTipBg] = useState<string>();
  const [tBorder, setTBorder] = useState<string>();

  const chartRef = useRef<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      var x = new Date().getTime(), // current time
        y = Math.floor(Math.random() * 125) + 20;
      chartRef.current.chart.series[0].addPoint([x, y], true, true);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HighchartsReact
      ref={chartRef}
      highcharts={Highcharts}
      options={{
        chart: {
          type: "spline",
          plotBackgroundColor: "transparent",
          backgroundColor: "transparent",
          height: height,
          width: width,
          // animation: Highcharts.svg, // don't animate in old IE
          marginRight: 10,
          events: {
            // load: function (this: any) {
            //   // set up the updating of the chart each second
            //   var series = this.series[0];
            //   setInterval(function () {
            //     var x = new Date().getTime(), // current time
            //       y = Math.floor(Math.random() * 125) + 20;
            //     series.addPoint([x, y], true, true);
            //   }, 1000);
            // }
          },
        },

        time: {
          useUTC: false,
        },

        title: false,

        accessibility: {
          announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function (
              allSeries: any,
              newSeries: any,
              newPoint: any
            ) {
              if (newPoint) {
                return "New point added. Value: " + newPoint.y;
              }
              return false;
            },
          },
        },

        xAxis: {
          type: "datetime",
          tickPixelInterval: 150,
        },

        yAxis: {
          title: false,
          lineWidth: 1,
          gridLineWidth: pageName === "infoDialogue" ? 0 : 1,
          plotLines: [
            {
              value: 0,
              width: 1,
              color: "#808080",
            },
          ],
        },

        tooltip: {
          
          headerFormat: "<b>{series.name}</b><br/>",
          pointFormat: graphTitle === "temperature" ? 
          "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y}°C" 
          : graphTitle === "humidity" ?
          "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y}%" 
          : graphTitle === "carbonMonoxide" ?
          "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y}Kg" 
          : graphTitle === "waterLevel" || graphTitle === "rainFall" ?
          "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y}mm"
          : "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y}",
        },

        legend: {
          enabled: false,
        },

        exporting: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },

        series: [
          {
            name: graphTitle === "temperature" ? 
                  "Temperature data" 
                  : graphTitle === "humidity" ?
                  "Humidity data"
                  : graphTitle === "carbonMonoxide" ?
                  "Carbon Monoxide Data"
                  : graphTitle === "waterLevel" ?
                  "Water Level Data"
                  : graphTitle === "rainFall" ?
                  "Rain Fall"
                  : graphTitle === "voc" ? 
                  "VOC Data"
                  : "Live Data",              
                  
            data: (function () {
              // generate an array of random data
              var data = [],
                time = new Date().getTime(),
                i;

              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: Math.floor(Math.random() * 125) + 20,
                });
              }
              return data;
            })(),
          },
        ],
      }}
    />
  );
};

export default RealTimeChart;
