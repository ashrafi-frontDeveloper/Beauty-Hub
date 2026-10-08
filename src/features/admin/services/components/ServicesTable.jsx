// src/features/admin/services/components/ServicesTable.jsx
import { Pencil, Trash2 } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/constants/serviceCategories";
import { formatToman } from "@/utils/formatCurrency";

const categoryLabel = (id) => SERVICE_CATEGORIES.find((c) => c.id === id)?.label ?? id;

const ServicesTable = ({ services, isLoading, onEdit, onDelete }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 animate-pulse rounded-xl bg-surface" />
        ))}
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="rounded-2xl bg-surface p-10 text-center text-sm text-neutral-500">
        هنوز سرویسی ثبت نشده است
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-surface">
      <table className="w-full min-w-[760px] text-sm">
        <thead>
          <tr className="border-b border-neutral-200 text-xs text-neutral-500">
            <th className="p-3 text-start font-medium">سرویس</th>
            <th className="p-3 text-start font-medium">دسته‌بندی</th>
            <th className="p-3 text-start font-medium">قیمت</th>
            <th className="p-3 text-start font-medium">مدت زمان</th>
            <th className="p-3 text-start font-medium">وضعیت</th>
            <th className="p-3 text-start font-medium">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id} className="border-b border-neutral-100 last:border-0">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-primary-light">
                    {service.image && (
                      <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <span className="font-medium text-neutral-800">{service.name}</span>
                </div>
              </td>
              <td className="p-3 text-neutral-600">{categoryLabel(service.category)}</td>
              <td className="p-3 text-neutral-600">{formatToman(service.price)}</td>
              <td className="p-3 text-neutral-600">{service.duration} دقیقه</td>
              <td className="p-3">
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] ${
                    service.status === "active"
                      ? "bg-status-confirmed-bg text-status-confirmed"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {service.status === "active" ? "فعال" : "غیرفعال"}
                </span>
              </td>
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => onEdit(service)} aria-label="ویرایش" className="text-neutral-400 hover:text-primary">
                    <Pencil size={16} />
                  </button>
                  <button type="button" onClick={() => onDelete(service)} aria-label="حذف" className="text-neutral-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;