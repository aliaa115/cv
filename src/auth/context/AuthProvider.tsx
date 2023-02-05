import React, { useEffect, useReducer } from "react";
import { authStateType } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const init = (): authStateType => {
  const name = (JSON.parse(localStorage.getItem("user")) as string) || null;
  return {
    logged: !!name,
    name,
  };
};

export const AuthProvider = ({ children }: any) => {
  const initialState: authStateType = {
    logged: false,
    name: null,
  };
  // const [state, dispatch] = useReducer();
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const logIn = (nombre: string) => {
    dispatch({ type: "[Auth] Login", payload: nombre });
    localStorage.setItem("user", JSON.stringify(nombre));
  };
  const logOut = () => {
    dispatch({ type: "[Auth] Logout", payload: "" });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ state, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
