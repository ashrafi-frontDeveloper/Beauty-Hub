// src/services/adminCustomersService.js
import { users } from "@/data/mock/users";
import { appointments } from "@/data/mock/appointments";

const FAKE_DELAY = 400;

export function getAllCustomersWithStats({ search = "" } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const customers = users
        .filter((u) => u.role === "customer")
        .map((customer) => ({
          id: customer.id,
          name: customer.name,
          phone: customer.phone,
          email: customer.email,
          appointmentsCount: appointments.filter((a) => a.customerId === customer.id).length,
        }));

      const filtered = customers.filter(
        (c) => search.trim() === "" || c.name.includes(search) || c.phone.includes(search)
      );

      resolve(filtered);
    }, FAKE_DELAY);
  });
}

export function getCustomerAppointments(customerId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = appointments
        .filter((a) => a.customerId === customerId)
        .sort((a, b) => (a.date + a.time < b.date + b.time ? 1 : -1));
      resolve(result);
    }, FAKE_DELAY);
  });
}