import axios from "axios";

const api = axios.create({
  baseURL: "https://codingapple1.github.io/vue/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers["X-Accept-Token"] = "j412jrkl1ik2j";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
api.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
