// src/utils/timeSlots.js
const SLOT_INTERVAL_MINUTES = 30;

function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function minutesToTime(minutes) {
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}:${m}`;
}

/**
 * یک تابع خالص (بدون وابستگی به React یا Mock Data) که لیست اسلات‌های
 * یک روز رو بر اساس ساعات کاری، مدت‌زمان سرویس، و نوبت‌های از قبل رزرو شده می‌سازه.
 *
 * @param {{open: string, close: string} | null} dayWorkingHours
 * @param {number} serviceDuration - دقیقه
 * @param {{time: string, duration: number}[]} bookedAppointments
 * @returns {{time: string, available: boolean}[]}
 */
export function generateTimeSlots({ dayWorkingHours, serviceDuration, bookedAppointments }) {
  if (!dayWorkingHours) return [];

  const openMinutes = timeToMinutes(dayWorkingHours.open);
  const closeMinutes = timeToMinutes(dayWorkingHours.close);

  const bookedRanges = bookedAppointments.map((appt) => {
    const start = timeToMinutes(appt.time);
    return { start, end: start + appt.duration };
  });

  const slots = [];

  for (
    let slotStart = openMinutes;
    slotStart + serviceDuration <= closeMinutes;
    slotStart += SLOT_INTERVAL_MINUTES
  ) {
    const slotEnd = slotStart + serviceDuration;
    const overlaps = bookedRanges.some(
      (range) => slotStart < range.end && slotEnd > range.start
    );

    slots.push({ time: minutesToTime(slotStart), available: !overlaps });
  }

  return slots;
}