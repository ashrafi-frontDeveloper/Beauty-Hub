// src/lib/routes.jsx
import { createBrowserRouter } from "react-router";
import AuthLayout from "../Components/Layouts/AuthLayout";
import CustomerLayout from "../Components/Layouts/CustomerLayout";
import AdminLayout from "../Components/Layouts/AdminLayout";

import ServicesPage from "../features/customer/services/ServicesPage";
import CustomerDashboardPage from "../features/customer/dashboard/CustomerDashboardPage"
import BookingPage from "../features/customer/booking/BookingPage";
import AppointmentsPage from "../features/customer/appointments/AppointmentsPage";
import AppointmentDetailPage from "../features/customer/appointments/AppointmentDetailPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { index: true, element: <CustomerDashboardPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "book-appointment", element: <BookingPage /> },
      { path: "appointments", element: <AppointmentsPage /> },
      { path: "appointments/:id", element: <AppointmentDetailPage /> },
      {
        path: "appointments/:id/reschedule",
        element: (
          <div className="py-10 text-center text-sm text-neutral-500">
            این صفحه در بند ۱۵ (Reschedule) ساخته می‌شود
          </div>
        ),
      },
      { path: "profile", element: <div>پروفایل</div> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <div>ورود</div> },
      { path: "register", element: <div>ثبت‌نام</div> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <div>داشبورد ادمین</div> },
      { path: "appointments", element: <div>نوبت‌ها</div> },
      { path: "calendar", element: <div>تقویم</div> },
      { path: "customers", element: <div>مشتریان</div> },
      { path: "services", element: <div>مدیریت خدمات</div> },
      { path: "reports", element: <div>گزارش‌ها</div> },
      { path: "profile", element: <div>پروفایل</div> },
      { path: "settings", element: <div>تنظیمات</div> },
    ],
  },
  {
    path: "/admin/auth",
    element: <AuthLayout />,
    children: [{ index: true, element: <div>ورود ادمین</div> }],
  },
  { path: "*", element: <div>صفحه پیدا نشد</div> },
]);

export default router;