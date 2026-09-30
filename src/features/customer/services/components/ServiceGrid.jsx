// src/features/customer/services/components/ServiceGrid.jsx
import ServiceCard from "@/Components/common/ServiceCard/ServiceCard";

const ServiceGrid = ({ services, isLoading }) => {
  // ---- Loading State ----
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-2xl bg-surface" />
        ))}
      </div>
    );
  }

  // ---- Empty State ----
  if (services.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm text-neutral-500">
          سرویسی با این مشخصات پیدا نشد
        </p>
      </div>
    );
  }

  // ---- Success State ----
  return (
    <div className="grid grid-cols-2 gap-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;