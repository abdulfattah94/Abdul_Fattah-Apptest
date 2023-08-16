/* eslint-disable no-return-await */
import { BASE_URL } from '@configs/constants';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { store } from '@configs/store';
import { actions as bootActions } from '@bootstrap/store/bootReducer';

export const HttpClient = axios.create({
  timeout: 90000,
  headers: {
    'Cache-Control': 'no-store',
    responseType: 'application/json',
  },
  baseURL: BASE_URL,
});

type IErrorParse = {
  status: number;
  message: string;
  data: any;
};

const onRequest = (config: any): any => config;

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  const res = JSON.stringify(error);

  const errorParseOriginal = JSON.parse(res);
  const errMessage = JSON.stringify((error as AxiosError)?.response?.data);
  const errorParse: IErrorParse = JSON.parse(errMessage);

  store.dispatch(
    bootActions.setErrorResponse({
      message: errorParse?.message ?? '',
      status: errorParseOriginal?.status,
      data: errorParse?.data ?? {},
    }),
  );

  // reset message error
  setTimeout(() => {
    store.dispatch(
      bootActions.setErrorResponse({
        message: '',
        status: '',
        data: {},
      }),
    );
  }, 3 * 1000);

  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance,
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

setupInterceptorsTo(HttpClient);

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
