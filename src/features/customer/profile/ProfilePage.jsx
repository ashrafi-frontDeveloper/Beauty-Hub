// src/features/customer/profile/ProfilePage.jsx
import { useAuth } from "@/context/AuthContext";
import ProfileHeader from "./components/ProfileHeader";
import ProfileForm from "./components/ProfileForm";
import AccountActions from "./components/AccountActions";

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold text-neutral-800">پروفایل</h1>
      <ProfileHeader name={user.name} phone={user.phone} />
      <ProfileForm defaultValues={user} onSave={updateProfile} />
      <AccountActions />
    </div>
  );
};

export default ProfilePage;