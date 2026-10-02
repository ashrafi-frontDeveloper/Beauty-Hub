// src/services/userService.js
import { currentUser } from "@/data/mock/users";

export function getCurrentUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...currentUser }), 300);
  });
}

export function updateCurrentUser(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.assign(currentUser, data);
      resolve({ ...currentUser });
    }, 500);
  });
}