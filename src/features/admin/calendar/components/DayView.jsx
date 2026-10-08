// src/features/admin/calendar/components/DayView.jsx
import { toPersianDate } from "@/lib/dayjs";
import { getHourMarks, getTimelineHeight, HOUR_HEIGHT } from "../utils/calendarLayout";
import AppointmentBlock from "./AppointmentBlock";

const DayView = ({ day, appointments, onSelect }) => {
  const hourMarks = getHourMarks();
  const timelineHeight = getTimelineHeight();
  const dateIso = day.format("YYYY-MM-DD");
  const dayAppointments = appointments.filter((a) => a.date === dateIso);

  return (
    <div className="overflow-x-auto rounded-2xl bg-surface p-3">
      <p className="mb-3 text-sm font-bold text-neutral-800">
        {toPersianDate(day).format("dddd، DD MMMM")}
      </p>

      <div className="grid min-w-[320px] grid-cols-[56px_1fr]">
        <div className="relative" style={{ height: timelineHeight }}>
          {hourMarks.map((label, i) => (
            <span
              key={label}
              className="absolute -translate-y-1/2 text-[10px] text-neutral-400"
              style={{ top: i * HOUR_HEIGHT }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="relative border-s border-neutral-200" style={{ height: timelineHeight }}>
          {hourMarks.map((_, i) => (
            <div
              key={i}
              className="absolute inset-x-0 border-t border-neutral-100"
              style={{ top: i * HOUR_HEIGHT }}
            />
          ))}
          {dayAppointments.length === 0 && (
            <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-xs text-neutral-400">
              نوبتی در این روز نیست
            </p>
          )}
          {dayAppointments.map((appt) => (
            <AppointmentBlock key={appt.id} appointment={appt} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayView;