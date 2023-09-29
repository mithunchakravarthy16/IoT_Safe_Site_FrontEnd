import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import ProtectedRoutes from "./protectedRoutes";
import ProtectedUserRoutes from "./protectedUserRoutes";
import Login from "../pages/Login";
import AdminLogin from "../pages/AdminLogin";
import DevTools from "../pages/DevTools";
import DashBoard from "../pages/DashBoard";
import Alerts from "pages/Alerts";
import Profile from "../pages/Profile";
import Header from "../components/Header";
import Footer from "components/Footer";
import GrokEye from "pages/grokEye";
import { ThemeProvider } from "@mui/material/styles";
import themeVal from "../theme/muiTheme";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "services/firebase";
import Loader from "elements/Loader";

interface semanticTagsTypes {
  name: string;
  color: string;
  size: string | number;
}

interface buttonTagsTypes {
  name: string;
  bgColor: string;
}

const SAFE_SITE_Routes = (props: any) => {
  const { fontDetails } = props;
  const user = useSelector((state: RootState) => state.login.loginData);

  const [theme, setTheme] = useState<any>(themeVal);
  const [firebaseDataState, setFirebaseDataState] = useState<any>();

  useEffect(() => {
    const buttonCollectionRef = doc(db, "customTheming", "iotTheme");
    getDoc(buttonCollectionRef)
      .then((response) => {
        const btns = response.data();

        setFirebaseDataState(btns);
      })
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const customTheming: any = {};

    firebaseDataState?.semanticTags?.map((tag: semanticTagsTypes) => {
      const { name, color, size } = tag;

      customTheming[name?.toLowerCase()] = {
        color: color ? `${color}!important` : "unset",
        fontSize: size ? `${size.toString()}px !important` : "unset",
        fontWeight: "unset",
        // fontFamily: `'Poppins', sans-serif`,
      };
    });

    const palette: any = {};

    firebaseDataState?.buttons?.map((tag: buttonTagsTypes) => {
      const { name, bgColor } = tag;

      palette[name?.toLowerCase()] = {
        main: bgColor ? `${bgColor}!important` : "#nnn",
      };
    });

    theme.typography = { ...themeVal.typography, ...customTheming };
    theme.palette = { ...themeVal.palette, ...palette };

    setTheme(themeVal);
  }, [firebaseDataState]);

  return (
    <>
      {!firebaseDataState || !fontDetails ? (
        <Loader isHundredVh={true} />
      ) : (
        <>
          {user?.userName && user?.currentRoleType === "USER" && (
            <ThemeProvider theme={theme}>
              <Header />
            </ThemeProvider>
          )}
          <Routes>
            {/** Protected Routes */}

            {/** User Routes */}
            <Route
              path="/"
              element={<ProtectedUserRoutes role={user?.currentRoleType} />}
            >
              <Route path="/" element={<Navigate replace to="login" />} />
              <Route
                path="/dashboard"
                element={
                  <ThemeProvider theme={theme}>
                    <DashBoard />
                  </ThemeProvider>
                }
              />
              <Route
                path="/alerts"
                element={
                  <ThemeProvider theme={theme}>
                    <Alerts />
                  </ThemeProvider>
                }
              />
              <Route
                path="/grokeye"
                element={
                  <ThemeProvider theme={theme}>
                    <GrokEye />
                  </ThemeProvider>
                }
              />
              <Route
                path="/profile"
                element={
                  <ThemeProvider theme={theme}>
                    <Profile />
                  </ThemeProvider>
                }
              />
              <Route
                path="/grokeye"
                element={
                  <ThemeProvider theme={theme}>
                    <GrokEye />
                  </ThemeProvider>
                }
              />
            </Route>

            {/** Admin Routes */}
            <Route
              path="/"
              element={<ProtectedRoutes role={user?.currentRoleType} />}
            >
              <Route path="/" element={<Navigate replace to="login" />} />
              <Route path="/devTools" element={<DevTools />} />
            </Route>

            {/** Public Routes */}
            <Route
              path="/login"
              element={
                <ThemeProvider theme={theme}>
                  <Login />
                </ThemeProvider>
              }
            />
            <Route
              path="/adminLogin"
              element={
                <ThemeProvider theme={theme}>
                  <AdminLogin />
                </ThemeProvider>
              }
            />

            {/** Permission denied route */}
            <Route path="/denied" element={<div>No permission</div>} />
          </Routes>
          {user?.userName && user?.currentRoleType === "USER" && (
            <ThemeProvider theme={theme}>
              <Footer />
            </ThemeProvider>
          )}
        </>
      )}
    </>
  );
};

export default SAFE_SITE_Routes;
