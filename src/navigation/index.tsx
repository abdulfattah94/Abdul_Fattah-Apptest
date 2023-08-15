import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';
import { UIManager, Platform, LayoutAnimation } from 'react-native';
import { actions as BootActions } from '@bootstrap/store/bootReducer';
import { store } from '@configs/store';
import RootNavigator from '@navigation/rootNavigator';
import { Themes } from '@configs/index';
import { enableExperimental } from '@utils/commons';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}

export default function Navigation() {
  const routeNameRef = useRef();

  React.useEffect((): any => {
    // eslint-disable-next-line no-return-assign
    return () => (isReadyRef.current = false);
  }, []);

  useEffect(() => {
    enableExperimental();
  }, []);

  return (
    <NavigationContainer
      theme={Themes}
      ref={navigationRef}
      onStateChange={async () => {
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        const previousRouteName = routeNameRef.current;
        const objRoute = {
          currentRouteName,
          previousRouteName,
        };

        store.dispatch(BootActions.setActivity(objRoute));
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
