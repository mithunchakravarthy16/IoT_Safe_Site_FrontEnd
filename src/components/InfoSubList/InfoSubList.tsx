import moment from "moment";
import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import {
  TempIconSubInfo,
  HumidityIconSubInfo,
  CarbonMonoxideIconSubInfo,
  VocsIconSubInfo,
  ParticulateIconSubInfo,
  NoiseIconSubInfo,
  PressureIconSubInfo,
  LightIconSubInfo,
  WaterFallIcon,
  RainFallIcon,
  BatteryIcon,
} from "../../assets/InfoDialogueIcons";
import {
  RootContainer,
  ItemContainer,
  ItemValue,
  ItemLabel,
  VerticalSpace,
  ItemSubContainer1,
  ItemSubContainer2,
} from "./styles";
import useTranslation from "localization/translations";
import Typography from "@mui/material/Typography";

const InfoSubList: React.FC<any> = ({ highlighted, infoSubList, ...props }) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const {   
  temperature,
  humidity,
  carbonMonoxideWithoutUnit,
  vocs,
  particulate,
  noise,
  pressure,
  light,
  waterLevel,
  rainfall,
  battery, } = useTranslation();

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

  let infoIconListItems: any = [];
  const [updatedInfoItems, setUpdatedInfoItems] = useState<any>(
    infoSubList && [...infoSubList]
  );

  useEffect(() => {
    if (infoSubList) {
      infoIconListItems = [...infoSubList];
      infoIconListItems &&
        infoIconListItems?.map((item: any) => {
          switch (item?.title) {
            case "Temperature" :
            case temperature:
              Object.assign(item, {title:temperature, icon: TempIconSubInfo });
              break;
            case "Humidity":
              case humidity:
              Object.assign(item, {title:humidity, icon: HumidityIconSubInfo });
              break;
            case "Carbon Monoxide":
              case carbonMonoxideWithoutUnit:
              Object.assign(item, {title:carbonMonoxideWithoutUnit, icon: CarbonMonoxideIconSubInfo });
              break;
            case "VOC's":
              case vocs:
              Object.assign(item, {title:vocs, icon: VocsIconSubInfo });
              break;
            case "Particulate":
              case particulate:
              Object.assign(item, {title:particulate, icon: ParticulateIconSubInfo });
              break;
            case "Noise":
              case noise:
              Object.assign(item, {title:noise, icon: NoiseIconSubInfo });
              break;
            case "Pressure":
              case pressure:
              Object.assign(item, {title:pressure, icon: PressureIconSubInfo });
              break;
            case "Light":
              case light:
              Object.assign(item, {title:light, icon: LightIconSubInfo });
              break;
            case "Water Level":
              case waterLevel:
              Object.assign(item, {title:waterLevel, icon: WaterFallIcon });
              break;
            case "Rainfall":
              case rainfall:
              Object.assign(item, {title:rainfall, icon: RainFallIcon });
              break;
            case "Battery":
              case battery:
              Object.assign(item, {title:battery, icon: BatteryIcon });
              break;
            default:
              Object.assign(item, {title:temperature, icon: TempIconSubInfo });
              break;
          }
        });
      setUpdatedInfoItems(infoIconListItems);
    }
  }, [infoSubList]);

  // const [items, setItems] = useState<any>([]);

  // useEffect(() => {
  //   const propItems: any = [];
  //   Object.keys(props).forEach((key) => {
  //     propItems.push({ key, value: props[key] });
  //   });

  //   setItems(propItems);
  // }, []);

  // const toTitleCase = (testString: string) => {
  //   let titleCaseString = testString
  //     .replace(/(_|-)/g, " ")
  //     .trim()
  //     .replace(/\w\S*/g, function (str) {
  //       return str.charAt(0).toUpperCase() + str.substr(1);
  //     })
  //     .replace(/([a-z])([A-Z])/g, "$1 $2")
  //     .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");

  //   return titleCaseString;
  // };

  return (
    <RootContainer>
      {updatedInfoItems &&
        updatedInfoItems?.map((item: any, index: number) => {
          return (
            <ItemContainer
              paletteColor={appTheme.palette.infoSubList.colorWhite}
              paletteColorBg={appTheme.palette.infoSubList.darkBlack2}
              key={index}
            >
              <ItemSubContainer1>
                <ItemValue paletteColor={appTheme.palette.infoSubList.colorWhite}>
                <Typography variant="h3">{ item.value}</Typography>
                </ItemValue>
                <ItemLabel paletteColor={appTheme.palette.infoSubList.darkGray}><Typography variant="h4">{item?.title}</Typography></ItemLabel>
              </ItemSubContainer1>

              <ItemSubContainer2>
                <img src={item?.icon && item?.icon} alt="Icon" />
              </ItemSubContainer2>
            </ItemContainer>
          );
        })}
    </RootContainer>
  );
};

export default InfoSubList;
