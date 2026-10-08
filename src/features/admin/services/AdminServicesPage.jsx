// src/features/admin/services/AdminServicesPage.jsx
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import {
  getAllServicesAdmin,
  createService,
  updateService,
  deleteService,
} from "@/services/adminServicesService";
import ConfirmDialog from "@/Components/ui/ConfirmDialog";
import ServicesTable from "./components/ServicesTable";
import ServiceFormModal from "./components/ServiceFormModal";

const AdminServicesPage = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const [deletingService, setDeletingService] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadServices = () => {
    setIsLoading(true);
    getAllServicesAdmin().then((result) => {
      setServices(result);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadServices();
  }, []);

  const openCreateForm = () => {
    setEditingService(null);
    setIsFormOpen(true);
  };

  const openEditForm = (service) => {
    setEditingService(service);
    setIsFormOpen(true);
  };

  const handleFormSubmit = async (data) => {
    if (editingService) {
      await updateService(editingService.id, data);
    } else {
      await createService(data);
    }
    loadServices();
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    await deleteService(deletingService.id);
    setIsDeleting(false);
    setDeletingService(null);
    loadServices();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-neutral-800">مدیریت خدمات</h1>
        <button
          type="button"
          onClick={openCreateForm}
          className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white"
        >
          <Plus size={16} />
          افزودن خدمت
        </button>
      </div>

      <ServicesTable
        services={services}
        isLoading={isLoading}
        onEdit={openEditForm}
        onDelete={setDeletingService}
      />

      <ServiceFormModal
        isOpen={isFormOpen}
        editingService={editingService}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
      />

      <ConfirmDialog
        isOpen={Boolean(deletingService)}
        title="حذف سرویس؟"
        description={`آیا از حذف «${deletingService?.name}» مطمئن هستید؟ این عملیات قابل بازگشت نیست.`}
        confirmLabel="حذف"
        variant="danger"
        isSubmitting={isDeleting}
        onCancel={() => setDeletingService(null)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default AdminServicesPage;