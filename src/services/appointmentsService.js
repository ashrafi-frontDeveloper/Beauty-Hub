// src/services/appointmentsService.js
import { appointments } from "@/data/mock/appointments";

const FAKE_DELAY = 400;

export function getNextAppointment(customerId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const upcoming =
        appointments.find(
          (a) =>
            a.customerId === customerId &&
            (a.status === "pending" || a.status === "confirmed")
        ) ?? null;
      resolve(upcoming);
    }, FAKE_DELAY);
  });
}

// برای محاسبه‌ی Time Slotهای یک روز خاص — dateIso باید فرمت "YYYY-MM-DD" میلادی باشه
export function getAppointmentsByDate(dateIso) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        appointments.filter((a) => a.date === dateIso && a.status !== "cancelled")
      );
    }, 300);
  });
}

export function createAppointment(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newAppointment = {
        id: `a${appointments.length + 1}`,
        status: "pending",
        ...payload,
      };
      appointments.push(newAppointment);
      resolve(newAppointment);
    }, 500);
  });
}

export function getAppointmentsByCustomer(customerId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(appointments.filter((a) => a.customerId === customerId));
    }, 400);
  });
}

export function getAppointmentById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(appointments.find((a) => a.id === id) ?? null);
    }, 300);
  });
}

export function cancelAppointment(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const appointment = appointments.find((a) => a.id === id);
      if (appointment) appointment.status = "cancelled";
      resolve(appointment ?? null);
    }, 400);
  });
}