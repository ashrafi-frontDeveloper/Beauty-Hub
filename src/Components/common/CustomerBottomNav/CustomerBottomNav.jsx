// // src/Components/common/CustomerBottomNav/CustomerBottomNav.jsx
import { NavLink } from "react-router";
import navItems from "./fragments/NavItems";

const CustomerBottomNav = () => {
  return (
    <nav
      aria-label="ناوبری اصلی مشتری"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-pink-100/80 bg-white/95 px-2 pt-2 shadow-[0_-8px_30px_-18px_rgba(190,24,93,0.22)] backdrop-blur-xl [padding-bottom:max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex w-full max-w-xl items-end justify-around gap-1">
        {navItems.map(({ to, label, icon: Icon, end, primary }) =>
          primary ? (
            <NavLink
              key={to}
              to={to}
              end={end}
              aria-label={label}
              className={({ isActive }) =>
                `group -translate-y-2 flex min-w-0 flex-1 flex-col items-center justify-center gap-1 transition-transform duration-200 ${
                  isActive ? "text-pink-700" : "text-pink-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-200 group-hover:-translate-y-0.5 group-active:scale-95 ${
                      isActive
                        ? "bg-gradient-to-br from-pink-500 to-pink-700 shadow-pink-300/60 ring-4 ring-pink-100"
                        : "bg-gradient-to-br from-pink-500 to-fuchsia-600 shadow-pink-300/50"
                    }`}
                  >
                    <Icon size={23} strokeWidth={2} />
                  </span>

                  <span className="max-w-full truncate text-[11px] font-bold">
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ) : (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `group relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 ${
                  isActive
                    ? "bg-pink-50 text-pink-700"
                    : "text-neutral-500 hover:bg-pink-50/70 hover:text-pink-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={21}
                    strokeWidth={isActive ? 2.3 : 1.8}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5"
                  />

                  <span
                    className={`max-w-full truncate text-[10px] sm:text-[11px] ${
                      isActive ? "font-bold" : "font-medium"
                    }`}
                  >
                    {label}
                  </span>

                  {isActive && (
                    <span className="absolute top-0 h-0.5 w-5 rounded-full bg-pink-500" />
                  )}
                </>
              )}
            </NavLink>
          )
        )}
      </div>
    </nav>
  );
};

export { CustomerBottomNav };
export default CustomerBottomNav;
