import { useState, useEffect } from "react";
import Profile from '../Profile';
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import useStyles from "./styles";
import {GrokList} from "elements";

const DashBoard = () => {

  const { hello } = useTranslation();

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  //const { dashboardSection } = useStyles(appTheme);

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
    <>
      Dashboard 
      <div style={{display: "flex"}} >
        <div style={{flex: 3}} ></div>
        <div style={{flex: 1}} >
          <GrokList />
        </div>
      </div>
       {/* {hello}
      <Profile /> */}
    </>
  );
};
export default DashBoard;
