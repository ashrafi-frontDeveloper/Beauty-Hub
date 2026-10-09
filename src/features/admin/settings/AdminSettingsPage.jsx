// src/features/admin/settings/AdminSettingsPage.jsx
import AdminAccountForm from "./components/AdminAccountForm";
import ChangePasswordForm from "./components/ChangePasswordForm";
import WorkingHoursEditor from "./components/WorkingHoursEditor";

const AdminSettingsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold text-neutral-800">تنظیمات</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <AdminAccountForm />
        <ChangePasswordForm />
      </div>

      <WorkingHoursEditor />
    </div>
  );
};

export default AdminSettingsPage;