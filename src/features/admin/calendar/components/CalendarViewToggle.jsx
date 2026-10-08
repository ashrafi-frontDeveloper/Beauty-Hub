// src/features/admin/calendar/components/CalendarViewToggle.jsx
const VIEWS = [
  { id: "week", label: "هفتگی" },
  { id: "day", label: "روزانه" },
];

const CalendarViewToggle = ({ view, onChange }) => {
  return (
    <div className="flex gap-1 rounded-xl bg-surface p-1">
      {VIEWS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            view === id ? "bg-primary text-white" : "text-neutral-500"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CalendarViewToggle;