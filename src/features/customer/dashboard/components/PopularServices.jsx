// src/features/customer/dashboard/components/PopularServices.jsx
import { Link } from "react-router";
import ServiceCard from "@/Components/common/ServiceCard/ServiceCard";

const PopularServices = ({ services, isLoading }) => {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-neutral-800">خدمات محبوب</h2>
        <Link to="/services" className="text-xs text-primary">
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {isLoading
          ? [...Array(4)].map((_, i) => (
              <div key={i} className="h-32 animate-pulse rounded-2xl bg-surface" />
            ))
          : services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
      </div>
    </div>
  );
};

export default PopularServices;