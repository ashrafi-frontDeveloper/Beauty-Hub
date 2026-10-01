// src/features/customer/booking/components/BookingStepper.jsx
import { ChevronRight } from "lucide-react";

const STEP_LABELS = ["خدمات", "تاریخ", "ساعت", "تأیید"];

const BookingStepper = ({ step, onBack }) => {
  return (
    <div className="mb-5">
      <div className="mb-3 flex items-center gap-2">
        {step > 1 && (
          <button type="button" onClick={onBack} aria-label="بازگشت">
            <ChevronRight size={20} className="text-neutral-500" />
          </button>
        )}
        <h1 className="text-base font-bold text-neutral-800">رزرو نوبت جدید</h1>
      </div>

      <div className="flex items-center gap-1.5">
        {STEP_LABELS.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= step;
          return (
            <div key={label} className="flex flex-1 flex-col gap-1">
              <div className={`h-1.5 rounded-full ${isActive ? "bg-primary" : "bg-neutral-200"}`} />
              <span className={`text-[10px] ${isActive ? "text-primary" : "text-neutral-400"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingStepper;