import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://furniture-backend-fphuhqdbcyhbg2gk.southeastasia-01.azurewebsites.net/",
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosPublic;