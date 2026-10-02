// src/features/customer/appointments/components/AppointmentCard.jsx
import { useNavigate } from "react-router";
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { toPersianDate } from "@/lib/dayjs";
import { formatToman } from "@/utils/formatCurrency";

const AppointmentCard = ({ appointment }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/appointments/${appointment.id}`)}
      className="flex w-full flex-col gap-1 rounded-2xl bg-surface p-4 text-start"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-800">{appointment.serviceName}</p>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] ${
            APPOINTMENT_STATUS_STYLE[appointment.status]
          }`}
        >
          {APPOINTMENT_STATUS_LABEL[appointment.status]}
        </span>
      </div>
      <p className="text-xs text-neutral-500">
        {toPersianDate(appointment.date).format("DD MMMM")} — ساعت {appointment.time}
      </p>
      <p className="text-xs text-neutral-500">{formatToman(appointment.price)}</p>
    </button>
  );
};

export default AppointmentCard;