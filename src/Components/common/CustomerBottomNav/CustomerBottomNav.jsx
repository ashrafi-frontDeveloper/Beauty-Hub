// src/Components/common/CustomerBottomNav/CustomerBottomNav.jsx
import { NavLink } from "react-router";
import navItems from "./fragments/NavItems";

const linkClass = ({ isActive }) =>
  `flex flex-col items-center justify-center gap-1 text-sm ${
    isActive ? "text-primary" : "text-neutral-600"
  }`;

export const CustomerBottomNav = () => {
  return (
    <nav
      aria-label="ناوبری اصلی مشتری"
      className="fixed inset-x-0 bottom-0 z-50 flex items-end justify-around
                 border-t border-neutral-200 bg-surface px-2 pt-2
                 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      {navItems.map(({ to, label, icon: Icon, end, primary }) =>
        primary ? (
          <NavLink
            key={to}
            to={to}
            className="flex flex-col items-center justify-center -translate-y-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
              <Icon size={22} />
            </span>
            <span className="mt-1 text-sm text-primary">{label}</span>
          </NavLink>
        ) : (
          <NavLink key={to} to={to} end={end} className={linkClass}>
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        )
      )}
    </nav>
  );
};

export default CustomerBottomNav;