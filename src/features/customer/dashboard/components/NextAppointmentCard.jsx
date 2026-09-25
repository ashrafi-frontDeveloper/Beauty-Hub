// src/features/customer/dashboard/components/NextAppointmentCard.jsx
import { Link } from "react-router";
import { Calendar } from "lucide-react";
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { formatToman } from "@/utils/formatCurrency";

const NextAppointmentCard = ({ appointment, isLoading }) => {
  // ---- Loading State ----
  if (isLoading) {
    return (
      <div className="animate-pulse rounded-2xl bg-surface p-4">
        <div className="mb-3 h-3 w-20 rounded bg-neutral-200" />
        <div className="h-5 w-40 rounded bg-neutral-200" />
      </div>
    );
  }

  // ---- Empty State ----
  if (!appointment) {
    return (
      <div className="rounded-2xl bg-surface p-6 text-center">
        <Calendar className="mx-auto mb-2 text-neutral-400" size={28} />
        <p className="text-sm text-neutral-500">نوبت فعالی ندارید</p>
        <Link
          to="/book-appointment"
          className="mt-3 inline-block rounded-xl bg-primary px-4 py-2 text-sm text-white"
        >
          رزرو نوبت جدید
        </Link>
      </div>
    );
  }

  // ---- Success State ----
  return (
    <div className="rounded-2xl bg-surface p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-neutral-500">نوبت بعدی</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] ${
            APPOINTMENT_STATUS_STYLE[appointment.status]
          }`}
        >
          {APPOINTMENT_STATUS_LABEL[appointment.status]}
        </span>
      </div>
      <p className="text-base font-bold text-neutral-800">
        {appointment.serviceName}
      </p>
      <p className="mt-1 text-sm text-neutral-500">
        {appointment.date} — ساعت {appointment.time}
      </p>
      <p className="mt-1 text-sm text-neutral-500">
        {formatToman(appointment.price)}
      </p>
    </div>
  );
};

export default NextAppointmentCard;