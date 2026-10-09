// // src/features/customer/dashboard/components/DashboardGreeting.jsx
import { Sparkles } from "lucide-react";

const DashboardGreeting = ({ name }) => {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-l from-pink-100 via-[#FFF5FA] to-white p-6 shadow-sm shadow-pink-100/50 sm:p-8">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-14 -z-10 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-24 w-24 rounded-full bg-white/80 blur-2xl"
      />

      <div className="relative flex items-start gap-4 sm:items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-pink-200/70 bg-white/80 text-pink-600 shadow-sm sm:size-14">
          <Sparkles size={25} strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-pink-600 sm:text-sm">
            <span className="size-1.5 rounded-full bg-pink-500" />
            زیبایی، با یک انتخاب
          </span>

          <h1 className="text-xl font-extrabold leading-relaxed tracking-tight text-neutral-800 sm:text-2xl lg:text-3xl">
            درود {name} <span className="inline-block">👋</span>
          </h1>

          <p className="mt-1.5 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
            امروز وقتشه کمی به خودت برسی و برای زیبایی و آرامشت وقت بذاری.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardGreeting;