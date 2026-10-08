// src/features/admin/calendar/components/AppointmentBlock.jsx
import { APPOINTMENT_STATUS_STYLE } from "@/constants/appointmentStatus";
import { getBlockPosition } from "../utils/calendarLayout";

const AppointmentBlock = ({ appointment, onSelect }) => {
  const { top, height } = getBlockPosition(appointment.time, appointment.duration);

  return (
    <button
      type="button"
      onClick={() => onSelect(appointment)}
      style={{ top, height }}
      className={`absolute inset-x-1 overflow-hidden rounded-lg px-2 py-1 text-start text-[11px] ${APPOINTMENT_STATUS_STYLE[appointment.status]}`}
    >
      <p className="truncate font-medium">{appointment.serviceName}</p>
      <p className="truncate opacity-80">{appointment.customerName}</p>
    </button>
  );
};

export default AppointmentBlock;