import React, { Fragment, useState, useEffect } from "react";
import theme from "../../theme/theme";
import { Grid } from "@mui/material";
import devToolsLogo from "../../assets/Admin-Header/tools-logo.svg";
import saveSiteLogo from "../../assets/Admin-Header/safe-site-logo.svg";
import powerIcon from "../../assets/Admin-Header/power-icon.png";
import useStyles from "./styles";

const AdminHeader: React.FC = (props: any) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const { header, headerRight, logoImg, headerRightLogo } = useStyles(appTheme);

  return (
    <Fragment>
      <Grid container className={header}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={logoImg}>
            <img src={devToolsLogo} alt="toolslogo" />
          </div>
        </Grid>
        <Grid className={headerRight} item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={headerRightLogo}>
            <img src={saveSiteLogo} alt="toolslogo" />
            <img src={powerIcon} alt="toolslogo" />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default AdminHeader;
