// src/Components/common/ChangePasswordForm/ChangePasswordForm.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "@/schemas/changePasswordSchema";
import { useAuth } from "@/context/AuthContext";

const inputClass =
  "rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-primary";

const ChangePasswordForm = () => {
  const { changePassword } = useAuth();
  const [serverError, setServerError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(changePasswordSchema) });

  const onSubmit = async (data) => {
    setServerError(null);
    setSuccessMessage(null);
    try {
      await changePassword(data);
      setSuccessMessage("رمز عبور با موفقیت تغییر کرد");
      reset();
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 rounded-2xl bg-surface p-4">
      <label className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">رمز عبور فعلی</span>
        <input type="password" {...register("currentPassword")} className={inputClass} />
        {errors.currentPassword && (
          <span className="text-[11px] text-red-500">{errors.currentPassword.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">رمز عبور جدید</span>
        <input type="password" {...register("newPassword")} className={inputClass} />
        {errors.newPassword && (
          <span className="text-[11px] text-red-500">{errors.newPassword.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs text-neutral-500">تکرار رمز عبور جدید</span>
        <input type="password" {...register("confirmPassword")} className={inputClass} />
        {errors.confirmPassword && (
          <span className="text-[11px] text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>

      {serverError && <p className="text-xs text-red-500">{serverError}</p>}
      {successMessage && <p className="text-xs text-green-600">{successMessage}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 self-start rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {isSubmitting ? "در حال تغییر..." : "تغییر رمز عبور"}
      </button>
    </form>
  );
};

export default ChangePasswordForm;