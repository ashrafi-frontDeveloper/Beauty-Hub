// src/features/customer/profile/ChangePasswordPage.jsx
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import ChangePasswordForm from "@/Components/common/ChangePasswordForm/ChangePasswordForm";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => navigate(-1)} aria-label="بازگشت">
          <ChevronRight size={20} className="text-neutral-500" />
        </button>
        <h1 className="text-base font-bold text-neutral-800">تغییر رمز عبور</h1>
      </div>

      <ChangePasswordForm />
    </div>
  );
};

export default ChangePasswordPage;