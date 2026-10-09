// // src/Components/common/ServiceCard/ServiceCard.jsx

import { useNavigate } from "react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { formatToman } from "@/utils/formatCurrency";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() =>
        navigate("/book-appointment", {
          state: { preselectedServiceId: service.id },
        })
      }
      aria-label={`رزرو خدمت ${service.name}`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-pink-100/80 bg-white p-2.5 text-start shadow-sm shadow-pink-100/20 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 sm:p-3"
    >
      {/* Service image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/80 text-pink-500 shadow-sm ring-1 ring-white/80">
              <Sparkles size={27} strokeWidth={1.6} />
            </div>
          </div>
        )}

        {/* Subtle image overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-900/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Floating icon */}
        <div className="absolute left-2.5 top-2.5 flex size-9 items-center justify-center rounded-xl border border-white/70 bg-white/90 text-pink-600 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
          <Sparkles size={17} strokeWidth={1.8} />
        </div>
      </div>

      {/* Service information */}
      <div className="flex w-full flex-1 flex-col px-1 pt-3">
        <h3 className="line-clamp-2 min-h-12 text-sm font-bold leading-6 text-neutral-800 transition-colors duration-200 group-hover:text-pink-700 sm:text-base">
          {service.name}
        </h3>

        <div className="mt-2 flex items-end justify-between gap-2 border-t border-neutral-100 pt-3">
          <div className="min-w-0">
            <p className="text-[11px] text-neutral-400 sm:text-xs">
              شروع قیمت از
            </p>

            <p className="mt-1 text-xs font-extrabold leading-5 text-pink-600 sm:text-sm">
              {formatToman(service.price)}
            </p>
          </div>

          <span className="mb-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white">
            <ArrowLeft size={17} />
          </span>
        </div>
      </div>
    </button>
  );
};

export default ServiceCard;
