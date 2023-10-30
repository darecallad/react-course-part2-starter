import React from "react";
import useAuth from "./hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PriviteRoute = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PriviteRoute;
