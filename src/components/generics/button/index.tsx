import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity as RButton, View } from 'react-native';
import Styles from './styles';
import ButtonProps from './types';
import { useTheme } from '@react-navigation/native';
import HapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true /* iOS Only */,
  ignoreAndroidSystemSettings: false /* Android Only */,
};

export default function ButtonGeneric(props: ButtonProps) {
  const { children, onPress, disabled } = props;

  const { colors } = useTheme();

  const getComposedStyle = useCallback(() => {
    const composedStyle = [Styles.main];
    const {
      color,
      inverse,
      borderColor,
      height,
      width,
      paddingHorizontal,
      backgroundColor,
      borderRadius,
    } = props;
    const newStyle: any = {};

    if (color) {
      newStyle.backgroundColor = color;
      newStyle.borderColor = color;
    }

    if (inverse) {
      newStyle.backgroundColor = 'transparent';
      newStyle.borderColor = color || colors.button;
    }

    if (borderColor) newStyle.borderColor = borderColor || colors.border;

    if (height) newStyle.height = height;

    if (width) newStyle.minWidth = width;

    if (paddingHorizontal) newStyle.paddingHorizontal = paddingHorizontal;

    if (backgroundColor) newStyle.backgroundColor = backgroundColor;

    if (disabled) newStyle.opacity = 0.5;

    if (borderRadius !== undefined && borderRadius !== null) {
      newStyle.borderRadius = borderRadius;
    }

    composedStyle.push(newStyle);

    return composedStyle;
  }, [colors.border, colors.button, disabled, props]);

  const RenderMain = useMemo(() => {
    if (disabled) {
      return <View style={getComposedStyle()}>{children}</View>;
    }
    return (
      <RButton
        {...props}
        style={getComposedStyle()}
        onPress={
          onPress
            ? () => {
                HapticFeedback.trigger('impactLight', options);
                onPress();
              }
            : () => {}
        }
      >
        {children}
      </RButton>
    );
  }, [children, disabled, getComposedStyle, onPress, props]);

  return RenderMain;
}
