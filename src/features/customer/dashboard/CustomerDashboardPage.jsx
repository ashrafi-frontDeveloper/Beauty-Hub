// src/features/customer/dashboard/CustomerDashboardPage.jsx
import { useEffect, useState } from "react";
import { currentUser } from "@/data/mock/users";
import { getNextAppointment } from "@/services/appointmentsService";
import { getPopularServices } from "@/services/servicesService";
import DashboardGreeting from "./components/DashboardGreeting";
import NextAppointmentCard from "./components/NextAppointmentCard";
import QuickActions from "./components/QuickActions";
import PopularServices from "./components/PopularServices";

const CustomerDashboardPage = () => {
  const [appointment, setAppointment] = useState(null);
  const [isAppointmentLoading, setIsAppointmentLoading] = useState(true);

  const [popularServices, setPopularServices] = useState([]);
  const [isServicesLoading, setIsServicesLoading] = useState(true);

  useEffect(() => {
    getNextAppointment(currentUser.id).then((result) => {
      setAppointment(result);
      setIsAppointmentLoading(false);
    });

    getPopularServices().then((result) => {
      setPopularServices(result);
      setIsServicesLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <DashboardGreeting name={currentUser.name} />
      <NextAppointmentCard
        appointment={appointment}
        isLoading={isAppointmentLoading}
      />
      <QuickActions />
      <PopularServices services={popularServices} isLoading={isServicesLoading} />
    </div>
  );
};

export default CustomerDashboardPage;