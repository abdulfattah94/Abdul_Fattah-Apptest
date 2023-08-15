import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createNetworkMiddleware } from 'react-native-offline';
import rootReducers from '@stores/reducers';
import rootSagas from '@stores/sagas';
import * as middleware from '@middleware/index';

export const sagaMiddleware = createSagaMiddleware();

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    middlewares.push(sagaMiddleware);
    middlewares.push(networkMiddleware);
    middlewares.push(middleware.MiddlewarePerfMonitor);
    return middlewares;
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
