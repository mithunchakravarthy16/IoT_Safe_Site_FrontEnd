import { useState, useEffect } from "react";
import theme from "../../theme/theme";
import Button from "../../elements/Button";
import useTranslation from "../../localization/translations";
import useStyles from "./styles";

const DashboardListItems: React.FC<any> = (props) => {
  const {} = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [searchOpen, setSearchOpen] = useState<any>(false);

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
    listItemContainer,
    listItemTitle,
    listItemLocation,
    expandedListItem,
    collapsedListItem,
    locationIconStyle,
    listItemIconDetails,
    listIemIcon,
    expandedListIconContainer,
    selectedButtonStyles,
    listItemFooterStyle,
    listItemIconName,
    listItemTimeStyle,
    listItemSection,
  } = useStyles(appTheme);

  const {} = useTranslation();

  const [listItemIconArray, setListItemIconArray] = useState<any>();

  return (
    <>
      <div className={listItemContainer}>DashboardListItems</div>
    </>
  );
};
export default DashboardListItems;
