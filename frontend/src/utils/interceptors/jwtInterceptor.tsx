import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const jwtInterceptor: AxiosInstance = axios.create();

jwtInterceptor.interceptors.request.use((config) => {
  const accessToken = Cookies.get('access_token');
  if (accessToken) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const refresh_token = Cookies.get('refresh_token');
      const token = {
        refresh: refresh_token
      };
      try {
        let response = await axios.post('http://localhost:8000/api/token/refresh/', token);
        Cookies.set('access_token', response.data.access);
        Cookies.set('refresh_token', response.data.refresh);
        error.config.headers['Authorization'] = `Bearer ${response.data.access}`;
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;
