import axios from "axios";

const API = axios.create({
  baseURL: "https://highway-delite-backend-048l.onrender.com/api", // ✅ your Render backend link
  headers: { "Content-Type": "application/json" },
});

export const getExperiences = () => API.get("/experiences");
export const getExperience = (id) => API.get(`/experiences/${id}`);
export const postBooking = (payload) => API.post("/bookings", payload);
export const validatePromo = (code) => API.post("/promo/validate", { code });
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);
