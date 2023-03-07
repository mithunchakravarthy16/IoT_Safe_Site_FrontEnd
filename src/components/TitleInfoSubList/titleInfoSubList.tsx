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
import useTranslation from "localization/translations";

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

  const { connectivity, incidents, operationAlert, motion } = useTranslation();

  let infoIconListItems: any = [
    {
      title: incidents,
    },
    {
      title: operationAlert,
    },
    {
      title: motion,
    },
    {
      title: connectivity,
    },
  ];
  const [updatedInfoItems, setUpdatedInfoItems] =
    useState<any>(infoSubListdata);

  useEffect(() => {
    if (infoSubListdata) {
      infoIconListItems &&
        infoIconListItems?.map((item: any) => {
          switch (item?.title) {
            case incidents:
              Object.assign(item, {
                value: infoSubListdata?.incidentsObservation,
                icon: IncidentBellIcon,
              });
              break;
            case operationAlert:
              Object.assign(item, {
                value: infoSubListdata?.operationAlertObservation,
                icon: OprAlertIcon,
              });
              break;
            case motion:
              Object.assign(item, {
                value: infoSubListdata?.motionObservation,
                icon: MotionIcon,
              });
              break;
            case connectivity:
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
              paletteColor={appTheme.palette.titleInfoSubList.darkBlack2}
              // key={item?.title + item?.value}
            >
              <ItemSubContainer2>
                <img src={item?.icon && item?.icon} alt="Icon" />
              </ItemSubContainer2>

              <ItemSubContainer1>
                <ItemValue paletteColor={appTheme.palette.titleInfoSubList.colorWhite}>{item?.value}</ItemValue>
                <ItemLabel paletteColor={appTheme.palette.titleInfoSubList.darkGray}>{item?.title}</ItemLabel>
              </ItemSubContainer1>
            </ItemContainer>
          );
        })}
      <ItemContainer
        infoDialogueType={infoDialogueType === "videoInfo" ? true : false}
        paletteColor={appTheme.palette.titleInfoSubList.darkBlack2}
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
