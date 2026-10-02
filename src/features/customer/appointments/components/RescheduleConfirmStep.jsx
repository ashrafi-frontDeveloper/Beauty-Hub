// src/features/customer/appointments/components/RescheduleConfirmStep.jsx
import { toPersianDate } from "@/lib/dayjs";

const RescheduleConfirmStep = ({ appointment, newDate, newTime, onConfirm, onBack, isSubmitting }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl bg-surface p-4">
        <p className="mb-2 text-xs text-neutral-500">زمان فعلی</p>
        <p className="mb-4 text-sm text-neutral-400 line-through">
          {toPersianDate(appointment.date).format("DD MMMM")} — ساعت {appointment.time}
        </p>

        <p className="mb-1 text-xs text-neutral-500">زمان جدید</p>
        <p className="text-sm font-bold text-primary">
          {toPersianDate(newDate).format("DD MMMM")} — ساعت {newTime}
        </p>
      </div>

      <p className="text-center text-xs text-neutral-500">
        نوبت شما پس از تغییر، دوباره نیاز به تأیید سالن دارد
      </p>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="flex-1 rounded-xl border border-neutral-200 py-3 text-sm text-neutral-600 disabled:opacity-40"
        >
          مرحله قبل
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className="flex-1 rounded-xl bg-primary py-3 text-sm font-medium text-white disabled:opacity-60"
        >
          {isSubmitting ? "در حال ثبت..." : "تأیید تغییر"}
        </button>
      </div>
    </div>
  );
};

export default RescheduleConfirmStep;