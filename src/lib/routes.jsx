// src/lib/routes.jsx
import { createBrowserRouter } from "react-router";
import AuthLayout from "../Components/Layouts/AuthLayout";
import CustomerLayout from "../Components/Layouts/CustomerLayout";
import AdminLayout from "../Components/Layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { index: true, element: <div>داشبورد مشتری</div> },
      { path: "services", element: <div>خدمات</div> },
      { path: "book-appointment", element: <div>رزرو نوبت</div> },
      { path: "appointments", element: <div>نوبت‌های من</div> },
      { path: "favorites", element: <div>علاقه‌مندی‌ها</div> },
      { path: "notifications", element: <div>اعلان‌ها</div> },
      { path: "profile", element: <div>پروفایل</div> },
      { path: "settings", element: <div>تنظیمات</div> },
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