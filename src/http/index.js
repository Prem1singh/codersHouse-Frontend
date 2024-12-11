import axios, { toFormData } from 'axios'
import { useId } from 'react';
const api = axios.create({
  baseURL: 'https://codershouse-backend.vercel.app',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
},
});
export const sendOtp = (phone) => api.post('/auth/otp/send', { phone });
export const profileVerify = (formdata) => api.post('/auth/profile/verify', formdata, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
export const verifyOtp = (otp, phone, hash) => api.post('/auth/otp/verify', { phone, otp, hash });
export const getUsers = () => api.post('/user/userInfo/get');
export const logout = () => api.post('/user/account/logout');

export const createRoom = (roomType,roomName,userId) => api.post('/rooms/room/create',{roomType,roomName,userId});
export const getRooms = () => api.post('/rooms/room/get');
export const getSingleRoom = (id) => api.post('/rooms/singleRoom/get',{id});
export const joinRoom=(roomId,userId)=> api.post('/rooms/room/join',{roomId,userId})
export const leaveRoom=(roomId,userId)=> api.post('/rooms/room/leave',{roomId,userId})


api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await axios.get(
          `https://codershouse-backend.vercel.app`,
          {
            withCredentials: true,
          }
        );

        return api.request(originalRequest);
      } catch (err) {
        console.log(err.message);
      }
    }
    throw error;
  }
);
export default api;

