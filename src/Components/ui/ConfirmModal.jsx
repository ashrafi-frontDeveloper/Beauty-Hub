// src/Components/ui/ConfirmModal.jsx
const ConfirmModal = ({
  isOpen,
  title,
  description,
  confirmLabel = "تأیید",
  cancelLabel = "انصراف",
  variant = "default", // "default" | "danger"
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40"
      onClick={onCancel}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-t-2xl bg-surface p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
      >
        <h2 className="text-base font-bold text-neutral-800">{title}</h2>
        {description && <p className="mt-2 text-sm text-neutral-500">{description}</p>}

        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl bg-primary py-3 text-sm font-medium text-white"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`rounded-xl border py-3 text-sm font-medium ${
              variant === "danger"
                ? "border-red-200 text-red-500"
                : "border-neutral-200 text-neutral-600"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;