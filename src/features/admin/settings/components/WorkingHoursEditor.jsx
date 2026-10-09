// src/features/admin/settings/components/WorkingHoursEditor.jsx
import { useEffect, useState } from "react";
import { WEEKDAYS_ORDERED } from "@/constants/weekdays";
import { getWorkingHours, updateWorkingHours } from "@/services/adminSettingsService";

const DEFAULT_HOURS = { open: "09:00", close: "20:00" };

const WorkingHoursEditor = () => {
  const [hours, setHours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  useEffect(() => {
    getWorkingHours().then((result) => {
      setHours(result);
      setIsLoading(false);
    });
  }, []);

  const toggleDay = (key) => {
    setHours((prev) => ({ ...prev, [key]: prev[key] ? null : { ...DEFAULT_HOURS } }));
  };

  const changeTime = (key, field, value) => {
    setHours((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);
    await updateWorkingHours(hours);
    setIsSaving(false);
    setSaveMessage("ساعات کاری با موفقیت ذخیره شد");
  };

  if (isLoading || !hours) {
    return <div className="h-64 animate-pulse rounded-2xl bg-surface" />;
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-surface p-4">
      <h2 className="text-sm font-bold text-neutral-800">ساعات کاری سالن</h2>

      {WEEKDAYS_ORDERED.map(({ key, label }) => {
        const dayHours = hours[key];
        const isOpen = Boolean(dayHours);

        return (
          <div
            key={key}
            className="flex flex-col gap-2 border-b border-neutral-100 pb-3 last:border-0 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toggleDay(key)}
                aria-label={isOpen ? "تعطیل کردن" : "باز کردن"}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                  isOpen ? "bg-primary" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    isOpen ? "translate-x-0.5" : "translate-x-5"
                  }`}
                />
              </button>
              <span className="w-16 text-sm text-neutral-700">{label}</span>
            </div>

            {isOpen ? (
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  value={dayHours.open}
                  onChange={(e) => changeTime(key, "open", e.target.value)}
                  className="rounded-lg border border-neutral-200 px-2 py-1.5 text-sm"
                />
                <span className="text-xs text-neutral-400">تا</span>
                <input
                  type="time"
                  value={dayHours.close}
                  onChange={(e) => changeTime(key, "close", e.target.value)}
                  className="rounded-lg border border-neutral-200 px-2 py-1.5 text-sm"
                />
              </div>
            ) : (
              <span className="text-xs text-neutral-400">تعطیل</span>
            )}
          </div>
        );
      })}

      {saveMessage && <p className="text-xs text-green-600">{saveMessage}</p>}

      <button
        type="button"
        onClick={handleSave}
        disabled={isSaving}
        className="mt-2 self-start rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {isSaving ? "در حال ذخیره..." : "ذخیره ساعات کاری"}
      </button>
    </div>
  );
};

export default WorkingHoursEditor;