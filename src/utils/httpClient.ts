/* eslint-disable no-return-await */
import { BASE_URL } from '@configs/constants';
import axios from 'axios';

export const HttpClient = axios.create({
  timeout: 90000,
  headers: {
    'Cache-Control': 'no-store',
    responseType: 'application/json',
  },
  baseURL: BASE_URL,
});

export const getData = async (url: string, config = {}) =>
  await HttpClient.get<any>(url, { ...config }).then((response) => response);

export const postData = async (url: string, data = {}) =>
  await HttpClient.post<any>(url, { ...data }).then((response) => response);

export const patchData = async (url: string, data = {}) =>
  await HttpClient.patch<any>(url, { ...data }).then((response) => response);

export const deleteData = async (url: string, data = {}) =>
  await HttpClient.delete<any>(url, { ...data }).then((response) => response);

export const putData = async (url: string, data = {}) =>
  await HttpClient.put<any>(url, { ...data }).then((response) => response);
