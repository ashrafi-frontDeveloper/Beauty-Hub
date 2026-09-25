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