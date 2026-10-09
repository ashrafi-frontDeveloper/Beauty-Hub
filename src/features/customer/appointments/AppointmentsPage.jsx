// src/features/customer/appointments/AppointmentsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getAppointmentsByCustomer } from "@/services/appointmentsService";
import AppointmentTabs from "./components/AppointmentTabs";
import AppointmentCard from "./components/AppointmentCard";

const AppointmentsPage = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    getAppointmentsByCustomer(user.id).then((result) => {
      setAppointments(result);
      setIsLoading(false);
    });
  }, []);

  const filteredAppointments = useMemo(() => {
    return appointments.filter((a) => {
      if (activeTab === "upcoming") return a.status === "pending" || a.status === "confirmed";
      if (activeTab === "completed") return a.status === "completed";
      return a.status === "cancelled";
    });
  }, [appointments, activeTab]);

  return (
    <div className="flex flex-col gap-4">

      <div className="relative mb-6 overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-l from-pink-100/80 via-pink-50 to-white px-5 py-6 sm:px-7 sm:py-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-8 -top-10 size-32 rounded-full bg-pink-200/40 blur-3xl"
        />

        <div className="relative">
          <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold text-pink-600 sm:text-sm">
            <span className="size-1.5 rounded-full bg-pink-500" />
            برنامه‌ریزی برای خودت
          </span>

          <h1 className="text-2xl font-extrabold tracking-tight text-neutral-800 sm:text-3xl">
            نوبت‌های من
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
            نوبت‌هات رو مدیریت کن و برای لحظه‌های زیبایی و آرامشت آماده باش.
          </p>
        </div>
      </div>

      <AppointmentTabs activeTab={activeTab} onChange={setActiveTab} />

      {isLoading ? (
        <div className="flex flex-col gap-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-20 animate-pulse rounded-2xl bg-surface" />
          ))}
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div className="py-12 text-center text-sm text-neutral-500">
          نوبتی در این بخش وجود ندارد
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredAppointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;