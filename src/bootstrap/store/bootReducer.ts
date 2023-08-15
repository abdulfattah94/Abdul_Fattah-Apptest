import { createSlice } from '@reduxjs/toolkit';
import { IProps } from './types';

const initialState: IProps = {
  firstInstall: true,
  params: {},
  currentScreen: 'Login',
  prevScreen: '',
  ua: {
    os: '',
    osVer: '',
    model: '',
    appName: '',
    appVersion: '',
    brand: '',
    appBundle: '',
    freeStorage: '',
    ram: '',
    isTablet: '',
    deviceUniqueId: '',
    deviceId: '',
    deviceModel: '',
    isEmulator: '',
    abis: '',
    deviceIDGenerator: '',
  },
  appState: 'active',
  type: '',
  appError: {
    message: '',
    status: 200,
    data: {},
  },
  errorStatus: {
    internalServerError: false,
  },
};

const appSlice = createSlice({
  name: 'APP',
  initialState,
  reducers: {
    appNavigation: (state, { payload }) => ({
      ...state,
      currentScreen: payload.currentPage,
      params: payload.params,
    }),
    setUserAgent: (state, { payload }) => ({
      ...state,
      ua: payload,
    }),
    setAppstate: (state, { payload }) => {
      state.appState = payload;
    },
    setActivity: (state, { payload }) => {
      state.currentScreen = payload.currentRouteName;
      state.prevScreen = payload.previousRouteName;
    },
    setBootDeviceId: (state, actions) => ({
      ...state,
      ua: {
        ...state.ua,
        deviceId: actions.payload,
      },
    }),
    setErrorResponse: (state, payload) => ({
      ...state,
      appError: {
        message: payload.payload.message,
        status: payload.payload.status,
        data: payload.payload.data,
      },
    }),
    setInternalServerError: (state, actions) => ({
      ...state,
      errorStatus: {
        ...state.errorStatus,
        internalServerError: actions.payload,
      },
      action: actions.type,
    }),
  },
});

export const { name, actions, reducer } = appSlice;
