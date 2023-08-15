import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

export const storage = new MMKV({
  id: 'CRUD_CONTACT_APP_DEV$123',
  encryptionKey: 'CRUD_CONTACT_APP',
});

export const reduxStorage: Storage = {
  setItem: (key: any | undefined, value: any | undefined) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: any | undefined) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: any | undefined) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export const PERSIST = {
  active: true,
  reducerVersion: '1.0',
  bootConfig: {
    key: 'boot',
    storage: reduxStorage,
  },
  generalConfig: {
    key: 'session',
    storage: reduxStorage,
  },
};
