import React from "react";

interface AuthContextInterface {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextInterface>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
