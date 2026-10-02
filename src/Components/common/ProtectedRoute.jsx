// src/Components/common/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ allowedRole }) => {
  const { user, role, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-dvh items-center justify-center text-sm text-neutral-400">
        در حال بارگذاری...
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;

  if (allowedRole && role !== allowedRole) {
    return <Navigate to={role === "admin" ? "/admin" : "/"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;