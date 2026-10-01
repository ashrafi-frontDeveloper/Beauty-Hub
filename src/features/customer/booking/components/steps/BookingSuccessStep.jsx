// src/features/customer/booking/components/steps/BookingSuccessStep.jsx
import { Link } from "react-router";
import { CheckCircle2 } from "lucide-react";

const BookingSuccessStep = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <CheckCircle2 className="text-primary" size={56} />
      <p className="text-base font-bold text-neutral-800">نوبت شما با موفقیت ثبت شد!</p>
      <p className="text-sm text-neutral-500">
        جزئیات نوبت از طریق پیامک و ایمیل به شما اطلاع‌رسانی خواهد شد.
      </p>

      <div className="mt-4 flex w-full flex-col gap-3">
        <Link to="/appointments" className="rounded-xl bg-primary py-3 text-center text-sm font-medium text-white">
          مشاهده نوبت‌های من
        </Link>
        <Link to="/" className="rounded-xl border border-neutral-200 py-3 text-center text-sm text-neutral-600">
          بازگشت به داشبورد
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccessStep;