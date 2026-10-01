// src/features/customer/booking/components/steps/SelectTimeStep.jsx
import { useEffect, useState } from "react";
import { getAppointmentsByDate } from "@/services/appointmentsService";
import { generateTimeSlots } from "@/utils/timeSlots";
import { workingHours } from "@/data/mock/workingHours";
import dayjs from "@/lib/dayjs";

const SelectTimeStep = ({ selectedDate, serviceDuration, selectedTime, onSelect, onNext, onBack }) => {
  const [slots, setSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAppointmentsByDate(selectedDate).then((bookedAppointments) => {
      const nativeWeekday = dayjs(selectedDate).day();
      const dayWorkingHours = workingHours[nativeWeekday];

      setSlots(
        generateTimeSlots({ dayWorkingHours, serviceDuration, bookedAppointments })
      );
      setIsLoading(false);
    });
  }, [selectedDate, serviceDuration]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-11 animate-pulse rounded-xl bg-surface" />
        ))}
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className="py-10 text-center text-sm text-neutral-500">
        برای این روز زمانی موجود نیست — یک تاریخ دیگر را انتخاب کنید
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-2">
        {slots.map((slot) => {
          const isSelected = slot.time === selectedTime;
          return (
            <button
              key={slot.time}
              type="button"
              disabled={!slot.available}
              onClick={() => onSelect(slot.time)}
              className={`rounded-xl border py-2.5 text-sm ${
                isSelected
                  ? "border-primary bg-primary text-white"
                  : "border-neutral-200 bg-surface text-neutral-700"
              } disabled:border-transparent disabled:bg-neutral-100 disabled:text-neutral-300`}
            >
              {slot.time}
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-xl border border-neutral-200 py-3 text-sm text-neutral-600"
        >
          مرحله قبل
        </button>
        <button
          type="button"
          disabled={!selectedTime}
          onClick={onNext}
          className="flex-1 rounded-xl bg-primary py-3 text-sm font-medium text-white disabled:opacity-40"
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default SelectTimeStep;