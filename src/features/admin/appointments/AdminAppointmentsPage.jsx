// src/features/admin/appointments/AdminAppointmentsPage.jsx
import { useEffect, useState } from "react";
import { getAllAppointmentsWithCustomer } from "@/services/adminAppointmentsService";
import { updateAppointmentStatus } from "@/services/appointmentsService";
import AppointmentsFilterBar from "./components/AppointmentsFilterBar";
import AppointmentsTable from "./components/AppointmentsTable";
import AppointmentDetailModal from "./components/AppointmentDetailModal";

const AdminAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const loadAppointments = () => {
    setIsLoading(true);
    getAllAppointmentsWithCustomer({ search, statusFilter }).then((result) => {
      setAppointments(result);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, statusFilter]);

  const handleStatusChange = async (id, status) => {
    await updateAppointmentStatus(id, status);
    loadAppointments();
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold text-neutral-800">نوبت‌ها</h1>

      <AppointmentsFilterBar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <AppointmentsTable
        appointments={appointments}
        isLoading={isLoading}
        onView={setSelectedAppointment}
        onConfirm={(id) => handleStatusChange(id, "confirmed")}
        onComplete={(id) => handleStatusChange(id, "completed")}
        onCancel={(id) => handleStatusChange(id, "cancelled")}
      />

      <AppointmentDetailModal
        appointment={selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
      />
    </div>
  );
};

export default AdminAppointmentsPage;