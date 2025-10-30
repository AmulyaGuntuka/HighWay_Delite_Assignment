import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export const getExperiences = () => API.get('/experiences');
export const getExperience = (id: string) => API.get(`/experiences/${id}`);
export const postBooking = (payload: any) => API.post('/bookings', payload);
export const validatePromo = (code: string) => API.post('/promo/validate', { code });
export const signup = (data: any) => API.post('/auth/signup', data);
export const login = (data: any) => API.post('/auth/login', data);
