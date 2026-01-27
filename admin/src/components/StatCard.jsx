export default function StatCard({ title, value, change, icon }) {
  return (
    <div className="bg-cream rounded-xl p-5 shadow-sm flex justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold">{value}</h3>
        <p className={`text-sm ${change > 0 ? "text-green-600" : "text-red-500"}`}>
          {change > 0 ? "+" : ""}{change}% vs last month
        </p>
      </div>
      <div className="bg-soft w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}
