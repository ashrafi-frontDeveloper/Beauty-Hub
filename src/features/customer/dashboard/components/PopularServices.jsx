// // src/features/customer/dashboard/components/PopularServices.jsx
import { Link } from "react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import ServiceCard from "@/Components/common/ServiceCard/ServiceCard";

const PopularServices = ({ services, isLoading }) => {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-pink-600">
            <Sparkles size={15} />
            انتخاب‌های جذاب
          </div>

          <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">
            خدمات محبوب
          </h2>

          <p className="mt-1 text-xs leading-6 text-neutral-500 sm:text-sm">
            برای تجربه‌ای تازه، خدمات موردعلاقه‌ات رو پیدا کن.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-pink-600 transition-colors hover:bg-pink-50 hover:text-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 sm:text-sm"
        >
          مشاهده همه
          <ArrowLeft size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-2">
        {isLoading
          ? [...Array(4)].map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-neutral-100 bg-white p-3 shadow-sm sm:rounded-3xl sm:p-4"
              >
                <div className="aspect-[4/3] animate-pulse rounded-xl bg-gradient-to-br from-pink-50 to-neutral-100 sm:rounded-2xl" />

                <div className="mt-4 h-4 w-3/4 animate-pulse rounded-md bg-neutral-100" />

                <div className="mt-2 h-3 w-1/2 animate-pulse rounded-md bg-neutral-100" />

                <div className="mt-4 h-9 animate-pulse rounded-xl bg-pink-50" />
              </div>
            ))
          : services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
      </div>
    </section>
  );
};

export default PopularServices;
