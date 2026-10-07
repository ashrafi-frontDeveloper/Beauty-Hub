// src/Components/ui/Modal.jsx
import { X } from "lucide-react";

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-surface p-5"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-neutral-800">{title}</h2>
          <button type="button" onClick={onClose} aria-label="بستن">
            <X size={20} className="text-neutral-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;