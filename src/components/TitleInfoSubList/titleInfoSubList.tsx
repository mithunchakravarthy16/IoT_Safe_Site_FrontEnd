import moment from "moment";
import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import {
  IncidentBellIcon,
  OprAlertIcon,
  MotionIcon,
  CelluarIcon,
  AlertOrangeIcon,
  CallIconBlue,
} from "../../assets/InfoDialogueIcons";
import Tooltip from "elements/Tooltip";
import {
  RootContainer,
  ItemContainer,
  ItemValue,
  ItemLabel,
  VerticalSpace,
  ItemSubContainer1,
  ItemSubContainer2,
} from "./styles";

const TitleInfoSubList: React.FC<any> = ({
  highlighted,
  infoSubListdata,
  infoDialogueType,
  ...props
}) => {
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

  let infoIconListItems: any = [
    {
      title: "Incidents",
    },
    {
      title: "Operation Alert",
    },
    {
      title: "Motion",
    },
    {
      title: "Connectivity or Cellular",
    },
  ];
  const [updatedInfoItems, setUpdatedInfoItems] =
    useState<any>(infoSubListdata);

  useEffect(() => {
    if (infoSubListdata) {
      infoIconListItems &&
        infoIconListItems?.map((item: any) => {
          switch (item?.title) {
            case "Incidents":
              Object.assign(item, {
                value: infoSubListdata?.incidentsObservation,
                icon: IncidentBellIcon,
              });
              break;
            case "Operation Alert":
              Object.assign(item, {
                value: infoSubListdata?.operationAlertObservation,
                icon: OprAlertIcon,
              });
              break;
            case "Motion":
              Object.assign(item, {
                value: infoSubListdata?.motionObservation,
                icon: MotionIcon,
              });
              break;
            case "Connectivity or Cellular":
              Object.assign(item, {
                value: infoSubListdata?.connectivityPercentage,
                icon: CelluarIcon,
              });
              break;
            default:
              break;
          }
        });
      setUpdatedInfoItems(infoIconListItems);
    }
  }, [infoSubListdata]);

  return (
    <RootContainer>
      {updatedInfoItems &&
        updatedInfoItems?.length > 0 &&
        updatedInfoItems?.map((item: any) => {
          return (
            <ItemContainer
              infoDialogueType={infoDialogueType === "videoInfo" ? true : false}
              // paletteColor={"#fff"}
              // key={item?.title + item?.value}
            >
              <ItemSubContainer2>
                <img src={item?.icon && item?.icon} alt="Icon" />
              </ItemSubContainer2>

              <ItemSubContainer1>
                <ItemValue paletteColor={"#fff"}>{item?.value}</ItemValue>
                <ItemLabel paletteColor={"#C7C7C7"}>{item?.title}</ItemLabel>
              </ItemSubContainer1>
            </ItemContainer>
          );
        })}
      <ItemContainer
        infoDialogueType={infoDialogueType === "videoInfo" ? true : false}
      >
        <ItemSubContainer2>
          <Tooltip tooltipValue={"Raise Alert"}>
            <img src={AlertOrangeIcon} alt="Icon" />
          </Tooltip>
        </ItemSubContainer2>
        <ItemSubContainer2>
          <Tooltip tooltipValue={"Call 911"}>
            <img src={CallIconBlue} alt="Icon" />
          </Tooltip>
        </ItemSubContainer2>
      </ItemContainer>
    </RootContainer>
  );
};

export default TitleInfoSubList;
