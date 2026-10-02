// src/features/customer/profile/components/ProfileHeader.jsx
const ProfileHeader = ({ name, phone }) => {
  const initials = name?.trim()?.charAt(0) ?? "?";

  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-surface p-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-xl font-bold text-primary">
        {initials}
      </div>
      <p className="text-base font-bold text-neutral-800">{name}</p>
      <p className="text-xs text-neutral-500">{phone}</p>
    </div>
  );
};

export default ProfileHeader;