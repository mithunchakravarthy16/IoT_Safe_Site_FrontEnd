import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedUserRoutes = (props: any) => {
  const { auth, role } = useAuth();
  //if the role required is there or not
  if (props.role) {
    return auth ? (
      props.role === "USER" ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedUserRoutes;
