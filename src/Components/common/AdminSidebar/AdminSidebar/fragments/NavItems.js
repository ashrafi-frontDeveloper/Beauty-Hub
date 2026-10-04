// src/Components/common/AdminSidebar/fragments/navItems.js
import {
  LayoutDashboard,
  CalendarCheck,
  CalendarDays,
  Users,
  Sparkles,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

export const adminNavItems = [
  { to: "/admin", label: "داشبورد", icon: LayoutDashboard, end: true },
  { to: "/admin/appointments", label: "نوبت‌ها", icon: CalendarCheck },
  { to: "/admin/calendar", label: "تقویم", icon: CalendarDays },
  { to: "/admin/customers", label: "مشتریان", icon: Users },
  { to: "/admin/services", label: "خدمات", icon: Sparkles },
  { to: "/admin/reports", label: "گزارش‌ها", icon: BarChart3 },
  { to: "/admin/profile", label: "پروفایل", icon: User },
  { to: "/admin/settings", label: "تنظیمات", icon: Settings },
];