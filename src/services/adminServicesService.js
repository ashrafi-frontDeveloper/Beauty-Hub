// src/services/adminServicesService.js
import { services } from "@/data/mock/services";

const FAKE_DELAY = 400;

export function getAllServicesAdmin() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...services]), FAKE_DELAY);
  });
}

export function createService(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newService = {
        id: `s${services.length + 1}`,
        popular: false, // فیلد داخلی برای "خدمات محبوب" داشبورد مشتری — در فرم Admin نیست
        ...data,
      };
      services.push(newService);
      resolve(newService);
    }, FAKE_DELAY);
  });
}

export function updateService(id, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const service = services.find((s) => s.id === id);
      if (service) Object.assign(service, data);
      resolve(service ?? null);
    }, FAKE_DELAY);
  });
}

export function deleteService(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = services.findIndex((s) => s.id === id);
      if (index !== -1) services.splice(index, 1);
      resolve(true);
    }, FAKE_DELAY);
  });
}