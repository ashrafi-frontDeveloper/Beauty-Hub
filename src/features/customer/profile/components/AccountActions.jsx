// src/features/customer/profile/components/AccountActions.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { KeyRound, LogOut, ChevronLeft } from "lucide-react";
import ConfirmModal from "@/Components/ui/ConfirmModal";
import { useAuth } from "@/context/AuthContext";



const AccountActions = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    logout();
    navigate("/auth");
  };

  return (
    <div className="flex flex-col divide-y divide-neutral-200 overflow-hidden rounded-2xl bg-surface">
      <Link
        to="/profile/change-password"
        className="flex items-center justify-between p-4 text-sm text-neutral-700"
      >
        <span className="flex items-center gap-2">
          <KeyRound size={18} className="text-neutral-500" />
          تغییر رمز عبور
        </span>
        <ChevronLeft size={16} className="text-neutral-400" />
      </Link>

      <button
        type="button"
        onClick={() => setIsLogoutModalOpen(true)}
        className="flex items-center gap-2 p-4 text-start text-sm text-red-500"
      >
        <LogOut size={18} />
        خروج از حساب
      </button>

      <ConfirmModal
        isOpen={isLogoutModalOpen}
        title="خروج از حساب؟"
        description="برای ورود مجدد باید اطلاعات حساب خود را وارد کنید."
        cancelLabel="ماندن در حساب"
        confirmLabel="خروج"
        variant="danger"
        onCancel={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default AccountActions;