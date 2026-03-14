import axiosPrivate from "./axiosPrivate";

export const placeOrder = async (payload) => {
  console.log("Placing order with payload:", payload);
  const res = await axiosPrivate.post("orders/place/", payload);
  return res.data;
};

export const fetchOrders = async () => {
  const res = await axiosPrivate.get("orders/list/");
  return res.data;
}

export const fetchAdminOrders = async () => {
  const res = await axiosPrivate.get("orders/admin/list/");
  return res.data;
};

export const updateOrderStatus = async (orderId, status) => {
  const res = await axiosPrivate.patch(`orders/admin/${orderId}/status/`, { status });
  return res.data;
};

export const previewOrderPdf = async (orderId) => {
  const res = await axiosPrivate.get(`orders/admin/${orderId}/pdf/`, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
  window.open(url, "_blank");
};

export const downloadOrderPdf = async (orderId) => {
  const res = await axiosPrivate.get(`orders/admin/${orderId}/pdf/`, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `ORD-${orderId}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};
