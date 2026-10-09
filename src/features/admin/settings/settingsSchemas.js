// src/features/admin/settings/settingsSchemas.js
import { z } from "zod";

export const adminAccountSchema = z.object({
  name: z.string().min(3, "نام باید حداقل ۳ حرف باشد"),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  email: z.string().email("ایمیل معتبر نیست"),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, "رمز فعلی را وارد کنید"),
    newPassword: z.string().min(6, "رمز جدید باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "رمز جدید و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });