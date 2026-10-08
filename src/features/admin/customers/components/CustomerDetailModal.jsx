// src/features/admin/customers/components/CustomerDetailModal.jsx
import { useEffect, useState } from "react";
import Modal from "@/Components/ui/Modal";
import { getCustomerAppointments } from "@/services/adminCustomersService";
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { toPersianDate } from "@/lib/dayjs";
import { formatToman } from "@/utils/formatCurrency";

const CustomerDetailModal = ({ customer, onClose }) => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!customer) return;
    setIsLoading(true);
    getCustomerAppointments(customer.id).then((result) => {
      setAppointments(result);
      setIsLoading(false);
    });
  }, [customer]);

  return (
    <Modal isOpen={Boolean(customer)} title={customer?.name ?? ""} onClose={onClose}>
      {customer && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-sm">
            <span className="text-neutral-500">شماره موبایل</span>
            <span className="font-medium text-neutral-800">{customer.phone}</span>
          </div>
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-sm">
            <span className="text-neutral-500">ایمیل</span>
            <span className="font-medium text-neutral-800">{customer.email || "—"}</span>
          </div>

          <div>
            <p className="mb-2 text-xs font-bold text-neutral-500">تاریخچه‌ی نوبت‌ها</p>

            {isLoading ? (
              <div className="h-20 animate-pulse rounded-xl bg-neutral-100" />
            ) : appointments.length === 0 ? (
              <p className="text-xs text-neutral-400">هنوز نوبتی ثبت نکرده است</p>
            ) : (
              <div className="flex flex-col gap-2">
                {appointments.map((appt) => (
                  <div
                    key={appt.id}
                    className="flex items-center justify-between rounded-xl bg-bg p-3 text-xs"
                  >
                    <div>
                      <p className="font-medium text-neutral-800">{appt.serviceName}</p>
                      <p className="mt-0.5 text-neutral-500">
                        {toPersianDate(appt.date).format("DD MMMM")} — {appt.time}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`rounded-full px-2 py-0.5 ${APPOINTMENT_STATUS_STYLE[appt.status]}`}
                      >
                        {APPOINTMENT_STATUS_LABEL[appt.status]}
                      </span>
                      <span className="text-neutral-500">{formatToman(appt.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CustomerDetailModal;