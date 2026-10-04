// src/Components/common/AdminSidebar/AdminSidebar.jsx
import { NavLink, useNavigate } from "react-router";
import { X, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { adminNavItems } from "./fragments/NavItems.js";

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
    isActive ? "bg-primary text-white" : "text-neutral-300 hover:bg-white/10"
  }`;

export const AdminSidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <>
      {/* بک‌دراپ — فقط روی موبایل، وقتی Drawer بازه */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed inset-y-0 start-0 z-50 flex w-64 flex-col bg-admin-bg p-4
                    transition-transform duration-200 md:translate-x-0
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-bold text-white">Beauty Salon</span>
          <button type="button" onClick={onClose} className="md:hidden" aria-label="بستن منو">
            <X size={20} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {adminNavItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass} onClick={onClose}>
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 hover:bg-white/10"
        >
          <LogOut size={18} />
          خروج
        </button>
      </aside>
    </>
  );
};

export default AdminSidebar;