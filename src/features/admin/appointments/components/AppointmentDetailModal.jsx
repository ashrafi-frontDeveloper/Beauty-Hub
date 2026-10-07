// src/features/admin/appointments/components/AppointmentDetailModal.jsx
import Modal from "@/Components/ui/Modal";
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { toPersianDate } from "@/lib/dayjs";
import { formatToman } from "@/utils/formatCurrency";

const Row = ({ label, value }) => (
  <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
    <span className="text-xs text-neutral-500">{label}</span>
    <span className="text-sm font-medium text-neutral-800">{value}</span>
  </div>
);

const AppointmentDetailModal = ({ appointment, onClose }) => {
  return (
    <Modal isOpen={Boolean(appointment)} title="جزئیات نوبت" onClose={onClose}>
      {appointment && (
        <div className="flex flex-col gap-3">
          <Row label="مشتری" value={appointment.customerName} />
          <Row label="شماره تماس" value={appointment.customerPhone} />
          <Row label="سرویس" value={appointment.serviceName} />
          <Row
            label="تاریخ و ساعت"
            value={`${toPersianDate(appointment.date).format("DD MMMM")} — ${appointment.time}`}
          />
          <Row label="مدت زمان" value={`${appointment.duration} دقیقه`} />
          <Row label="مبلغ" value={formatToman(appointment.price)} />
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500">وضعیت</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] ${
                APPOINTMENT_STATUS_STYLE[appointment.status]
              }`}
            >
              {APPOINTMENT_STATUS_LABEL[appointment.status]}
            </span>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default AppointmentDetailModal;