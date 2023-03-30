import React, { Fragment, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import useTranslation from "../../localization/translations";
import theme from "../../theme/theme";
import { Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import saveSiteLogo from "../../assets/login/gd-save-site.svg";
import FooterLogo from "../../assets/login/FooterLogo.svg";
import fbApp from 'services/firebase'
import { getFirestore, onSnapshot, doc } from "firebase/firestore";
interface UserName {
  firstName: string | undefined;
  lastName: string | undefined;
  initials: string | undefined;
  role: string | undefined;
}

const Footer: React.FC = (props: any) => {
  const db = getFirestore(fbApp);
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [customLogo, setCustomLogo] = useState(JSON.parse(localStorage.getItem("customLogos") || "{}"))

  const { footer, copyRights } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const { poweredBy, copyRight } = useTranslation();

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

  const getThemeData = async () => {
    try {
      const unsub = onSnapshot(doc(db, "customLogos", "iotSafeSite"), (doc) => {
          console.log("Current data: ", doc.data());
          setCustomLogo(doc.data())
      });

    } catch (error) {
      
    }
  }

  useEffect(() => {
    getThemeData()
  }, [])

  return (
    <Fragment>
      <Grid container className={footer}>
        <Grid item xs={12} className={copyRights}>
          {
            customLogo?.footer?.type !== "text"
            ?
            <img src={customLogo?.footer?.value || FooterLogo} />
            :
            <Typography variant="h6" sx={{color: customLogo?.footer?.color, marginLeft: "10px", marginRight: "10px"}} >{customLogo?.footer?.value}</Typography>
          }
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Footer;
