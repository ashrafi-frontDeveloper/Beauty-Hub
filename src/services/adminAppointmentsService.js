// src/services/adminAppointmentsService.js
import { appointments } from "@/data/mock/appointments";
import { users } from "@/data/mock/users";

const FAKE_DELAY = 400;

export function getAllAppointmentsWithCustomer({ search = "", statusFilter = "all" } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const joined = appointments.map((appt) => {
        const customer = users.find((u) => u.id === appt.customerId);
        return {
          ...appt,
          customerName: customer?.name ?? "نامشخص",
          customerPhone: customer?.phone ?? "",
        };
      });

      const filtered = joined.filter((appt) => {
        const matchesStatus = statusFilter === "all" || appt.status === statusFilter;
        const matchesSearch =
          search.trim() === "" ||
          appt.customerName.includes(search) ||
          appt.customerPhone.includes(search) ||
          appt.serviceName.includes(search);
        return matchesStatus && matchesSearch;
      });

      // نزدیک‌ترین نوبت‌ها بالا
      filtered.sort((a, b) => (a.date + a.time < b.date + b.time ? 1 : -1));

      resolve(filtered);
    }, FAKE_DELAY);
  });
}