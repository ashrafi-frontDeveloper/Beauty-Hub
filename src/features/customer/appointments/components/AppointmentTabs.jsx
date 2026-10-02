// src/features/customer/appointments/components/AppointmentTabs.jsx
const TABS = [
  { id: "upcoming", label: "آینده" },
  { id: "completed", label: "انجام شده" },
  { id: "cancelled", label: "لغو شده" },
];

const AppointmentTabs = ({ activeTab, onChange }) => {
  return (
    <div className="flex gap-2 rounded-xl bg-surface p-1">
      {TABS.map(({ id, label }) => {
        const isActive = id === activeTab;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`flex-1 rounded-lg py-2 text-xs font-medium transition-colors ${
              isActive ? "bg-primary text-white" : "text-neutral-500"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default AppointmentTabs;