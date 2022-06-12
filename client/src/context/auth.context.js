import {createContext} from "react";

export const AuthContext = createContext({
    token: null,
    userID: null,
    login: (something1, something2) => {},
    logout: () => {},
    isAuthenticated: false
});