// src/features/admin/calendar/AdminCalendarPage.jsx
import { useEffect, useState } from "react";
import dayjs, { toPersianDate } from "@/lib/dayjs";
import { getAppointmentsInRange } from "@/services/adminAppointmentsService";
import { getWeekDays } from "./utils/weekRange";
import CalendarViewToggle from "./components/CalendarViewToggle";
import CalendarNav from "./components/CalendarNav";
import WeekView from "./components/WeekView";
import DayView from "./components/DayView";
import AppointmentDetailModal from "../appointments/components/AppointmentDetailModal";

const AdminCalendarPage = () => {
  const [view, setView] = useState("week");
  const [referenceDate, setReferenceDate] = useState(dayjs());
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const weekDays = getWeekDays(referenceDate);
  const rangeStart = view === "week" ? weekDays[0] : referenceDate;
  const rangeEnd = view === "week" ? weekDays[6] : referenceDate;
  const rangeStartIso = rangeStart.format("YYYY-MM-DD");
  const rangeEndIso = rangeEnd.format("YYYY-MM-DD");

  useEffect(() => {
    setIsLoading(true);
    getAppointmentsInRange(rangeStartIso, rangeEndIso).then((result) => {
      setAppointments(result);
      setIsLoading(false);
    });
  }, [rangeStartIso, rangeEndIso]);

  const goPrev = () => setReferenceDate((d) => d.subtract(1, view === "week" ? "week" : "day"));
  const goNext = () => setReferenceDate((d) => d.add(1, view === "week" ? "week" : "day"));
  const goToday = () => setReferenceDate(dayjs());

  const rangeLabel =
    view === "week"
      ? `${toPersianDate(weekDays[0]).format("DD MMMM")} تا ${toPersianDate(weekDays[6]).format("DD MMMM")}`
      : toPersianDate(referenceDate).format("dddd، DD MMMM YYYY");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-neutral-800">تقویم</h1>
        <CalendarViewToggle view={view} onChange={setView} />
      </div>

      <CalendarNav label={rangeLabel} onPrev={goPrev} onNext={goNext} onToday={goToday} />

      {isLoading ? (
        <div className="h-96 animate-pulse rounded-2xl bg-surface" />
      ) : view === "week" ? (
        <WeekView weekDays={weekDays} appointments={appointments} onSelect={setSelectedAppointment} />
      ) : (
        <DayView day={referenceDate} appointments={appointments} onSelect={setSelectedAppointment} />
      )}

      <AppointmentDetailModal
        appointment={selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
      />
    </div>
  );
};

export default AdminCalendarPage;