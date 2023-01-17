import React from "react";
import { Navigate } from "react-router-dom";

type IPrivateRoute = {
  children: React.ReactElement;
};

function PrivateRoute({ children }: IPrivateRoute) {
  const isLogin = sessionStorage.getItem("userToken");
  return isLogin ? children : <Navigate to="/" replace />;
}

export default PrivateRoute;
