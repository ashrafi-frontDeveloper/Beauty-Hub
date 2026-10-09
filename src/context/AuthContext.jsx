// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "@/services/authService";
import { updateUser } from "@/services/userService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authService.getSession().then((result) => {
      setUser(result);
      setIsLoading(false);
    });
  }, []);

  const login = async (credentials) => {
    const loggedInUser = await authService.login(credentials);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const register = async (data) => {
    const newUser = await authService.register(data);
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateProfile = async (data) => {
    const updated = await updateUser(user.id, data);
    setUser(updated);
    return updated;
  };

  const changePassword = (data) => authService.changePassword(user.id, data);

  return (
    <AuthContext.Provider
      value={{ user, role: user?.role ?? null, isLoading, login, register, logout, updateProfile, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth باید داخل AuthProvider استفاده شود");
  return context;
};