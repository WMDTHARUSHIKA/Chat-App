// context/authContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    // onAuthStateChanged (demo)
    const timer = setTimeout(() => {
      setIsAuthenticated(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const login = async (email, password) => {
    try {
      // TODO: implement login
      // setUser(...)
      // setIsAuthenticated(true)
    } catch (e) {
      throw e;
    }
  };

  const logout = async () => {
    try {
      // TODO: implement logout
      // setUser(null)
      // setIsAuthenticated(false)
    } catch (e) {
      throw e;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);