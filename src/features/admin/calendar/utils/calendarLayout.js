// src/features/admin/calendar/utils/calendarLayout.js
export const DISPLAY_START_HOUR = 8;
export const DISPLAY_END_HOUR = 21;
export const HOUR_HEIGHT = 60; // پیکسل

export function getBlockPosition(time, duration) {
  const [h, m] = time.split(":").map(Number);
  const startMinutes = h * 60 + m;
  const displayStartMinutes = DISPLAY_START_HOUR * 60;

  return {
    top: ((startMinutes - displayStartMinutes) / 60) * HOUR_HEIGHT,
    height: (duration / 60) * HOUR_HEIGHT,
  };
}

export function getTimelineHeight() {
  return (DISPLAY_END_HOUR - DISPLAY_START_HOUR) * HOUR_HEIGHT;
}

export function getHourMarks() {
  const marks = [];
  for (let h = DISPLAY_START_HOUR; h <= DISPLAY_END_HOUR; h++) {
    marks.push(`${String(h).padStart(2, "0")}:00`);
  }
  return marks;
}