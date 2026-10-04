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