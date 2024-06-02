import axios, { type AxiosRequestConfig } from 'axios';

const api = axios.create({});

const refreshToken = localStorage.getItem('refreshToken');

let isRefreshing = false;
let refreshSubscribers: Array<() => void> = [];

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.config.url === '/oauth/token') throw err;
    if (err.config.url === '/oauth/token/renew') throw err;

    const originalRequest: AxiosRequestConfig = err.config;

    if (err.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;

        return await api
          .post('/oauth/token/renew', {
            refreshToken,
          })
          .then(async (res) => {
            localStorage.setItem(
              'accessToken',
              String(res.data.data.accessToken),
            );
            localStorage.setItem(
              'refreshToken',
              String(res.data.data.refreshToken),
            );

            isRefreshing = false;

            refreshSubscribers.forEach((callback) => {
              callback();
            });

            refreshSubscribers = [];

            return await api(originalRequest);
          })
          .catch((refreshErr) => {
            console.error(refreshErr);
            isRefreshing = false;
          });
      } else {
        return await new Promise((resolve) => {
          refreshSubscribers.push(() => {
            resolve(api(originalRequest));
          });
        });
      }
    }

    throw err;
  },
);

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
