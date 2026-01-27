import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "../components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-soft min-h-screen">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}