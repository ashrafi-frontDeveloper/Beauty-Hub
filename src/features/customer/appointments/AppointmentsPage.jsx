// src/features/customer/appointments/AppointmentsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { currentUser } from "@/data/mock/users";
import { getAppointmentsByCustomer } from "@/services/appointmentsService";
import AppointmentTabs from "./components/AppointmentTabs";
import AppointmentCard from "./components/AppointmentCard";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    getAppointmentsByCustomer(currentUser.id).then((result) => {
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
      <h1 className="text-lg font-bold text-neutral-800">نوبت‌های من</h1>

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