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

const SAFE_SITE_Routes = () => {
  const user = useSelector((state: RootState) => state.login.loginData);

  console.log("user", user);

  return (
    <>
      {user?.userName && user?.currentRoleType === "USER" && <Header />}
      <Routes>
        {/** Protected Routes */}

        {/** User Routes */}
        <Route
          path="/"
          element={<ProtectedUserRoutes role={user?.currentRoleType} />}
        >
          <Route path="/" element={<Navigate replace to="login" />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/grokeye" element={<GrokEye />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/grokeye" element={<GrokEye />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/adminLogin" element={<AdminLogin />} />

        {/** Permission denied route */}
        <Route path="/denied" element={<div>No permission</div>} />
      </Routes>
      {user?.userName && user?.currentRoleType === "USER" && <Footer />}
    </>
  );
};

export default SAFE_SITE_Routes;
