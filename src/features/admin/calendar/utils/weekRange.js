// src/features/admin/calendar/utils/weekRange.js
import dayjs from "@/lib/dayjs";

export function getWeekStart(referenceDate) {
  const date = dayjs(referenceDate);
  const nativeDay = date.day(); // ۰=یکشنبه ... ۶=شنبه (میلادی، مستقل از نمایش)
  const daysSinceSaturday = (nativeDay - 6 + 7) % 7;
  return date.subtract(daysSinceSaturday, "day");
}

export function getWeekDays(referenceDate) {
  const weekStart = getWeekStart(referenceDate);
  return Array.from({ length: 7 }, (_, i) => weekStart.add(i, "day"));
}