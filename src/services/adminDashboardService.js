// src/services/adminDashboardService.js
import { appointments } from "@/data/mock/appointments";
import { users } from "@/data/mock/users";
import { services } from "@/data/mock/services";
import { revenueHistory } from "@/data/mock/revenueHistory";
import dayjs from "@/lib/dayjs";

const FAKE_DELAY = 400;

export function getDashboardStats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activeAppointments = appointments.filter((a) => a.status !== "cancelled");
      const totalRevenue = appointments
        .filter((a) => a.status === "completed")
        .reduce((sum, a) => sum + a.price, 0);

      resolve({
        totalAppointments: activeAppointments.length,
        totalCustomers: users.filter((u) => u.role === "customer").length,
        totalRevenue,
        totalServices: services.filter((s) => s.status === "active").length,
      });
    }, FAKE_DELAY);
  });
}

export function getRevenueHistory() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(revenueHistory), FAKE_DELAY);
  });
}

export function getTodaysAppointments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const today = dayjs().format("YYYY-MM-DD");
      const result = appointments
        .filter((a) => a.date === today && a.status !== "cancelled")
        .sort((a, b) => a.time.localeCompare(b.time));
      resolve(result);
    }, FAKE_DELAY);
  });
}

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