// src/services/servicesService.js
import { services } from "@/data/mock/services";

const FAKE_DELAY = 400;

export function getPopularServices(limit = 4) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(services.filter((s) => s.popular).slice(0, limit));
    }, FAKE_DELAY);
  });
}