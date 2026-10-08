// src/features/admin/customers/components/CustomersSearchBar.jsx
import { Search } from "lucide-react";

const CustomersSearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-surface px-3 py-2.5 md:w-80">
      <Search className="text-neutral-400" size={18} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجوی نام یا شماره موبایل..."
        className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
      />
    </div>
  );
};

export default CustomersSearchBar;