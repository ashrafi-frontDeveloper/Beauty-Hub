// src/lib/routes.jsx
import { createBrowserRouter } from "react-router";

import AuthLayout from "../Components/Layouts/AuthLayout";
import CustomerLayout from "../Components/Layouts/CustomerLayout";
import AdminLayout from "../Components/Layouts/AdminLayout";
import ProtectedRoute from "../Components/common/ProtectedRoute";
import GuestRoute from "../Components/common/GuestRoute";

import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";

import CustomerDashboardPage from "../features/customer/dashboard/CustomerDashboardPage";
import ServicesPage from "../features/customer/services/ServicesPage";
import BookingPage from "../features/customer/booking/BookingPage";
import AppointmentsPage from "../features/customer/appointments/AppointmentsPage";
import AppointmentDetailPage from "../features/customer/appointments/AppointmentDetailPage";
import ReschedulePage from "../features/customer/appointments/ReschedulePage";
import ProfilePage from "../features/customer/profile/ProfilePage";


import AdminDashboardPage from "../features/admin/dashboard/AdminDashboardPage";
import AdminAppointmentsPage from "../features/admin/appointments/AdminAppointmentsPage";
import AdminCalendarPage from "../features/admin/calendar/AdminCalendarPage";
import AdminCustomersPage from "../features/admin/customers/AdminCustomersPage";
import AdminServicesPage from "../features/admin/services/AdminServicesPage";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute allowedRole="customer" />,
    children: [
      {
        path: "/",
        element: <CustomerLayout />,
        children: [
          { index: true, element: <CustomerDashboardPage /> },
          { path: "services", element: <ServicesPage /> },
          { path: "book-appointment", element: <BookingPage /> },
          { path: "appointments", element: <AppointmentsPage /> },
          { path: "appointments/:id", element: <AppointmentDetailPage /> },
          { path: "appointments/:id/reschedule", element: <ReschedulePage /> },
          { path: "profile", element: <ProfilePage /> },
          {
            path: "profile/change-password",
            element: (
              <div className="py-10 text-center text-sm text-neutral-500">
                این صفحه بعداً تکمیل می‌شود
              </div>
            ),
          },
        ],
      },
    ],
  },

  {
    element: <GuestRoute />,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          { index: true, element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRole="admin" />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboardPage /> },
          { path: "appointments", element: <AdminAppointmentsPage /> },
          { path: "calendar", element: <AdminCalendarPage /> },
          { path: "customers", element: <AdminCustomersPage /> },
          { path: "services", element: <AdminServicesPage /> },
          { path: "reports", element: <div>گزارش‌ها</div> },
          { path: "profile", element: <div>پروفایل</div> },
          { path: "settings", element: <div>تنظیمات</div> },
        ],
      },
    ],
  },

  { path: "*", element: <div>صفحه پیدا نشد</div> },
]);

export default router;