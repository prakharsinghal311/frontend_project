import React from "react";
import Login from "../pages/Login";
import Store from "../pages/Store";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLoggedIn);
  return isLoggedIn ? <Store /> : <Login />;
};

export default PrivateRoute;
