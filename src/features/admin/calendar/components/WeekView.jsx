// src/features/admin/calendar/components/WeekView.jsx
import dayjs, { toPersianDate } from "@/lib/dayjs";
import { getHourMarks, getTimelineHeight, HOUR_HEIGHT } from "../utils/calendarLayout";
import AppointmentBlock from "./AppointmentBlock";

const WeekView = ({ weekDays, appointments, onSelect }) => {
  const hourMarks = getHourMarks();
  const timelineHeight = getTimelineHeight();

  return (
    <div className="overflow-x-auto rounded-2xl bg-surface">
      <div className="grid min-w-[800px] grid-cols-[56px_repeat(7,1fr)]">
        <div />
        {weekDays.map((day) => {
          const persian = toPersianDate(day);
          const isToday = day.isSame(dayjs(), "day");
          return (
            <div
              key={day.format("YYYY-MM-DD")}
              className={`border-b border-s border-neutral-200 p-2 text-center ${
                isToday ? "bg-primary-light" : ""
              }`}
            >
              <p className="text-[11px] text-neutral-500">{persian.format("dddd")}</p>
              <p className={`text-sm font-bold ${isToday ? "text-primary" : "text-neutral-800"}`}>
                {persian.format("DD")}
              </p>
            </div>
          );
        })}

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

        {weekDays.map((day) => {
          const dateIso = day.format("YYYY-MM-DD");
          const dayAppointments = appointments.filter((a) => a.date === dateIso);
          return (
            <div
              key={dateIso}
              className="relative border-s border-neutral-200"
              style={{ height: timelineHeight }}
            >
              {hourMarks.map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-x-0 border-t border-neutral-100"
                  style={{ top: i * HOUR_HEIGHT }}
                />
              ))}
              {dayAppointments.map((appt) => (
                <AppointmentBlock key={appt.id} appointment={appt} onSelect={onSelect} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekView;