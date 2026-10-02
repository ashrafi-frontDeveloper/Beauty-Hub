// src/features/customer/appointments/AppointmentDetailPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { getAppointmentById, cancelAppointment } from "@/services/appointmentsService";
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { toPersianDate } from "@/lib/dayjs";
import { formatToman } from "@/utils/formatCurrency";
import ConfirmModal from "@/Components/ui/ConfirmModal";

const AppointmentDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  useEffect(() => {
    getAppointmentById(id).then((result) => {
      setAppointment(result);
      setIsLoading(false);
    });
  }, [id]);

  const handleCancel = async () => {
    setIsCancelling(true);
    const updated = await cancelAppointment(id);
    setAppointment(updated);
    setIsCancelling(false);
    setIsCancelModalOpen(false);
  };

  if (isLoading) {
    return <div className="h-40 animate-pulse rounded-2xl bg-surface" />;
  }

  if (!appointment) {
    return <p className="py-10 text-center text-sm text-neutral-500">نوبت پیدا نشد</p>;
  }

  const isUpcoming = appointment.status === "pending" || appointment.status === "confirmed";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => navigate(-1)} aria-label="بازگشت">
          <ChevronRight size={20} className="text-neutral-500" />
        </button>
        <h1 className="text-base font-bold text-neutral-800">جزئیات نوبت</h1>
      </div>

      <div className="rounded-2xl bg-surface p-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <span className="text-xs text-neutral-500">وضعیت</span>
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] ${
              APPOINTMENT_STATUS_STYLE[appointment.status]
            }`}
          >
            {APPOINTMENT_STATUS_LABEL[appointment.status]}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-neutral-200 py-3">
          <span className="text-xs text-neutral-500">سرویس</span>
          <span className="text-sm font-medium text-neutral-800">{appointment.serviceName}</span>
        </div>
        <div className="flex items-center justify-between border-b border-neutral-200 py-3">
          <span className="text-xs text-neutral-500">تاریخ و ساعت</span>
          <span className="text-sm font-medium text-neutral-800">
            {toPersianDate(appointment.date).format("DD MMMM")} — ساعت {appointment.time}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-neutral-200 py-3">
          <span className="text-xs text-neutral-500">مدت زمان</span>
          <span className="text-sm font-medium text-neutral-800">{appointment.duration} دقیقه</span>
        </div>
        <div className="flex items-center justify-between pt-3">
          <span className="text-xs text-neutral-500">هزینه</span>
          <span className="text-sm font-bold text-primary">{formatToman(appointment.price)}</span>
        </div>
      </div>

      {isUpcoming && (
        <div className="flex flex-col gap-2">
          <Link
            to={`/appointments/${appointment.id}/reschedule`}
            className="rounded-xl border border-neutral-200 py-3 text-center text-sm text-neutral-700"
          >
            تغییر تاریخ و ساعت
          </Link>
          <button
            type="button"
            onClick={() => setIsCancelModalOpen(true)}
            className="rounded-xl border border-red-200 py-3 text-sm text-red-500"
          >
            لغو نوبت
          </button>
        </div>
      )}

      <ConfirmModal
        isOpen={isCancelModalOpen}
        title="لغو نوبت؟"
        description="آیا مطمئن هستید که می‌خواهید این نوبت را لغو کنید؟"
        cancelLabel="نگه‌داشتن نوبت"
        confirmLabel={isCancelling ? "در حال لغو..." : "لغو نوبت"}
        variant="danger"
        onCancel={() => setIsCancelModalOpen(false)}
        onConfirm={handleCancel}
      />
    </div>
  );
};

export default AppointmentDetailPage;