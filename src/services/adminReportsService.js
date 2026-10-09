// src/services/adminReportsService.js
import { appointments } from "@/data/mock/appointments";
import dayjs, { toPersianDate } from "@/lib/dayjs";
import { REPORT_RANGES } from "@/constants/reportRanges";

const FAKE_DELAY = 400;

function getRangeBounds(rangeId) {
  const range = REPORT_RANGES.find((r) => r.id === rangeId) ?? REPORT_RANGES[1];
  const endDate = dayjs();
  const startDate = range.days ? endDate.subtract(range.days - 1, "day") : null;

  return {
    startIso: startDate ? startDate.format("YYYY-MM-DD") : null,
    endIso: endDate.format("YYYY-MM-DD"),
  };
}

export function getReportData(rangeId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { startIso, endIso } = getRangeBounds(rangeId);

      const inRange = appointments.filter((a) => {
        if (startIso && a.date < startIso) return false;
        return a.date <= endIso;
      });

      const completed = inRange.filter((a) => a.status === "completed");
      const cancelled = inRange.filter((a) => a.status === "cancelled");
      const totalRevenue = completed.reduce((sum, a) => sum + a.price, 0);

      // برای "کل بازه" که کران پایین نداره، از قدیمی‌ترین نوبت موجود شروع می‌کنیم
      const chartStart = startIso
        ? dayjs(startIso)
        : dayjs(inRange.reduce((min, a) => (a.date < min ? a.date : min), endIso));

      const dayCount = Math.max(dayjs(endIso).diff(chartStart, "day") + 1, 1);

      const dailyRevenue = Array.from({ length: dayCount }, (_, i) => {
        const date = chartStart.add(i, "day");
        const dateIso = date.format("YYYY-MM-DD");
        const revenue = completed
          .filter((a) => a.date === dateIso)
          .reduce((sum, a) => sum + a.price, 0);
        return { label: toPersianDate(date).format("DD MMM"), revenue };
      });

      resolve({
        totalRevenue,
        totalAppointments: inRange.length,
        completedCount: completed.length,
        cancelledCount: cancelled.length,
        dailyRevenue,
      });
    }, FAKE_DELAY);
  });
}