import { Navigate, Outlet } from "react-router-dom";
import { isAdminAuthenticated } from "../../api/adminAuth";

export default function AdminGuard() {
  return isAdminAuthenticated() ? <Outlet /> : <Navigate to="/admin/login" replace />;
}