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
export function getAppointmentsByDate(dateIso, excludeAppointmentId = null) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        appointments.filter(
          (a) =>
            a.date === dateIso &&
            a.status !== "cancelled" &&
            a.id !== excludeAppointmentId
        )
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

// export function cancelAppointment(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const appointment = appointments.find((a) => a.id === id);
//       if (appointment) appointment.status = "cancelled";
//       resolve(appointment ?? null);
//     }, 400);
//   });
// }

//__________________________________________


//این دو تابع رو جایگزین cancelAppointment قدیمی کن
export function updateAppointmentStatus(id, status) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const appointment = appointments.find((a) => a.id === id);
      if (appointment) appointment.status = status;
      resolve(appointment ?? null);
    }, 400);
  });
}
export function cancelAppointment(id) {
  return updateAppointmentStatus(id, "cancelled");
}

export function rescheduleAppointment(id, { date, time }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const appointment = appointments.find((a) => a.id === id);
      if (appointment) {
        appointment.date = date;
        appointment.time = time;
        appointment.status = "pending"; // نیاز به تأیید مجدد سالن
      }
      resolve(appointment ?? null);
    }, 500);
  });
}