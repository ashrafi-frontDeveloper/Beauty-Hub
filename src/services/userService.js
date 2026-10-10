// src/services/userService.js
import { users } from "@/data/mock/users";

const FAKE_DELAY = 400;

export function updateUser(userId, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      if (user) Object.assign(user, data);
      resolve(user ? { ...user } : null);
    }, FAKE_DELAY);
  });
}
