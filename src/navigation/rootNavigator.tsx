import * as React from 'react';
import { UIManager, Platform } from 'react-native';
import { Screen, Navigator, ROUTERS } from '@routes/index';

import * as AUTHSCREENS from '@modules/auth/screens/index';
import * as CONTACTSCREENS from '@modules/contact/screens/index';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 *
 * @returns
 */

function RootNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: Platform.OS !== 'android',
      }}
      initialRouteName={ROUTERS.AuthLoad}
    >
      <Screen name={ROUTERS.AuthLoad} component={AUTHSCREENS.AuthLoad} />
      <Screen
        name={ROUTERS.ContactMain}
        component={CONTACTSCREENS.ContactMain}
      />
      <Screen
        name={ROUTERS.ContactForm}
        component={CONTACTSCREENS.ContactForm}
      />
    </Navigator>
  );
}

export default React.memo(RootNavigator);
