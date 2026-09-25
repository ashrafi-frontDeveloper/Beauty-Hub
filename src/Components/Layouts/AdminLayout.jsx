// src/Components/Layouts/AdminLayout.jsx
import { Outlet } from "react-router";
import AdminSidebar from "../common/AdminSidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <main>
      <AdminSidebar />
      <section className="container mx-auto py-4">
        <Outlet />
      </section>
    </main>
  );
};

export default AdminLayout;