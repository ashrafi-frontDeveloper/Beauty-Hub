// src/features/customer/profile/profileSchema.js
import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(3, "نام باید حداقل ۳ حرف باشد"),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست (مثال: 09123456789)"),
  email: z.string().email("ایمیل معتبر نیست").or(z.literal("")),
  address: z.string().optional(),
});