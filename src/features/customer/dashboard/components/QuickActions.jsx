// // src/features/customer/dashboard/components/QuickActions.jsx
import { Link } from "react-router";
import {
  ArrowLeft,
  CalendarPlus,
  ClipboardList,
} from "lucide-react";

const actions = [
  {
    to: "/book-appointment",
    label: "رزرو نوبت جدید",
    description: "زمان مناسب خودت رو انتخاب کن",
    icon: CalendarPlus,
  },
  {
    to: "/appointments",
    label: "نوبت‌های من",
    description: "مشاهده‌ی برنامه‌ی مراجعه",
    icon: ClipboardList,
  },
];

const QuickActions = () => {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">
          دسترسی سریع
        </h2>

        <p className="mt-1 text-xs leading-6 text-neutral-500 sm:text-sm">
          کارهای موردنیازت رو سریع‌تر انجام بده.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {actions.map(({ to, label, description, icon: Icon }, index) => (
          <Link
            key={to}
            to={to}
            className="group flex min-w-0 items-center gap-3 rounded-2xl border border-pink-100/80 bg-white p-4 shadow-sm shadow-pink-100/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-md hover:shadow-pink-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 sm:gap-4 sm:rounded-3xl sm:p-5"
          >
            <div
              className={`flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-200 sm:size-14 ${
                index === 0
                  ? "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
                  : "bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white"
              }`}
            >
              <Icon size={24} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold leading-6 text-neutral-800 sm:text-base">
                {label}
              </h3>

              <p className="mt-1 text-xs leading-6 text-neutral-500">
                {description}
              </p>
            </div>

            <ArrowLeft
              size={18}
              className="shrink-0 text-neutral-400 transition-all duration-200 group-hover:-translate-x-1 group-hover:text-pink-600"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
