// src/Components/common/AdminSidebar/AdminTopbar.jsx
import { Menu } from "lucide-react";

const AdminTopbar = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-surface px-4 py-3 md:hidden">
      <span className="text-base font-bold text-primary">BeautyHub</span>
      <button type="button" onClick={onMenuClick} aria-label="باز کردن منو">
        <Menu size={22} className="text-neutral-700" />
      </button>
    </header>
  );
};

export default AdminTopbar;