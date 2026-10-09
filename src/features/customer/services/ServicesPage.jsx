// src/features/customer/services/ServicesPage.jsx
import { useEffect, useMemo, useState } from "react";
import { getAllServices } from "@/services/servicesService";
import ServiceSearchBar from "./components/ServiceSearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ServiceGrid from "./components/ServiceGrid";

const ServicesPage = () => {
  const [allServices, setAllServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    getAllServices().then((result) => {
      setAllServices(result);
      setIsLoading(false);
    });
  }, []);

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;
      const matchesSearch = service.name.includes(searchTerm.trim());
      return matchesCategory && matchesSearch;
    });
  }, [allServices, activeCategory, searchTerm]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-l from-pink-100/80 via-pink-50 to-white px-5 py-6 sm:px-7 sm:py-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-8 -top-10 size-32 rounded-full bg-pink-200/40 blur-3xl"
        />

        <div className="relative">
          <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold text-pink-600 sm:text-sm">
            <span className="size-1.5 rounded-full bg-pink-500" />
            زیبایی به سبک تو
          </span>

          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-800 sm:text-3xl">
            خدمات زیبایی
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
            خدمات موردعلاقه‌ات رو پیدا کن و برای تجربه‌ای تازه، نوبتت رو رزرو کن.
          </p>
        </div>
      </div>

      <ServiceSearchBar value={searchTerm} onChange={setSearchTerm} />
      <CategoryFilter
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <ServiceGrid services={filteredServices} isLoading={isLoading} />
    </div>
  );
};

export default ServicesPage;