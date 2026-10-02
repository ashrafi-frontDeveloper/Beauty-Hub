// src/features/customer/booking/BookingPage.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getAllServices } from "@/services/servicesService";
import { createAppointment } from "@/services/appointmentsService";
import { useAuth } from "@/context/AuthContext";
import BookingStepper from "./components/BookingStepper";
import SelectServiceStep from "./components/steps/SelectServiceStep";
import SelectDateStep from "@/Components/common/ScheduleSteps/SelectDateStep";
import SelectTimeStep from "@/Components/common/ScheduleSteps/SelectTimeStep";
import BookingSummaryStep from "./components/steps/BookingSummaryStep";
import BookingSuccessStep from "./components/steps/BookingSuccessStep";

const BookingPage = () => {

  const { user } = useAuth();
  const location = useLocation();
  const preselectedServiceId = location.state?.preselectedServiceId ?? null;

  const [step, setStep] = useState(1);
  const [services, setServices] = useState([]);
  const [isServicesLoading, setIsServicesLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [draft, setDraft] = useState({
    serviceId: preselectedServiceId,
    date: null,
    time: null,
  });

  useEffect(() => {
    getAllServices().then((result) => {
      setServices(result);
      setIsServicesLoading(false);
    });
  }, []);

  const selectedService = services.find((s) => s.id === draft.serviceId) ?? null;

  const goNext = () => setStep((s) => s + 1);
  const goBack = () => setStep((s) => s - 1);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    await createAppointment({
      customerId: user.id,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      date: draft.date,
      time: draft.time,
      duration: selectedService.duration,
      price: selectedService.price,
    });
    setIsSubmitting(false);
    goNext();
  };

  if (step === 5) {
    return <BookingSuccessStep />;
  }

  return (
    <div>
      <BookingStepper step={step} onBack={goBack} />

      {step === 1 && (
        <SelectServiceStep
          services={services}
          isLoading={isServicesLoading}
          selectedServiceId={draft.serviceId}
          onSelect={(serviceId) => setDraft((d) => ({ ...d, serviceId }))}
          onNext={goNext}
        />
      )}

      {step === 2 && (
        <SelectDateStep
          selectedDate={draft.date}
          onSelect={(date) => setDraft((d) => ({ ...d, date }))}
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {step === 3 && selectedService && (
        <SelectTimeStep
          selectedDate={draft.date}
          serviceDuration={selectedService.duration}
          selectedTime={draft.time}
          onSelect={(time) => setDraft((d) => ({ ...d, time }))}
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {step === 4 && selectedService && (
        <BookingSummaryStep
          service={selectedService}
          date={draft.date}
          time={draft.time}
          onConfirm={handleConfirm}
          onBack={goBack}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default BookingPage;