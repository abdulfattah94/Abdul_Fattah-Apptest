/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import md5 from 'md5';

export const useMount = (func: any | undefined) => useEffect(() => func(), []);

export const enableExperimental = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

export const md5DeviceID = (idDevice: string) => {
  try {
    const md = md5(idDevice);
    const constFirst = md.substring(0, 8);
    const constFirst1 = md.substring(8, 12);
    const constFirst2 = md.substring(12, 16);
    const constFirst3 = md.substring(16, 20);
    const constFirst4 = md.substring(20, 32);
    const md5s = `${constFirst}-${constFirst1}-${constFirst2}-${constFirst3}-${constFirst4}`;
    return md5s;
  } catch (error) {
    console.log(error);
  }
};

export const setupLayoutAnimation = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
};
