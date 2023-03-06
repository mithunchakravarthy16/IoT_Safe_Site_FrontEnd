import React, { useEffect, useState } from "react";
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

const INF_Chart: React.FC<any> = (props) => {
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

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: type,
          plotBackgroundColor: "transparent",
          backgroundColor: "transparent",
          height: height,
          width: width,
        },
        scrollbar: {
          barBackgroundColor: "gray",
          barBorderRadius: 7,
          barBorderWidth: 0,
          buttonBackgroundColor: "gray",
          buttonBorderWidth: 0,
          buttonBorderRadius: 7,
          trackBackgroundColor: "none",
          trackBorderWidth: 1,
          trackBorderRadius: 8,
          trackBorderColor: "#000",
        },
        title: false,
        legend: false,

        xAxis: {
          lineColor: "#fff",
          min: type === "spline" || type === "areaspline" ? 0.49 : 0,
          categories: xAxisArray,
          tickWidth: 0,
          tickLength: 0,
          tickInterval: xAxisInterval,
          showFirstLabel: true,
          showLastLabel: true,
          startOnTick: false,
          endOnTick: false,
          gridLineDashStyle: "LongDash",
          useHTML: true,
          lineWidth: pageName === "infoDialogue" ? 1 : 0,
          crosshair:
            isCrosshair && (type === "spline" || type === "areaspline")
              ? {
                  enabled: true,
                  width: 1,
                  color: "gray",
                  dashStyle: "ShortDash",
                  snap: true,
                }
              : false,
          type: "datetime",
          labels: {
            useHTML: true,
            overflow: "justify",
            format: format,
          },

          tickPositioner: function (this: any) {
            const ticks: any = this.tickPositions;
            if (!ticks.includes(this.dataMax)) ticks.push(this.dataMax);
            ticks.sort((a: any, b: any) => a - b);
            while (ticks[ticks.length - 1] > this.dataMax) {
              ticks.pop();
            }
            return ticks;
          },
        },
        yAxis: {
          title: false,
          visible: true,
          min:
            selectedAnalyticListItem === "Overall Analytics"
              ? graphTitle === "Equipment Efficiency (%)"
                ? 50
                : 20
              : 10,
          max: maxValue,
          tickInterval:
            selectedAnalyticListItem === "Overall Analytics"
              ? graphTitle === "Equipment Efficiency (%)"
                ? 25
                : 20
              : 20,
          startOnTick: false,
          lineColor: "#fff",
          lineWidth: 1,
          gridLineWidth: pageName === "infoDialogue" ? 0 : 1,
          minorGridLineWidth: 1,
          gridLineDashStyle: "LongDash",
          plotLines:
            pageName !== "infoDialogue"
              ? [
                  {
                    value: maxValue,
                    zIndex: 2,
                    width: 0.8,
                    dashStyle: "Dash",
                    color: "#F00C0C",
                  },
                  {
                    value: minValue,
                    zIndex: 2,
                    width: 0.8,
                    dashStyle: "Dash",
                    color: "#F00C0C",
                  },
                ]
              : [
                  {
                    value: 0,
                    zIndex: 2,
                    width: 0.8,
                    dashStyle: "Dash",
                    color: "#C4C4C4",
                  },
                ],
        },

        tooltip: {
          shared: false,
          useHTML: true,
          backgroundColor: toolTipBg,
          borderColor: tBorder,
          padding: 4,
          className: "tooltipStyle",
          style: {
            color: "#fff",
            fontWeight: "bold",
          },
          formatter: function (
            this: Highcharts.TooltipFormatterContextObject
          ): string | boolean {
            if (tooltipShow) {
              const value: any = this.y;

              switch (graphSequence) {
                case "graph1":
                  setToolTipBg("#20E89C");
                  setTBorder("#20E89C");
                  break;
                case "graph2":
                  setToolTipBg("#3C81EF");
                  setTBorder("#3C81EF");
                  break;
                case "graph3":
                  setToolTipBg("#CD5959");
                  setTBorder("#CD5959");
                  break;
                case "graph4":
                  setToolTipBg("#EDA230");
                  setTBorder("#EDA230");
                  break;
              }

              return ` <table>
          <tr>
            <td style="text-align: center;">
              
                ${
                  graphTitle === "temperature"
                    ? `${value}°C`
                    : graphTitle === "humidity"
                    ? `${value}%`
                    : graphTitle === "carbonMonoxide"
                    ? `${value}Kg`
                    : graphTitle === "waterLevel" || graphTitle === "rainFall"
                    ? `${value}mm`
                    : value
                }
            </td>
          </tr>
        </table>`;

              // return `<table>
              //               <tr>
              //               <td style="font-weight:bold;color:white ">
              //                 ${this.points.reduce(function (s, point) {
              //                   return (
              //                     point.series.name + ": " + point.y + "<br/>" + s
              //                   );
              //                 }, `<b> ${new Date(this.x).toLocaleDateString(
              //                   "nl-Nl"
              //                 )} </b>`)}
              //               </td>
              //         </tr>
              //       </table>`;
            } else {
              return false;
            }
          },
        },

        plotOptions: {
          // column: {
          //   dataLabels: {
          //     enabled: dataLabels,
          //     format:
          //       '<div style="font-size: 11px; line-height: 20px">${y}K</div>',
          //     backgroundColor: appTheme?.palette?.chartElement?.blueShade,
          //     color: appTheme?.palette?.chartElement?.colorWhite,
          //     y: -4,
          //     shadow: true,
          //     align: "center",
          //     shape: "circle",
          //   },
          // },
          series: {
            fillColor:
              graphTitle === "No. of Pallets"
                ? {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                      [0, "#7979D7"],
                      [1, Highcharts.color("#fff").setOpacity(0).get("rgba")],
                    ],
                  }
                : graphTitle === "Energy Consumed (kWh)"
                ? {
                    linearGradient: [0, 0, 0, 300],

                    stops: [
                      [0, "#fff"],
                      [
                        1,
                        Highcharts.color("#765DFF").setOpacity(0).get("rgba"),
                      ],
                    ],
                  }
                : "",
            borderColor: "transparent",
            marker: {
              enabled: false,
            },

            lineWidth: splineWidth,
          },
          line: {
            dashStyle: "Dash",
          },
        },
        credits: {
          enabled: false,
        },
        series: dataPoints,
      }}
    />
  );
};

export default INF_Chart;
