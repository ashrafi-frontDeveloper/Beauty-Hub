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
      <h1 className="text-lg font-bold text-neutral-800">خدمات</h1>

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