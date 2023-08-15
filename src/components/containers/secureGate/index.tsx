import React, { useEffect, useRef, useState } from 'react';
import { AppState, BackHandler, Platform } from 'react-native';
import JailMonkey from 'jail-monkey';
import { ConfirmationModal } from '@components-modals/index';

function SecureGate(props: any) {
  const { children } = props;
  const [showJailBrokenModal, setShowJailBrokenModal] = useState(false);
  const [showJailBrokenMockedModal, setShowJailBrokenMockedModal] =
    useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (appStateVisible === 'active') {
      if (__DEV__) {
        return;
      }

      const checkJail = async () => {
        const isJailBroken = await JailMonkey.isJailBroken();
        setShowJailBrokenModal(isJailBroken);

        if (Platform.OS === 'ios') {
          const isDevelopmentSettingsMode = await JailMonkey.canMockLocation();

          setShowJailBrokenMockedModal(isDevelopmentSettingsMode);
        }
      };

      checkJail();
    }
  }, [appStateVisible]);

  return (
    <>
      {children}
      <ConfirmationModal
        isActive={showJailBrokenModal || showJailBrokenMockedModal}
        onBackPress={() => {}}
        onSubmit={() => BackHandler.exitApp()} // android only
        onCancel={() => {}}
        buttonTitle="I understand"
        title="Unofficial operating system detected"
        desc="We detected an unofficial operating system. Please remove it to be able to use the Fooma application"
      />
    </>
  );
}

export default SecureGate;
