// src/features/admin/dashboard/AdminDashboardPage.jsx
import { useEffect, useState } from "react";
import { CalendarCheck, Users, Wallet, Sparkles } from "lucide-react";
import {
  getDashboardStats,
  getRevenueHistory,
  getTodaysAppointments,
} from "@/services/adminDashboardService";
import { formatToman } from "@/utils/formatCurrency";
import StatCard from "./components/StatCard";
import RevenueChart from "./components/RevenueChart";
import TodaysAppointmentsList from "./components/TodaysAppointmentsList";

const AdminDashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [revenueData, setRevenueData] = useState([]);
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getDashboardStats(), getRevenueHistory(), getTodaysAppointments()]).then(
      ([statsResult, revenueResult, todaysResult]) => {
        setStats(statsResult);
        setRevenueData(revenueResult);
        setTodaysAppointments(todaysResult);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-bold text-neutral-800">داشبورد</h1>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard label="نوبت‌ها" value={stats?.totalAppointments ?? "—"} icon={CalendarCheck} isLoading={isLoading} />
        <StatCard label="مشتریان" value={stats?.totalCustomers ?? "—"} icon={Users} isLoading={isLoading} />
        <StatCard
          label="درآمد"
          value={isLoading ? "—" : formatToman(stats.totalRevenue)}
          icon={Wallet}
          isLoading={isLoading}
        />
        <StatCard label="خدمات" value={stats?.totalServices ?? "—"} icon={Sparkles} isLoading={isLoading} />
      </div>

      <RevenueChart data={revenueData} isLoading={isLoading} />

      <div>
        <h2 className="mb-3 text-sm font-bold text-neutral-800">نوبت‌های امروز</h2>
        <TodaysAppointmentsList appointments={todaysAppointments} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AdminDashboardPage;