// src/features/admin/customers/AdminCustomersPage.jsx
import { useEffect, useState } from "react";
import { getAllCustomersWithStats } from "@/services/adminCustomersService";
import CustomersSearchBar from "./components/CustomersSearchBar";
import CustomersTable from "./components/CustomersTable";
import CustomerDetailModal from "./components/CustomerDetailModal";

const AdminCustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAllCustomersWithStats({ search }).then((result) => {
      setCustomers(result);
      setIsLoading(false);
    });
  }, [search]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold text-neutral-800">مشتریان</h1>

      <CustomersSearchBar value={search} onChange={setSearch} />

      <CustomersTable customers={customers} isLoading={isLoading} onSelect={setSelectedCustomer} />

      <CustomerDetailModal customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
    </div>
  );
};

export default AdminCustomersPage;