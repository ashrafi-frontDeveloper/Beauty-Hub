// src/features/admin/reports/AdminReportsPage.jsx
import { useEffect, useState } from "react";
import { Wallet, CalendarCheck, CheckCheck, XCircle } from "lucide-react";
import { getReportData } from "@/services/adminReportsService";
import { formatToman } from "@/utils/formatCurrency";
import StatCard from "@/Components/ui/StatCard";
import RevenueChart from "@/Components/common/RevenueChart/RevenueChart";
import DateRangeSelector from "./components/DateRangeSelector";

const AdminReportsPage = () => {
  const [range, setRange] = useState("30d");
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReportData(range).then((result) => {
      setReport(result);
      setIsLoading(false);
    });
  }, [range]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold text-neutral-800">گزارش‌ها</h1>

      <DateRangeSelector value={range} onChange={setRange} />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatCard
          label="درآمد"
          value={isLoading ? "—" : formatToman(report.totalRevenue)}
          icon={Wallet}
          isLoading={isLoading}
        />
        <StatCard label="نوبت‌ها" value={report?.totalAppointments ?? "—"} icon={CalendarCheck} isLoading={isLoading} />
        <StatCard label="انجام‌شده" value={report?.completedCount ?? "—"} icon={CheckCheck} isLoading={isLoading} />
        <StatCard label="لغوشده" value={report?.cancelledCount ?? "—"} icon={XCircle} isLoading={isLoading} />
      </div>

      <RevenueChart
        title="نمودار درآمد در بازه‌ی انتخابی"
        data={report?.dailyRevenue ?? []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AdminReportsPage;