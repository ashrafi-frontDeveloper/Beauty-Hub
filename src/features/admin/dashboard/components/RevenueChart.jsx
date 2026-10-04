// src/features/admin/dashboard/components/RevenueChart.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { formatToman } from "@/utils/formatCurrency";

// ⚠️ این رنگ باید دستی با --color-primary در src/index.css هماهنگ نگه داشته بشه،
// چون recharts از توکن‌های Tailwind خبر نداره.
const PRIMARY_COLOR = "#ec4266";

const RevenueChart = ({ data, isLoading }) => {
  if (isLoading) {
    return <div className="h-64 animate-pulse rounded-2xl bg-surface" />;
  }

  return (
    <div className="rounded-2xl bg-surface p-4">
      <h2 className="mb-4 text-sm font-bold text-neutral-800">نمودار درآمد ماهانه</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis
            tick={{ fontSize: 11 }}
            width={40}
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
          />
          <Tooltip formatter={(value) => formatToman(value)} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={PRIMARY_COLOR}
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;