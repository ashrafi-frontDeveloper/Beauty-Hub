// src/features/admin/appointments/components/AppointmentsTable.jsx
import { Eye, Check, CheckCheck, X } from "lucide-react";
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { toPersianDate } from "@/lib/dayjs";
import { formatToman } from "@/utils/formatCurrency";

const AppointmentsTable = ({ appointments, isLoading, onView, onConfirm, onComplete, onCancel }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-14 animate-pulse rounded-xl bg-surface" />
        ))}
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <div className="rounded-2xl bg-surface p-10 text-center text-sm text-neutral-500">
        نوبتی با این مشخصات پیدا نشد
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-surface">
      <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="border-b border-neutral-200 text-xs text-neutral-500">
            <th className="p-3 text-start font-medium">مشتری</th>
            <th className="p-3 text-start font-medium">سرویس</th>
            <th className="p-3 text-start font-medium">تاریخ و ساعت</th>
            <th className="p-3 text-start font-medium">مبلغ</th>
            <th className="p-3 text-start font-medium">وضعیت</th>
            <th className="p-3 text-start font-medium">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id} className="border-b border-neutral-100 last:border-0">
              <td className="p-3">
                <p className="font-medium text-neutral-800">{appt.customerName}</p>
                <p className="text-xs text-neutral-500">{appt.customerPhone}</p>
              </td>
              <td className="p-3 text-neutral-700">{appt.serviceName}</td>
              <td className="p-3 text-neutral-700">
                {toPersianDate(appt.date).format("DD MMMM")} — {appt.time}
              </td>
              <td className="p-3 text-neutral-700">{formatToman(appt.price)}</td>
              <td className="p-3">
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] ${APPOINTMENT_STATUS_STYLE[appt.status]}`}
                >
                  {APPOINTMENT_STATUS_LABEL[appt.status]}
                </span>
              </td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onView(appt)}
                    aria-label="مشاهده"
                    className="text-neutral-400 hover:text-neutral-700"
                  >
                    <Eye size={16} />
                  </button>

                  {appt.status === "pending" && (
                    <>
                      <button
                        type="button"
                        onClick={() => onConfirm(appt.id)}
                        aria-label="تأیید"
                        className="text-green-600 hover:text-green-700"
                      >
                        <Check size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => onCancel(appt.id)}
                        aria-label="لغو"
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </>
                  )}

                  {appt.status === "confirmed" && (
                    <>
                      <button
                        type="button"
                        onClick={() => onComplete(appt.id)}
                        aria-label="تکمیل"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <CheckCheck size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => onCancel(appt.id)}
                        aria-label="لغو"
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;