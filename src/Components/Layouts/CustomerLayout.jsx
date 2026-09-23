// src/Components/Layouts/CustomerLayout.jsx
import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar/Sidebar";

const CustomerLayout = () => {
  return (
    <main>
      <Sidebar />
      <section className="container mx-auto py-4" id="content">
        <Outlet />
      </section>
    </main>
  );
};

export default CustomerLayout;