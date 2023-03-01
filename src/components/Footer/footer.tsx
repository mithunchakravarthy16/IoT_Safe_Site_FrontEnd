import React, { Fragment, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import useTranslation from "../../localization/translations";
import theme from "../../theme/theme";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import saveSiteLogo from "../../assets/login/gd-save-site.svg";

interface UserName {
  firstName: string | undefined;
  lastName: string | undefined;
  initials: string | undefined;
  role: string | undefined;
}

const Footer: React.FC = (props: any) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const { footer, copyRights } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  // const { poweredBy, copyRight } = useTranslation();

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
    <Fragment>
      <Grid container className={footer}>
        <Grid item xs={12} className={copyRights}>
          <span>Powered by</span>
          <img src={saveSiteLogo} />
          <span>© 2023. All Rights Reserved</span>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Footer;
