import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const titleFromPath = (pathname) => {
  if (pathname.startsWith("/admin/products/new")) return "Add New Product";
  if (pathname.startsWith("/admin/products")) return "Products";
  return "Dashboard";
};

export default function AdminLayout() {
  const { pathname } = useLocation();
  const title = titleFromPath(pathname);

  return (
    <div className="h-screen w-full flex bg-[#fbfaf7]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title={title} />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}