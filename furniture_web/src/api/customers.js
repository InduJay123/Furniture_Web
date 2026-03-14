import axiosPrivate from "./axiosPrivate";

export const fetchAdminCustomers = async () => {
  const res = await axiosPrivate.get("accounts/admin/customers/");
  return res.data;
};