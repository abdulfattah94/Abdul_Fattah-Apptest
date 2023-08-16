import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { IContact } from '@modules/contact/types';

enum ROUTERS {
  AuthLoad = 'AuthLoad',
  ContactMain = 'ContactMain',
  ContactForm = 'ContactForm',
}

export type RootStactNavigationTypes = {
  [ROUTERS.AuthLoad]: undefined;
  [ROUTERS.ContactMain]: undefined;
  [ROUTERS.ContactForm]:
    | undefined
    | {
        data: IContact;
      };
};

const Stack = createNativeStackNavigator<RootStactNavigationTypes>();
const { Navigator } = Stack;
const { Screen } = Stack;

export { Stack, NavigationContainer, Navigator, Screen, ROUTERS };
