import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem('accessToken');
    req.headers.authorization = `Bearer ${accessToken}`;
    return req;
  },
  (error) => {
    throw error;
  },
);

export default api;
