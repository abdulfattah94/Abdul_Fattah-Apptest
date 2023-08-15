import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

/**
    prefix penamaan pake nama module contoh => NamaModulesNamaScreen = AuthLoad
*/

enum ROUTERS {
  // start region auth module
  AuthLoad = 'AuthLoad',
  // end region auth module
}

export type RootStactNavigationTypes = {
  // start region auth type
  [ROUTERS.AuthLoad]: undefined;
  // end region auth type
};

const Stack = createNativeStackNavigator<RootStactNavigationTypes>();
const { Navigator } = Stack;
const { Screen } = Stack;

export { Stack, NavigationContainer, Navigator, Screen, ROUTERS };
