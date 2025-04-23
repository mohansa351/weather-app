import axios from 'axios';
import { getTokenAsyncStorage } from './auth_helper';

export const API_URL = 'https://jjjdjjd.io';
export const MAP_KEY = 'AIzaSyD2iCn1XM8zHTlJSYwPSnDAJM83m4PyBV4'


const axiosApi = axios.create({ baseURL: API_URL });

axiosApi.interceptors.request.use(async function (config: any) {
    // var authToken = stateData.token;
    // var authData = JSON.parse(stateData);
    // const token = authData.token;
    const token = await getTokenAsyncStorage();
    // config.headers.Authorization = `Bearer ${  .parse(token)}`;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
  );
  

export async function get(url: string, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data);
}
export async function postparam(url: string, config = {}) {
    return await axiosApi.post(url, { ...config }).then(response => response.data);
}
export async function post(url: string, data: any, config = {}) {
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then(response => response?.data);
}


