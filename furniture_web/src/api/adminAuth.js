import axiosPublic from "./axiosPublic";

export const adminLogin = async ({ email, password }) => {
  return axiosPublic.post("accounts/admin/login/", {
    email,
    password,
  });
};

export const adminLogout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("is_admin");
};

export const saveAdminAuth = (data) => {
  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);
  localStorage.setItem("is_admin", String(data.is_admin)); 
};

export const isAdminAuthenticated = () => {
  const token = localStorage.getItem("access");
  const isAdmin = localStorage.getItem("is_admin") === "true";
  return Boolean(token && isAdmin);
};
