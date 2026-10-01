// src/data/mock/appointments.js
// توجه: "date" حالا همیشه ISO میلادی ذخیره می‌شه (نه متن شمسی آماده).
// فرمت نمایشی رو هر Component با toPersianDate می‌سازه.
export const appointments = [
  {
    id: "a1",
    customerId: "u1",
    serviceId: "s2",
    serviceName: "رنگ مو",
    date: "2026-10-05",
    time: "10:30",
    duration: 120,
    price: 500000,
    status: "confirmed", // pending | confirmed | completed | cancelled
  },
];