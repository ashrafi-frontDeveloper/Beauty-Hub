// src/Components/ui/ConfirmDialog.jsx
import Modal from "./Modal";

const ConfirmDialog = ({ isOpen, title, description, confirmLabel = "تأیید", variant = "default", onConfirm, onCancel, isSubmitting }) => {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onCancel}>
      {description && <p className="mb-5 text-sm text-neutral-500">{description}</p>}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="rounded-xl border border-neutral-200 px-4 py-2 text-sm text-neutral-600 disabled:opacity-40"
        >
          انصراف
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className={`rounded-xl px-4 py-2 text-sm font-medium text-white disabled:opacity-60 ${
            variant === "danger" ? "bg-red-500" : "bg-primary"
          }`}
        >
          {isSubmitting ? "در حال انجام..." : confirmLabel}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;