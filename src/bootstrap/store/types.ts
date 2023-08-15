export interface IProps {
  firstInstall: boolean;
  params: object;
  currentScreen: string;
  prevScreen: string;
  ua: {
    os: string;
    osVer: string;
    model: string;
    appName: string;
    appVersion: string;
    brand: string;
    appBundle: string;
    freeStorage: string;
    ram: string;
    isTablet: string;
    deviceUniqueId: string;
    deviceId: string;
    deviceModel: string;
    isEmulator: string;
    abis: string;
    deviceIDGenerator: string;
  };
  appState: 'active';
  type: string;
  appError: {
    message: string;
    status: number;
    data: any;
  };
  errorStatus: {
    internalServerError: boolean;
  };
}
