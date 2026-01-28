import axiosPrivate from "./axiosPrivate";
import axiosPublic from "./axiosPublic"

export const getProducts = async () =>{
    const res = await axiosPublic.get("products/list/");
    return res.data;
}

export const getProductById = async (id) => {
  const res = await axiosPublic.get(`products/${id}/`);
  return res.data;
};

export const addProduct = async ({name, category, price, imageFile, sku, description, stock_qty, out_of_stock, weight, dimensions }) => {
    const fd = new FormData();
    fd.append("name", name);
    fd.append("category", category);
    fd.append("price", price);
    fd.append("image", imageFile);
    fd.append("sku", sku);
    fd.append("description", description);
    fd.append("stock_qty", stock_qty);
    fd.append("out_of_stock", out_of_stock);
    fd.append("weight", weight);
    fd.append("dimensions", dimensions);

    const res = await axiosPrivate.post("products/add/", fd, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
}

export const updateProduct = async (id, payload) => {
  const fd = new FormData();
  fd.append("name", payload.name);
  fd.append("category", payload.category);
  fd.append("price", payload.price);
  if (payload.sku) fd.append("sku", payload.sku);
  if (payload.description) fd.append("description", payload.description);
  if (payload.stock_qty != null) fd.append("stock_qty", payload.stock_qty);
  if (payload.out_of_stock != null) fd.append("out_of_stock", payload.out_of_stock);
  if (payload.weight != null) fd.append("weight", payload.weight);
  if (payload.dimensions) fd.append("dimensions", payload.dimensions);

  // for new image
  if (payload.imageFile) fd.append("image", payload.imageFile);

  const res = await axiosPrivate.put(`products/${id}/update/`, fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axiosPrivate.delete(`products/${id}/delete/`);
  return res.data;
};