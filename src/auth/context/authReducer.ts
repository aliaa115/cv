import { authStateType, authTypes } from "../types/types";

type props = { type: authTypes; payload: any };

export const authReducer = (
  initialState: authStateType,
  action: props
): authStateType => {
  switch (action.type) {
    case "[Auth] Login":
      return {
        ...initialState,
        logged: true,
        name: action.payload,
      };

    case "[Auth] Logout":
      return {
        ...initialState,
        logged: false,
        name: null,
      };

    default:
      return initialState;
  }
};
