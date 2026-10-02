// src/features/customer/appointments/ReschedulePage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAppointmentById, rescheduleAppointment } from "@/services/appointmentsService";
import SelectDateStep from "@/Components/common/ScheduleSteps/SelectDateStep";
import SelectTimeStep from "@/Components/common/ScheduleSteps/SelectTimeStep";
import RescheduleConfirmStep from "./components/RescheduleConfirmStep";

const ReschedulePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1); // 1: تاریخ | 2: ساعت | 3: تأیید
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newDate, setNewDate] = useState(null);
  const [newTime, setNewTime] = useState(null);

  useEffect(() => {
    getAppointmentById(id).then((result) => {
      setAppointment(result);
      setIsLoading(false);
    });
  }, [id]);

  const goNext = () => setStep((s) => s + 1);
  const goBack = () => setStep((s) => s - 1);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    await rescheduleAppointment(id, { date: newDate, time: newTime });
    setIsSubmitting(false);
    navigate(`/appointments/${id}`);
  };

  if (isLoading) {
    return <div className="h-40 animate-pulse rounded-2xl bg-surface" />;
  }

  if (!appointment) {
    return <p className="py-10 text-center text-sm text-neutral-500">نوبت پیدا نشد</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-base font-bold text-neutral-800">تغییر تاریخ و ساعت</h1>

      {step === 1 && (
        <SelectDateStep
          selectedDate={newDate}
          onSelect={setNewDate}
          onNext={goNext}
          onBack={() => navigate(-1)}
        />
      )}

      {step === 2 && (
        <SelectTimeStep
          selectedDate={newDate}
          serviceDuration={appointment.duration}
          selectedTime={newTime}
          excludeAppointmentId={appointment.id}
          onSelect={setNewTime}
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {step === 3 && (
        <RescheduleConfirmStep
          appointment={appointment}
          newDate={newDate}
          newTime={newTime}
          onConfirm={handleConfirm}
          onBack={goBack}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default ReschedulePage;