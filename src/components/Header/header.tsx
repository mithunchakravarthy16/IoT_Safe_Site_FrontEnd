import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useTranslation from "../../localization/translations";
import theme from "../../theme/theme";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import Logo from "../../assets/login/safe-site-logo.svg";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "../../elements/Tabs";
import { setUserLogin } from "../../redux/actions/loginActions";
import DashboardActiveIcon from "../../assets/HeaderTabIcons/DashboardActive.svg";
import DashboardInactiveIcon from "../../assets/HeaderTabIcons/DashboardInactive.svg";
import AlertsInactiveIcon from "../../assets/HeaderTabIcons/AlertsInactive.svg";
import AlertsActiveIcon from "../../assets/HeaderTabIcons/AlertsActive.svg";
import GrokEyeInactiveIcon from "../../assets/HeaderTabIcons/GrokEyeInactive.svg";
import GrokEyeActiveIcon from "../../assets/HeaderTabIcons/GrokEyeActive.svg";
import useStyles from "./styles";

interface UserName {
  firstName: string | undefined;
  lastName: string | undefined;
  initials: string | undefined;
  role: string | undefined;
}

const Header: React.FC = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const {
    logoImg,
    header,
    headerRight,
    avatharName,
    avatharSection,
    avatharIcon,
    logoSection,
    avatharBackground,
    logoutSection,
    customMenu,
    logoutText,
    tabStyle,
    personIconClass,
    customNotificationTabs,
    avatharUserName,
    avatharUserRole,
  } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const { logout, dashboard, alerts, grokEye } = useTranslation();

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

  useEffect(() => {
    const data: any = localStorage.getItem("tabIndex");
    if (Number(data) !== 0) {
      localStorage.setItem("tabIndex", data);
      setTabIndex(Number(data));
    } else {
      localStorage.setItem("tabIndex", "0");
      setTabIndex(0);
    }
  }, []);

  const [name, setName] = useState<UserName>({
    firstName: "",
    lastName: "",
    initials: "",
    role: "",
  });
  const [anchorElUser, setAnchorElUser] = useState(null);

  const user = useSelector((state: RootState) => state.login.loginData);

  useEffect(() => {
    if (user) {
      let userFirstName = "",
        userLastName = "",
        initial1 = "",
        initial2 = "";
      let fname = user?.firstName;
      let lname = user?.lastName;
      if (fname?.split("")?.length > 0) {
        userFirstName = fname?.split("")[0].toUpperCase() + fname.substring(1);
      }
      if (lname?.split("")?.length > 0) {
        userLastName = lname?.split("")[0].toUpperCase() + lname.substring(1);
      }
      if (userFirstName && userFirstName?.split("").length > 0) {
        initial1 = userFirstName?.split("")[0].toUpperCase();
      }
      if (userLastName && userLastName?.split("").length > 0) {
        initial2 = userLastName?.split("")[0].toUpperCase();
      }
      setName({
        firstName: userFirstName,
        lastName: userLastName,
        initials: initial1 + initial2,
        role: user?.currentRoleType,
      });
    }
  }, [user]);

  const menuOptions = [logout];
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (menuOptions: string) => {
    if (menuOptions === "Logout") {
      navigate("/login");
    }
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    dispatch(setUserLogin({}));
    navigate("/login");
  };

  const handleTabs = (index: number) => {
    if (index === 0) {
      navigate("/dashboard");
    } else if (index === 1) {
      navigate("/alerts");
    } else if (index === 2) {
      navigate("/grokEye");
    }
    setTabIndex(index);
    localStorage.setItem("tabIndex", JSON.stringify(index));
  };

  const tabsList = [
    {
      name: dashboard,
      val: 0,
      icon: tabIndex === 0 ? DashboardActiveIcon : DashboardInactiveIcon,
    },
    {
      name: alerts,
      val: 1,
      icon: tabIndex === 1 ? AlertsActiveIcon : AlertsInactiveIcon,
    },
    {
      name: grokEye,
      val: 2,
      icon: tabIndex === 2 ? GrokEyeActiveIcon : GrokEyeInactiveIcon,
    },
  ];

  return (
    <Fragment>
      <Grid container className={header}>
        <Grid item xs={12} sm={12} md={3} lg={4} xl={4}>
          <div className={logoSection}>
            <div className={logoImg}>
              <img src={Logo} alt="logo" width={300} height={50} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className={tabStyle}>
            <Tabs
              initialIndex={tabIndex}
              tabsList={tabsList}
              handleTabs={handleTabs}
              dashboardNotificationClassName={customNotificationTabs}
              tabType={"headerTab"}
            />
          </div>
        </Grid>
        <Grid className={headerRight} item xs={12} sm={12} md={3} lg={4} xl={4}>
          <div>
            <div className={avatharSection}>
              <Avatar className={avatharBackground}><Typography variant="h3">{name.initials}</Typography></Avatar>
              <div className={avatharName}>
                <div className={avatharUserName}>
                <Typography variant="h5">
                  {name?.firstName + " " + name?.lastName}
                  </Typography>
                </div>
                <div className={avatharUserRole}><Typography variant="h5">{name?.role}</Typography></div>
              </div>
              <IconButton onClick={handleOpenUserMenu} className={avatharIcon}>
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: 32,
                    color: appTheme?.palette?.header?.white,
                  }}
                />
              </IconButton>
              <Menu
                className={customMenu}
                sx={{ mt: "25px" }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {menuOptions &&
                  menuOptions?.length > 0 &&
                  menuOptions?.map((menuOptions: any) => (
                    <MenuItem
                      key={menuOptions}
                      onClick={() => handleCloseUserMenu(menuOptions)}
                    >
                      <div className={logoutSection}>
                        {menuOptions && menuOptions === "Logout" ? (
                          <LogoutIcon sx={{ fontSize: 20 }} />
                        ) : (
                          <PersonIcon className={personIconClass} />
                        )}

                        <Typography
                          className={logoutText}
                          onClick={handleLogout}
                          textAlign="center"
                        >
                          {menuOptions}
                        </Typography>
                      </div>
                    </MenuItem>
                  ))}
              </Menu>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Header;
