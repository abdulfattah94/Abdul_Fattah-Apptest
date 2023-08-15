import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

enum ROUTERS {
  AuthLoad = 'AuthLoad',
  ContactMain = 'ContactMain',
}

export type RootStactNavigationTypes = {
  [ROUTERS.AuthLoad]: undefined;
  [ROUTERS.ContactMain]: undefined;
};

const Stack = createNativeStackNavigator<RootStactNavigationTypes>();
const { Navigator } = Stack;
const { Screen } = Stack;

export { Stack, NavigationContainer, Navigator, Screen, ROUTERS };
