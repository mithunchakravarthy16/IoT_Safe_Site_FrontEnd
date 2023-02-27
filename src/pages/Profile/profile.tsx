import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/actions/loginActions";
import theme from "../../theme/theme";
import useTranslation from "../../localization/translations";
import { useLanguageContext } from "../../localization/languageContext";
import useStyles from "./styles";


const Profile = () => {

  const { changeTheme, changeLang } = useTranslation();
  const { language, changeLanguage } = useLanguageContext();

  const [selectedTheme, setSelectedTheme] = useState(JSON.parse(localStorage.getItem('theme')!));
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

  // const {
  //   root
  // } = useStyles(appTheme);

  const handleTheme = (selectedTheme: any) => {
    switch (selectedTheme) {
      case 'green': setAppTheme(theme?.greenTheme); break;
      case 'red': setAppTheme(theme?.redTheme); break;
      case 'yellow': setAppTheme(theme?.yellowTheme); break;
      case 'default': setAppTheme(theme?.defaultTheme); break;
      default: setAppTheme(theme?.defaultTheme); break;
    }
    localStorage.setItem("theme", JSON.stringify(selectedTheme));
    setSelectedTheme(selectedTheme);
  };


  const dispatch = useDispatch();

  const handleLanguage = (lang:any) =>{
    changeLanguage(lang);
    dispatch(setLanguage({lang}));
  }

  return (
    <>
      <div >profile</div><br />

      <div>{changeTheme}</div>
      <select value={selectedTheme} onChange={(e) => handleTheme(e.target.value)}>
        <option value="green">Green theme</option>
        <option value="red">Red theme</option>
        <option value="yellow">Yellow theme</option>
        <option value="default">Default theme</option>
      </select> <br /><br />

      <div>{changeLang}</div>
      <select value={language} onChange={(e) => handleLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
      
    </>
  );
};
export default Profile;
