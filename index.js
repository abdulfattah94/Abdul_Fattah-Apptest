/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './src/entryPoint';
import { name as appName } from './app.json';
import '@configs/debug';

AppRegistry.registerComponent(appName, () => App);
