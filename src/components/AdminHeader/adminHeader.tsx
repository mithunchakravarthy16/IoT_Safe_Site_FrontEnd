import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/theme";
import { Grid } from "@mui/material";
import devToolsLogo from "../../assets/Admin-Header/tools-logo.svg";
import saveSiteLogo from "../../assets/Admin-Header/safe-site-logo.svg";
import powerIcon from "../../assets/Admin-Header/power-icon.png";
import { setUserLogin } from "redux/actions/loginActions";
import useStyles from "./styles";
import FirebaseTrial from "components/FirebaseTrial";

const AdminHeader: React.FC = (props: any) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const { header, headerRight, logoImg, headerRightLogo } = useStyles(appTheme);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    // localStorage.clear();
    dispatch(setUserLogin({}));
    navigate("/login");
  };

  const [firebaseTrialWindow, setFirebaseTrialWindow]= useState(false)

  return (
    <Fragment>
      <Grid container className={header}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={logoImg} onClick={()=>setFirebaseTrialWindow(!firebaseTrialWindow)}>
            <img src={devToolsLogo} alt="toolslogo" />
          </div>
        </Grid>
        <Grid className={headerRight} item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={headerRightLogo}>
            <img src={saveSiteLogo} alt="toolslogo" />
            <img src={powerIcon} alt="toolslogo" onClick={handleLogout} />
          </div>
        </Grid>
      </Grid>
      {
        firebaseTrialWindow && <FirebaseTrial setFirebaseTrialWindow={setFirebaseTrialWindow}/>
      }
      
    </Fragment>
  );
};
export default AdminHeader;
