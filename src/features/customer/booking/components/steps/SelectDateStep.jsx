// src/features/customer/booking/components/steps/SelectDateStep.jsx
import dayjs, { toPersianDate } from "@/lib/dayjs";
import { workingHours } from "@/data/mock/workingHours";

const DAYS_TO_SHOW = 14;

function buildAvailableDays() {
  const days = [];

  for (let i = 0; i < DAYS_TO_SHOW; i++) {
    const gregorianDate = dayjs().add(i, "day"); // برای محاسبه و کلید - همیشه میلادی
    const persianDate = toPersianDate(gregorianDate); // فقط برای نمایش

    days.push({
      isoDate: gregorianDate.format("YYYY-MM-DD"),
      dayLabel: persianDate.format("dddd"),
      dayNumber: persianDate.format("DD"),
      monthLabel: persianDate.format("MMMM"),
      isOpen: Boolean(workingHours[gregorianDate.day()]),
    });
  }

  return days;
}

const SelectDateStep = ({ selectedDate, onSelect, onNext, onBack }) => {
  const days = buildAvailableDays();

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-2">
        {days.map((day) => {
          const isSelected = day.isoDate === selectedDate;
          return (
            <button
              key={day.isoDate}
              type="button"
              disabled={!day.isOpen}
              onClick={() => onSelect(day.isoDate)}
              className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-center ${
                isSelected ? "border-primary bg-primary-light" : "border-neutral-200 bg-surface"
              } disabled:opacity-30`}
            >
              <span className="text-[11px] text-neutral-500">{day.dayLabel}</span>
              <span className="text-base font-bold text-neutral-800">{day.dayNumber}</span>
              <span className="text-[11px] text-neutral-500">{day.monthLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-xl border border-neutral-200 py-3 text-sm text-neutral-600 cursor-pointer"
        >
          مرحله قبل
        </button>
        <button
          type="button"
          disabled={!selectedDate}
          onClick={onNext}
          className="flex-1 rounded-xl bg-primary py-3 text-sm font-medium text-white disabled:opacity-40 cursor-pointer"
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default SelectDateStep;