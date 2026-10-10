// src/schemas/changePasswordSchema.js
import { z } from "zod";

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