// src/services/adminAppointmentsService.js
import { appointments } from "@/data/mock/appointments";
import { users } from "@/data/mock/users";

const FAKE_DELAY = 400;

function joinCustomerData(appt) {
  const customer = users.find((u) => u.id === appt.customerId);
  return {
    ...appt,
    customerName: customer?.name ?? "نامشخص",
    customerPhone: customer?.phone ?? "",
  };
}

export function getAllAppointmentsWithCustomer({ search = "", statusFilter = "all" } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const joined = appointments.map(joinCustomerData);
      const filtered = joined.filter((appt) => {
        const matchesStatus = statusFilter === "all" || appt.status === statusFilter;
        const matchesSearch =
          search.trim() === "" ||
          appt.customerName.includes(search) ||
          appt.customerPhone.includes(search) ||
          appt.serviceName.includes(search);
        return matchesStatus && matchesSearch;
      });
      filtered.sort((a, b) => (a.date + a.time < b.date + b.time ? 1 : -1));
      resolve(filtered);
    }, FAKE_DELAY);
  });
}

// برای تقویم — نوبت‌های یک بازه‌ی تاریخی (هفته یا یک روز)
export function getAppointmentsInRange(startDateIso, endDateIso) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = appointments
        .filter((a) => a.date >= startDateIso && a.date <= endDateIso && a.status !== "cancelled")
        .map(joinCustomerData);
      resolve(result);
    }, FAKE_DELAY);
  });
}