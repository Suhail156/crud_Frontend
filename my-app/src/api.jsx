import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3520",
});

export default api;
