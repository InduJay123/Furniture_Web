import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "https://furniture-backend-fphuhqdbcyhbg2gk.southeastasia-01.azurewebsites.net",
});

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosPrivate;