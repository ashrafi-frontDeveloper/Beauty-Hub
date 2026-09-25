// src/Components/Layouts/CustomerLayout.jsx
import { Outlet } from "react-router";
import CustomerBottomNav from "../common/CustomerBottomNav/CustomerBottomNav";

const CustomerLayout = () => {
  return (
    <main className="font-IRANSansX">
      <CustomerBottomNav />
      <section className="container mx-auto py-4">
        <Outlet />
      </section>
    </main>
  );
};

export default CustomerLayout;