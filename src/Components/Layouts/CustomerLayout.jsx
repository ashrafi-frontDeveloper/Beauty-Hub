// src/Components/Layouts/CustomerLayout.jsx
import { Outlet } from "react-router";
import CustomerBottomNav from "../common/CustomerBottomNav/CustomerBottomNav";

const CustomerLayout = () => {
  return (
    <main className="min-h-dvh bg-bg font-IRANSansX">
      <section className="px-4 pt-4 pb-24" id="content">
        <Outlet />
      </section>

      <CustomerBottomNav />
    </main>
  );
};

export default CustomerLayout;