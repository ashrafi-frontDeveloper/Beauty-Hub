// src/lib/dayjs.js
import dayjs from "dayjs";
import jalaliday from "jalaliday/dayjs";
import "dayjs/locale/fa";

dayjs.extend(jalaliday);

// فقط برای نمایش به کاربر استفاده می‌شه — تقویم پیش‌فرض dayjs دست‌نخورده (میلادی) می‌مونه
export function toPersianDate(date) {
  return dayjs(date).calendar("jalali").locale("fa");
}

export default dayjs;