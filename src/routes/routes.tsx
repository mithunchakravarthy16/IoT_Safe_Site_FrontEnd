import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import ProtectedRoutes from "./protectedRoutes";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Profile from "../pages/Profile";
import GrokEye from "pages/GrokEye";

const SAFE_SITE_Routes = () => {
  const user = useSelector((state: RootState) => state.login.loginData);

  return (
    <>
      {user?.userName && "Header"}
      <Routes>
        {/** Protected Routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate replace to="login" />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/grokeye" element={<GrokEye />} />
        </Route>

        {/** Public Routes */}
        <Route path="/login" element={<Login />} />

        {/** Permission denied route */}
        <Route path="/denied" element={<div>No permission</div>} />
      </Routes>
      {user?.userName && "Footer"}
    </>
  );
};

export default SAFE_SITE_Routes;
