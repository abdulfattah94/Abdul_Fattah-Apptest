import Reactotron from 'reactotron-react-native';
import { LogBox, NativeModules } from 'react-native';

const reactotron = Reactotron.configure({
  name: 'Abdul_Fattah_Apptest',
}).useReactNative();

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  LogBox.ignoreLogs([
    'Require cycle:',
    'new NativeEventEmitter',
    'SerializableStateInvariantMiddleware',
    'rendered size is not usable',
    'onInstallConversionFailure',
    'ImmutableStateInvariantMiddleware',
    'Non-serializable values were found in the navigation state',
    'VirtualizedLists should never be nested',
    'source.uri',
    'AxiosError',
  ]);
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];

  Reactotron.configure({ host: scriptHostname }).connect();
}

export default reactotron;
