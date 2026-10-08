// src/features/admin/calendar/components/CalendarNav.jsx
import { ChevronRight, ChevronLeft } from "lucide-react";

const CalendarNav = ({ label, onPrev, onNext, onToday }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <button type="button" onClick={onPrev} aria-label="قبلی" className="rounded-lg p-2 hover:bg-surface">
          <ChevronRight size={18} className="text-neutral-600" />
        </button>
        <button type="button" onClick={onNext} aria-label="بعدی" className="rounded-lg p-2 hover:bg-surface">
          <ChevronLeft size={18} className="text-neutral-600" />
        </button>
        <button
          type="button"
          onClick={onToday}
          className="ms-1 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600"
        >
          امروز
        </button>
      </div>
      <p className="text-sm font-bold text-neutral-800">{label}</p>
    </div>
  );
};

export default CalendarNav;