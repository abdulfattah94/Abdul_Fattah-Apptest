import * as React from 'react';
import { UIManager, Platform } from 'react-native';
import { Screen, Navigator, ROUTERS } from '@routes/index';

// start region screen
import * as AUTHSCREENS from '@modules/auth/screens/index';
// end region screen

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
      {/* start region screen AUTH */}
      <Screen name={ROUTERS.AuthLoad} component={AUTHSCREENS.AuthLoad} />
      {/* end region screen AUth */}
    </Navigator>
  );
}

export default React.memo(RootNavigator);
