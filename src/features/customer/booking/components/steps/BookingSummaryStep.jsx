// src/features/customer/booking/components/steps/BookingSummaryStep.jsx
import { toPersianDate } from "@/lib/dayjs";
import { formatToman } from "@/utils/formatCurrency";

const BookingSummaryStep = ({ service, date, time, onConfirm, onBack, isSubmitting }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl bg-surface p-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <span className="text-xs text-neutral-500">سرویس</span>
          <span className="text-sm font-medium text-neutral-800">{service.name}</span>
        </div>
        <div className="flex items-center justify-between border-b border-neutral-200 py-3">
          <span className="text-xs text-neutral-500">تاریخ و ساعت</span>
          <span className="text-sm font-medium text-neutral-800">
            {toPersianDate(date).format("DD MMMM")} — ساعت {time}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-neutral-200 py-3">
          <span className="text-xs text-neutral-500">مدت زمان</span>
          <span className="text-sm font-medium text-neutral-800">{service.duration} دقیقه</span>
        </div>
        <div className="flex items-center justify-between pt-3">
          <span className="text-xs text-neutral-500">هزینه</span>
          <span className="text-sm font-bold text-primary">{formatToman(service.price)}</span>
        </div>
      </div>

      <p className="text-center text-xs text-neutral-500">پرداخت: حضوری در سالن</p>

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
          {isSubmitting ? "در حال ثبت..." : "ثبت نهایی نوبت"}
        </button>
      </div>
    </div>
  );
};

export default BookingSummaryStep;