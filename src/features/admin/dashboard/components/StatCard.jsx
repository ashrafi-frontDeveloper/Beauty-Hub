// src/features/admin/dashboard/components/StatCard.jsx
const StatCard = ({ label, value, icon: Icon, isLoading }) => {
  if (isLoading) {
    return <div className="h-24 animate-pulse rounded-2xl bg-surface" />;
  }

  return (
    <div className="flex items-center justify-between rounded-2xl bg-surface p-4">
      <div>
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="mt-1 text-xl font-bold text-neutral-800">{value}</p>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light">
        <Icon className="text-primary" size={20} />
      </div>
    </div>
  );
};

export default StatCard;