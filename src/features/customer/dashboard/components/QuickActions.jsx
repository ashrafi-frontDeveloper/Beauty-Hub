// src/features/customer/dashboard/components/QuickActions.jsx
import { Link } from "react-router";
import { CalendarPlus, ClipboardList } from "lucide-react";

const actions = [
  { to: "/book-appointment", label: "رزرو نوبت جدید", icon: CalendarPlus },
  { to: "/appointments", label: "نوبت‌های من", icon: ClipboardList },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className="flex flex-col items-center gap-2 rounded-2xl bg-surface p-4 text-center text-sm text-neutral-700"
        >
          <Icon className="text-primary" size={22} />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;