// src/features/customer/services/components/CategoryFilter.jsx
import { SERVICE_CATEGORIES } from "@/constants/serviceCategories";

const CategoryFilter = ({ activeCategory, onChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {SERVICE_CATEGORIES.map(({ id, label }) => {
        const isActive = id === activeCategory;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "bg-surface text-neutral-600"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;