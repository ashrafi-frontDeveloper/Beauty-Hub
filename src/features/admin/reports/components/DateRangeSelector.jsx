// src/features/admin/reports/components/DateRangeSelector.jsx
import { REPORT_RANGES } from "@/constants/reportRanges";

const DateRangeSelector = ({ value, onChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {REPORT_RANGES.map(({ id, label }) => {
        const isActive = id === value;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs transition-colors ${
              isActive ? "bg-primary text-white" : "bg-surface text-neutral-600"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default DateRangeSelector;