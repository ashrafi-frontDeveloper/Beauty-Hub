// // src/services/userService.js
// import { currentUser } from "@/data/mock/users";

// export function getCurrentUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ ...currentUser }), 300);
//   });
// }

// export function updateCurrentUser(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       Object.assign(currentUser, data);
//       resolve({ ...currentUser });
//     }, 500);
//   });
// }

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
