// src/features/admin/dashboard/components/TodaysAppointmentsList.jsx
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { formatToman } from "@/utils/formatCurrency";

const TodaysAppointmentsList = ({ appointments, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-16 animate-pulse rounded-xl bg-surface" />
        ))}
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <div className="rounded-2xl bg-surface p-6 text-center text-sm text-neutral-500">
        امروز نوبتی ثبت نشده است
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y divide-neutral-200 overflow-hidden rounded-2xl bg-surface">
      {appointments.map((appt) => (
        <div key={appt.id} className="flex items-center justify-between p-3">
          <div>
            <p className="text-sm font-medium text-neutral-800">{appt.serviceName}</p>
            <p className="text-xs text-neutral-500">ساعت {appt.time}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500">{formatToman(appt.price)}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] ${
                APPOINTMENT_STATUS_STYLE[appt.status]
              }`}
            >
              {APPOINTMENT_STATUS_LABEL[appt.status]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodaysAppointmentsList;