// src/features/customer/profile/ProfilePage.jsx
import { useEffect, useState } from "react";
import { getCurrentUser, updateCurrentUser } from "@/services/userService";
import ProfileHeader from "./components/ProfileHeader";
import ProfileForm from "./components/ProfileForm";
import AccountActions from "./components/AccountActions";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((result) => {
      setUser(result);
      setIsLoading(false);
    });
  }, []);

  const handleSave = async (data) => {
    const updated = await updateCurrentUser(data);
    setUser(updated);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="h-32 animate-pulse rounded-2xl bg-surface" />
        <div className="h-64 animate-pulse rounded-2xl bg-surface" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold text-neutral-800">پروفایل</h1>
      <ProfileHeader name={user.name} phone={user.phone} />
      <ProfileForm defaultValues={user} onSave={handleSave} />
      <AccountActions />
    </div>
  );
};

export default ProfilePage;