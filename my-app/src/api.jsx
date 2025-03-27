import axios from "axios";

const api = axios.create({
  baseURL: "https://crud-backend-1fuk.onrender.com",
});

export default api;
