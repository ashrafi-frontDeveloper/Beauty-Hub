// src/features/auth/RegisterPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./authSchemas";
import { useAuth } from "@/context/AuthContext";

const inputClass =
  "rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-primary";

const RegisterPage = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data) => {
    setServerError(null);
    setIsSubmitting(true);
    try {
      await registerUser(data);
      navigate("/", { replace: true });
    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 font-IRANSansX">
      <div className="text-center">
        <h1 className="text-lg font-bold text-neutral-800">ثبت نام در حساب کاربری</h1>
        <p className="mt-1 text-xs text-neutral-500">لطفاً اطلاعات خود را وارد کنید</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500">نام و نام خانوادگی</span>
          <input {...registerField("name")} className={inputClass} />
          {errors.name && <span className="text-[11px] text-red-500">{errors.name.message}</span>}
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500">شماره موبایل</span>
          <input {...registerField("phone")} inputMode="numeric" className={inputClass} />
          {errors.phone && <span className="text-[11px] text-red-500">{errors.phone.message}</span>}
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500">ایمیل</span>
          <input type="email" {...registerField("email")} className={inputClass} />
          {errors.email && <span className="text-[11px] text-red-500">{errors.email.message}</span>}
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500">رمز عبور</span>
          <input type="password" {...registerField("password")} className={inputClass} />
          {errors.password && (
            <span className="text-[11px] text-red-500">{errors.password.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500">تکرار رمز عبور</span>
          <input type="password" {...registerField("confirmPassword")} className={inputClass} />
          {errors.confirmPassword && (
            <span className="text-[11px] text-red-500">{errors.confirmPassword.message}</span>
          )}
        </label>

        {serverError && <p className="text-xs text-red-500">{serverError}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-xl bg-primary py-3 text-sm font-medium text-white disabled:opacity-60"
        >
          {isSubmitting ? "در حال ثبت نام..." : "ثبت نام"}
        </button>
      </form>

      <p className="text-center text-xs text-neutral-500">
        حساب کاربری دارید؟{" "}
        <Link to="/auth" className="font-medium text-primary">
          وارد شوید
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;