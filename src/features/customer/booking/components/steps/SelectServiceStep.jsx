// src/features/customer/booking/components/steps/SelectServiceStep.jsx
import { formatToman } from "@/utils/formatCurrency";

const SelectServiceStep = ({ services, isLoading, selectedServiceId, onSelect, onNext }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 animate-pulse rounded-xl bg-surface" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {services.map((service) => {
          const isSelected = service.id === selectedServiceId;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service.id)}
              className={`flex items-center justify-between rounded-xl border p-3 text-start transition-colors ${
                isSelected ? "border-primary bg-primary-light" : "border-neutral-200 bg-surface"
              }`}
            >
              <div>
                <p className="text-sm font-medium text-neutral-800">{service.name}</p>
                <p className="mt-0.5 text-xs text-neutral-500">
                  {service.duration} دقیقه — از {formatToman(service.price)}
                </p>
              </div>
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  isSelected ? "border-primary bg-primary" : "border-neutral-300"
                }`}
              >
                {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!selectedServiceId}
        onClick={onNext}
        className="rounded-xl bg-primary py-3 text-sm font-medium text-white disabled:opacity-40"
      >
        مرحله بعد
      </button>
    </div>
  );
};

export default SelectServiceStep;