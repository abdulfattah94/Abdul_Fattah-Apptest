import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import RNRestart from 'react-native-restart';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import bootTypes from './types';

const errorHandler = (e: any, isFatal: boolean | false) => {
  if (isFatal) {
    console.error('error bootstrap', e);
    Alert.alert(
      'Oops, there is an error',
      'We have reported this to our team. Please close the application and reopen it',
      [
        {
          text: 'Open App Again',
          onPress: () => {
            RNRestart.restart();
          },
        },
      ],
    );
  }
};

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler((errorString) => {
  console.log('setNativeExceptionHandler', errorString);
});

export default function Bootstrap(props: bootTypes) {
  const { children } = props;

  const RenderMain = useMemo(() => {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </GestureHandlerRootView>
    );
  }, [children]);

  return RenderMain;
}

Bootstrap.defaultProps = {
  children: null,
};
