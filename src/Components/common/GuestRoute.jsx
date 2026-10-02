// src/Components/common/GuestRoute.jsx
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/context/AuthContext";

const GuestRoute = () => {
  const { user, role, isLoading } = useAuth();

  if (isLoading) return null;
  if (user) return <Navigate to={role === "admin" ? "/admin" : "/"} replace />;

  return <Outlet />;
};

export default GuestRoute;