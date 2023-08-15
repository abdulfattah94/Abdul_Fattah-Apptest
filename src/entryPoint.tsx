import React, { useCallback, useMemo } from 'react';
import 'react-native-gesture-handler';
import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import { enableScreens } from 'react-native-screens';
import { ReduxNetworkProvider } from 'react-native-offline';
import DeviceInfo from 'react-native-device-info';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@navigation/index';
import { persistor, store } from '@configs/store';
import { actions as actionsBootstrap } from '@bootstrap/store/bootReducer';
import Bootstrap from '@bootstrap/boot';
import { md5DeviceID, setupLayoutAnimation } from '@utils/commons';
import {
  ErrorBoundaryContainer,
  SecureGateContainer,
} from '@components-containers/index';
import { useOnlineManager } from '@hook/useOnlineManager';
import { useAppState } from '@hook/useAppState';
import { AppStateStatus, Platform } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { delay } from 'lodash';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
});

enableScreens();

setupLayoutAnimation();

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export default function App() {
  useOnlineManager();

  useAppState(onAppStateChange);

  const loadDeviceInfo = async () => {
    const userAgent = {
      os: await DeviceInfo.getSystemName(),
      osVer: await DeviceInfo.getSystemVersion(),
      model: await DeviceInfo.getModel(),
      appName: await DeviceInfo.getApplicationName(),
      appVersion: await DeviceInfo.getVersion(),
      brand: await DeviceInfo.getBrand(),
      appBundle: await DeviceInfo.getBundleId(),
      freeStorage: await DeviceInfo.getFreeDiskStorage(),
      ram: await DeviceInfo.getTotalMemory(),
      isTablet: await DeviceInfo.isTablet(),
      deviceUniqueId: md5DeviceID(await DeviceInfo.getUniqueId()),
      deviceIDGenerator: md5DeviceID(
        Platform.OS + (await DeviceInfo.getBundleId()),
      ),
    };

    return Promise.all([
      DeviceInfo.getDevice(),
      DeviceInfo.isEmulator(),
      DeviceInfo.supportedAbis(),
    ])
      .then((values) => {
        return {
          ...userAgent,
          deviceModel: values[0],
          isEmulator: values[1],
          abis: values[2],
        };
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const onBeforeLift = useCallback(
    (stores: any) => async () => {
      const userAgent = await loadDeviceInfo();
      stores.dispatch(actionsBootstrap.setUserAgent(userAgent));

      if (Platform.OS === 'ios') {
        delay(() => {
          LottieSplashScreen.hide();
        }, 800);
      } else {
        delay(() => {
          LottieSplashScreen.hide();
        }, 500);
      }
    },
    [],
  );

  const RenderMain = useMemo(() => {
    return (
      <Provider store={store}>
        <ErrorBoundaryContainer>
          <ReduxNetworkProvider>
            <PersistGate
              loading={null}
              persistor={persistor}
              onBeforeLift={onBeforeLift(store)}
            >
              <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                  <SecureGateContainer>
                    <Bootstrap>
                      <Navigation />
                    </Bootstrap>
                  </SecureGateContainer>
                </QueryClientProvider>
              </SafeAreaProvider>
            </PersistGate>
          </ReduxNetworkProvider>
        </ErrorBoundaryContainer>
      </Provider>
    );
  }, [onBeforeLift]);

  return RenderMain;
}
