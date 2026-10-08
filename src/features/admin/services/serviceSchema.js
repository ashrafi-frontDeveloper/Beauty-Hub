// src/features/admin/services/serviceSchema.js
import { z } from "zod";

export const serviceSchema = z.object({
  name: z.string().min(3, "نام سرویس باید حداقل ۳ حرف باشد"),
  description: z.string().min(10, "توضیحات باید حداقل ۱۰ حرف باشد"),
  price: z.coerce.number({ invalid_type_error: "قیمت را وارد کنید" }).min(1000, "قیمت معتبر نیست"),
  duration: z.coerce
    .number({ invalid_type_error: "مدت زمان را وارد کنید" })
    .min(5, "مدت زمان باید حداقل ۵ دقیقه باشد"),
  category: z.enum(["hair", "skin", "nails", "makeup"], {
    errorMap: () => ({ message: "دسته‌بندی را انتخاب کنید" }),
  }),
  image: z.string().optional(),
  status: z.enum(["active", "inactive"]),
});