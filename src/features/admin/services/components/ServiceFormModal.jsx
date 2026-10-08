// src/features/admin/services/components/ServiceFormModal.jsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/Components/ui/Modal";
import { serviceSchema } from "../serviceSchema";
import { SERVICE_CATEGORIES } from "@/constants/serviceCategories";

const inputClass =
  "rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-primary";

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1">
    <span className="text-xs text-neutral-500">{label}</span>
    {children}
    {error && <span className="text-[11px] text-red-500">{error}</span>}
  </label>
);

const EMPTY_VALUES = {
  name: "",
  description: "",
  price: "",
  duration: "",
  category: "hair",
  image: "",
  status: "active",
};

const ServiceFormModal = ({ isOpen, editingService, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(serviceSchema),
    defaultValues: EMPTY_VALUES,
  });

  useEffect(() => {
    if (isOpen) {
      reset(editingService ?? EMPTY_VALUES);
    }
  }, [isOpen, editingService, reset]);

  const submitHandler = async (data) => {
    await onSubmit(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} title={editingService ? "ویرایش سرویس" : "افزودن سرویس جدید"} onClose={onClose}>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-3">
        <Field label="نام سرویس" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} />
        </Field>

        <Field label="توضیحات" error={errors.description?.message}>
          <textarea {...register("description")} rows={2} className={`${inputClass} resize-none`} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="قیمت (تومان)" error={errors.price?.message}>
            <input type="number" {...register("price")} className={inputClass} />
          </Field>
          <Field label="مدت زمان (دقیقه)" error={errors.duration?.message}>
            <input type="number" {...register("duration")} className={inputClass} />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label="دسته‌بندی" error={errors.category?.message}>
            <select {...register("category")} className={inputClass}>
              {SERVICE_CATEGORIES.filter((c) => c.id !== "all").map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="وضعیت" error={errors.status?.message}>
            <select {...register("status")} className={inputClass}>
              <option value="active">فعال</option>
              <option value="inactive">غیرفعال</option>
            </select>
          </Field>
        </div>

        <Field label="مسیر تصویر (اختیاری)" error={errors.image?.message}>
          <input {...register("image")} placeholder="/assets/image/haircut2.jpg" className={inputClass} />
        </Field>

        <div className="mt-2 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-neutral-200 px-4 py-2 text-sm text-neutral-600"
          >
            انصراف
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ServiceFormModal;