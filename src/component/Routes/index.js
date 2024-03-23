import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../Utils";


export const RequireAuth = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/Login" replace />;
};

export const LoginedIn = ({ children }) => {
  return !isLoggedIn() ? children : <Navigate to="/" replace />;
};
