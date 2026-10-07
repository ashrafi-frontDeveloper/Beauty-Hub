// src/features/admin/appointments/components/AppointmentsFilterBar.jsx
import { Search } from "lucide-react";

const STATUS_FILTERS = [
  { id: "all", label: "همه" },
  { id: "pending", label: "در انتظار تأیید" },
  { id: "confirmed", label: "تأیید شده" },
  { id: "completed", label: "انجام شده" },
  { id: "cancelled", label: "لغو شده" },
];

const AppointmentsFilterBar = ({ search, onSearchChange, statusFilter, onStatusChange }) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5 md:w-72">
        <Search className="text-neutral-400" size={18} />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="جستجوی مشتری یا سرویس..."
          className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {STATUS_FILTERS.map(({ id, label }) => {
          const isActive = id === statusFilter;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onStatusChange(id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs transition-colors ${
                isActive ? "bg-primary text-white" : "bg-surface text-neutral-600"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentsFilterBar;