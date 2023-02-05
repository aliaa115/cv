import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublickRoute = ({ children }: any) => {
  const { state } = useContext(AuthContext);

  return !state.logged ? children : <Navigate to="/" />;
};
