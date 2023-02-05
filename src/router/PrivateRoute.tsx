import React, { useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }: any) => {
  const { state } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lastPath = pathname + search;

  useMemo(() => localStorage.setItem("lastPath", lastPath), [pathname, search]);

  return state.logged ? children : <Navigate to="/login" />;
};
