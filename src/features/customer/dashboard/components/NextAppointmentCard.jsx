// src/features/customer/dashboard/components/NextAppointmentCard.jsx

import { Link } from "react-router";
import { CalendarDays, Clock3, Sparkles, Wallet } from "lucide-react";
import {
  APPOINTMENT_STATUS_LABEL,
  APPOINTMENT_STATUS_STYLE,
} from "@/constants/appointmentStatus";
import { formatToman } from "@/utils/formatCurrency";
import { toPersianDate } from "@/lib/dayjs";

const NextAppointmentCard = ({ appointment, isLoading }) => {
  if (isLoading) {
    return (
      <div className="overflow-hidden rounded-3xl border border-pink-100/80 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-4 w-24 animate-pulse rounded-full bg-pink-100" />
          <div className="size-10 animate-pulse rounded-xl bg-neutral-100" />
        </div>

        <div className="mb-3 h-6 w-40 animate-pulse rounded-lg bg-neutral-100" />
        <div className="h-4 w-52 max-w-full animate-pulse rounded-lg bg-neutral-100" />

        <div className="mt-6 border-t border-neutral-100 pt-4">
          <div className="h-4 w-28 animate-pulse rounded-lg bg-neutral-100" />
        </div>
      </div>
    );
  }

  if (!appointment) {
    return (
      <div className="group relative overflow-hidden rounded-3xl border border-dashed border-pink-200 bg-gradient-to-br from-white to-pink-50/70 p-6 text-center sm:p-8">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-white text-pink-500 shadow-sm ring-1 ring-pink-100 transition-transform duration-300 group-hover:-translate-y-1">
          <CalendarDays size={30} strokeWidth={1.7} />
        </div>

        <h3 className="text-base font-bold text-neutral-800">
          هنوز نوبتی رزرو نکردی
        </h3>

        <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-neutral-500">
          از بین خدمات زیبایی، گزینه‌ی موردعلاقه‌ات رو انتخاب کن.
        </p>

        <Link
          to="/book-appointment"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-pink-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
        >
          <Sparkles size={17} />
          رزرو نوبت جدید
        </Link>
      </div>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-pink-100/80 bg-white shadow-sm shadow-pink-100/40 transition-shadow duration-300 hover:shadow-md hover:shadow-pink-100/60">
      <div className="flex items-start justify-between gap-3 border-b border-pink-100/70 bg-gradient-to-l from-pink-50/90 to-white p-5 sm:p-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 sm:text-sm">
            <span className="size-1.5 rounded-full bg-pink-500" />
            برنامه‌ی زیبایی تو
          </span>

          <h2 className="mt-2 text-lg font-extrabold text-neutral-800 sm:text-xl">
            نوبت بعدی
          </h2>
        </div>

        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-sm ring-1 ring-pink-100">
          <CalendarDays size={22} />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ${
              APPOINTMENT_STATUS_STYLE[appointment.status]
            }`}
          >
            {APPOINTMENT_STATUS_LABEL[appointment.status]}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-extrabold leading-relaxed text-neutral-800 sm:text-xl">
          {appointment.serviceName}
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-neutral-100 p-3.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-pink-100/80 text-pink-600">
              <CalendarDays size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-neutral-500">تاریخ نوبت</p>
              <p className="mt-1 text-sm font-semibold text-neutral-800">
                {toPersianDate(appointment.date).format("DD MMMM")}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-neutral-100 p-3.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-pink-100/80 text-pink-600">
              <Clock3 size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-neutral-500">ساعت مراجعه</p>
              <p className="mt-1 text-sm font-semibold text-neutral-800">
                {appointment.time}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
          <div className="flex items-center gap-2 text-neutral-500">
            <Wallet size={18} className="shrink-0 text-pink-500" />
            <span className="text-sm">هزینه‌ی خدمت</span>
          </div>

          <p className="text-sm font-extrabold text-neutral-800 sm:text-base">
            {formatToman(appointment.price)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextAppointmentCard;
