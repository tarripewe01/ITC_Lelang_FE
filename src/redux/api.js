import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

const config = {
  headers: {
    "Content-Type": "application/json",
  }
}

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

// Login
export const login = (formData) => API.post("/auth/login", formData, config);