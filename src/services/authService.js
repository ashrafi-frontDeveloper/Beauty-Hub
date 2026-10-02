// src/services/authService.js
import { users } from "@/data/mock/users";

const SESSION_KEY = "beautyhub_session";
const FAKE_DELAY = 500;

function delay() {
  return new Promise((resolve) => setTimeout(resolve, FAKE_DELAY));
}

function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: user.id, role: user.role }));
}

export async function login({ identifier, password }) {
  await delay();
  const user = users.find(
    (u) => (u.phone === identifier || u.email === identifier) && u.password === password
  );
  if (!user) {
    throw new Error("شماره موبایل/ایمیل یا رمز عبور اشتباه است");
  }
  saveSession(user);
  return user;
}

export async function register(data) {
  await delay();
  const isDuplicate = users.some((u) => u.phone === data.phone || u.email === data.email);
  if (isDuplicate) {
    throw new Error("کاربری با این شماره موبایل یا ایمیل قبلاً ثبت‌نام کرده است");
  }

  const newUser = { id: `u${users.length + 1}`, address: "", role: "customer", ...data };
  users.push(newUser);
  saveSession(newUser);
  return newUser;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export async function getSession() {
  await delay();
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  const { userId } = JSON.parse(raw);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
  return user;
}