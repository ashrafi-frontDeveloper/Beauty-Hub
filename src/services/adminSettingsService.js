// src/services/adminSettingsService.js
import { workingHours } from "@/data/mock/workingHours";

const FAKE_DELAY = 400;

export function getWorkingHours() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...workingHours }), FAKE_DELAY);
  });
}

export function updateWorkingHours(newWorkingHours) {
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.assign(workingHours, newWorkingHours);
      resolve({ ...workingHours });
    }, FAKE_DELAY);
  });
}