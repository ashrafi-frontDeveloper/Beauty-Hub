// src/features/customer/profile/components/ProfileForm.jsx
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "../profileSchema";

const inputClass =
  "rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-primary";

const Field = ({ label, error, children }) => (
  <label className="flex flex-col gap-1">
    <span className="text-xs text-neutral-500">{label}</span>
    {children}
    {error && <span className="text-[11px] text-red-500">{error}</span>}
  </label>
);

const ProfileForm = ({ defaultValues, onSave }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = async (data) => {
    setIsSaving(true);
    setSaveMessage(null);
    await onSave(data);
    setIsSaving(false);
    setSaveMessage("تغییرات با موفقیت ذخیره شد");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 rounded-2xl bg-surface p-4"
    >
      <Field label="نام و خانوادگی" error={errors.name?.message}>
        <input {...register("name")} className={inputClass} />
      </Field>

      <Field label="شماره موبایل" error={errors.phone?.message}>
        <input {...register("phone")} inputMode="numeric" className={inputClass} />
      </Field>

      <Field label="ایمیل" error={errors.email?.message}>
        <input {...register("email")} type="email" className={inputClass} />
      </Field>

      <Field label="آدرس" error={errors.address?.message}>
        <textarea {...register("address")} rows={2} className={`${inputClass} resize-none`} />
      </Field>

      {saveMessage && <p className="text-xs text-green-600">{saveMessage}</p>}

      <button
        type="submit"
        disabled={isSaving || !isDirty}
        className="mt-1 rounded-xl bg-primary py-3 text-sm font-medium text-white disabled:opacity-40"
      >
        {isSaving ? "در حال ذخیره..." : "ذخیره تغییرات"}
      </button>
    </form>
  );
};

export default ProfileForm;