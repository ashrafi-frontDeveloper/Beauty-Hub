// src/Components/Layouts/AdminLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router";
import AdminSidebar from "../common/AdminSidebar/AdminSidebar/AdminSidebar";
import AdminTopbar from "../common/AdminSidebar/AdminTopbar/AdminTopbar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg font-IRANSansX">
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="md:ms-64">
        <AdminTopbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;