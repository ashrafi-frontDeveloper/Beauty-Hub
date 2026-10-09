// src/features/admin/settings/components/AdminAccountForm.jsx
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminAccountSchema } from "../settingsSchemas";
import { useAuth } from "@/context/AuthContext";

const inputClass =
  "rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-primary";

const AdminAccountForm = () => {
  const { user, updateProfile } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({ resolver: zodResolver(adminAccountSchema), defaultValues: user });

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  const onSubmit = async (data) => {
    setIsSaving(true);
    setSaveMessage(null);
    await updateProfile(data);
    setIsSaving(false);
    setSaveMessage("اطلاعات حساب ذخیره شد");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 rounded-2xl bg-surface p-4">
      <h2 className="text-sm font-bold text-neutral-800">اطلاعات حساب کاربری</h2>

      <label className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">نام و نام خانوادگی</span>
        <input {...register("name")} className={inputClass} />
        {errors.name && <span className="text-[11px] text-red-500">{errors.name.message}</span>}
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">شماره موبایل</span>
        <input {...register("phone")} inputMode="numeric" className={inputClass} />
        {errors.phone && <span className="text-[11px] text-red-500">{errors.phone.message}</span>}
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">ایمیل</span>
        <input type="email" {...register("email")} className={inputClass} />
        {errors.email && <span className="text-[11px] text-red-500">{errors.email.message}</span>}
      </label>

      {saveMessage && <p className="text-xs text-green-600">{saveMessage}</p>}

      <button
        type="submit"
        disabled={isSaving || !isDirty}
        className="mt-1 self-start rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white disabled:opacity-40"
      >
        {isSaving ? "در حال ذخیره..." : "ذخیره تغییرات"}
      </button>
    </form>
  );
};

export default AdminAccountForm;