// src/features/admin/customers/components/CustomersTable.jsx
const CustomersTable = ({ customers, isLoading, onSelect }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-14 animate-pulse rounded-xl bg-surface" />
        ))}
      </div>
    );
  }

  if (customers.length === 0) {
    return (
      <div className="rounded-2xl bg-surface p-10 text-center text-sm text-neutral-500">
        مشتری‌ای با این مشخصات پیدا نشد
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl bg-surface">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr className="border-b border-neutral-200 text-xs text-neutral-500">
            <th className="p-3 text-start font-medium">نام</th>
            <th className="p-3 text-start font-medium">شماره موبایل</th>
            <th className="p-3 text-start font-medium">تعداد نوبت‌ها</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              onClick={() => onSelect(customer)}
              className="cursor-pointer border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
            >
              <td className="p-3 font-medium text-neutral-800">{customer.name}</td>
              <td className="p-3 text-neutral-600">{customer.phone}</td>
              <td className="p-3 text-neutral-600">{customer.appointmentsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;