function formatMoney(n) {
  return Number(n || 0).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default function OrderDetailsModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-3xl rounded-lg overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-900">{order.id}</div>
            <div className="text-sm text-gray-500">{order.customer} • {order.email}</div>
          </div>
          <button onClick={onClose} className="px-3 py-1 border rounded-md hover:bg-black/5">
            Close
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-gray-500">Date:</span> {order.date}</div>
            <div><span className="text-gray-500">Status:</span> {order.status}</div>
            <div><span className="text-gray-500">Amount:</span> {formatMoney(order.amount)}</div>
            <div><span className="text-gray-500">Items:</span> {order.itemsCount}</div>
          </div>

          <div className="border rounded-lg">
            <div className="p-3 border-b font-medium">Products</div>
            <div className="divide-y">
              {(order.items || []).map((it, idx) => (
                <div key={idx} className="p-3 flex items-center gap-3">
                  <div className="w-14 h-14 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                    {it.image ? (
                      <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-xs text-gray-400">No image</div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{it.name}</div>
                    <div className="text-xs text-gray-500">{it.category || "-"}</div>
                  </div>

                  <div className="text-right text-sm">
                    <div className="text-gray-900">x{it.quantity}</div>
                    <div className="text-gray-500">
                      Rs. {Number(it.price || 0).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}

              {(order.items || []).length === 0 && (
                <div className="p-3 text-sm text-gray-500">No items</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}