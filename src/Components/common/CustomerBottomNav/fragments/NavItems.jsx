// src/Components/common/CustomerBottomNav/fragments/NavItems.jsx
import {
  LayoutDashboard,
  CalendarPlus,
  ClipboardList,
  Sparkles,
  User,
} from "lucide-react";


const navItems = [
  { to: "/", label: "داشبورد", icon: LayoutDashboard, end: true },
  { to: "/services", label: "خدمات", icon: Sparkles },
  { to: "/book-appointment", label: "رزرو", icon: CalendarPlus, primary: true },
  { to: "/appointments", label: "نوبت‌ها", icon: ClipboardList },
  { to: "/profile", label: "پروفایل", icon: User },
];

export default navItems