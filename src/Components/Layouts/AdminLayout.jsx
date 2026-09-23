// src/Components/Layouts/AdminLayout.jsx
import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <main>
      <Sidebar />
      <section className="container mx-auto py-4" id="content">
        <Outlet />
      </section>
    </main>
  );
};

export default AdminLayout;