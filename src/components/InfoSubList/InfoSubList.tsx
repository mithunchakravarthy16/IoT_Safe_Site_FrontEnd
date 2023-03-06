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

const InfoSubList: React.FC<any> = ({ highlighted, infoSubList, ...props }) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

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
            case "Temperature":
              Object.assign(item, { icon: TempIconSubInfo });
              break;
            case "Humidity":
              Object.assign(item, { icon: HumidityIconSubInfo });
              break;
            case "Carbon Monoxide":
              Object.assign(item, { icon: CarbonMonoxideIconSubInfo });
              break;
            case "VOC's":
              Object.assign(item, { icon: VocsIconSubInfo });
              break;
            case "Particulate":
              Object.assign(item, { icon: ParticulateIconSubInfo });
              break;
            case "Noise":
              Object.assign(item, { icon: NoiseIconSubInfo });
              break;
            case "Pressure":
              Object.assign(item, { icon: PressureIconSubInfo });
              break;
            case "Light":
              Object.assign(item, { icon: LightIconSubInfo });
              break;
            case "Water Level":
              Object.assign(item, { icon: WaterFallIcon });
              break;
            case "Rainfall":
              Object.assign(item, { icon: RainFallIcon });
              break;
            case "Battery":
              Object.assign(item, { icon: BatteryIcon });
              break;
            default:
              Object.assign(item, { icon: TempIconSubInfo });
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
        updatedInfoItems?.map((item: any) => {
          return (
            <ItemContainer
              paletteColor={"#fff"}
              key={item?.title + item?.value}
            >
              <ItemSubContainer1>
                <ItemValue paletteColor={"#fff"}>
                  {item?.title === "Predictive Maintenance"
                    ? moment().add(5, "d").format("DD-MM-YYYY")
                    : item.value}
                </ItemValue>
                <ItemLabel paletteColor={"#C7C7C7"}>{item?.title}</ItemLabel>
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
