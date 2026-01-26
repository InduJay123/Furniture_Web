import axiosPrivate from "./axiosPrivate";

export const placeOrder = async (payload) => {
  console.log("Placing order with payload:", payload);
  const res = await axiosPrivate.post("orders/place/", payload);
  return res.data;
};
