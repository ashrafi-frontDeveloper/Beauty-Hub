// src/Components/common/ServiceCard/ServiceCard.jsx
import { Sparkles } from "lucide-react";
import { formatToman } from "@/utils/formatCurrency";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-surface p-3">
      <div className="aspect-square overflow-hidden rounded-xl bg-primary-light">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Sparkles className="text-primary" size={24} />
          </div>
        )}
      </div>
      <p className="text-sm font-medium text-neutral-800">{service.name}</p>
      <p className="text-xs text-neutral-500">از {formatToman(service.price)}</p>
    </div>
  );
};

export default ServiceCard;