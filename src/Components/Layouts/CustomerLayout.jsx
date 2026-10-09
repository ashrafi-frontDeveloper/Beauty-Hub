// // src/Components/Layouts/CustomerLayout.jsx
import { Outlet } from "react-router";
import CustomerBottomNav from "../common/CustomerBottomNav/CustomerBottomNav";

const CustomerLayout = () => {
  return (
    <main className="min-h-dvh bg-[#FFF7FB] font-IRANSansX text-neutral-800 antialiased">
      <section
        id="content"
        className="mx-auto min-h-dvh w-full max-w-7xl px-4 pb-32 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pt-8"
      >
        <Outlet />
      </section>

      <CustomerBottomNav />
    </main>
  );
};

export default CustomerLayout;
