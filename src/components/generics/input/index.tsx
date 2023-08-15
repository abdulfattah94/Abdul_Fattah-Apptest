import React, { useCallback, useMemo, useRef } from 'react';
import { TextInput as RTextInput, TextStyle } from 'react-native';
import Styles from './styles';
import TextInputProps from './types';
import { useTheme } from '@react-navigation/native';

export default function InputGeneric(props: TextInputProps) {
  const { autoCapitalize, keyboardType, style, testID } = props;

  const { colors } = useTheme();
  const inputRef = useRef(null);

  const getComposedStyle = useCallback(() => {
    const { color, line, align, bold, light, size, medium } = props;

    const composedStyle: any = [Styles.main];

    const newStyle: TextStyle = {};

    if (color) {
      newStyle.color = color;
    }

    if (size) {
      newStyle.fontSize = size;
    }

    if (line) {
      newStyle.lineHeight = line;
    }

    if (align) {
      newStyle.textAlign = align;
    }

    if (bold) {
      newStyle.fontWeight = 'bold';
    }

    if (light) {
      newStyle.fontWeight = '300';
    }

    if (medium) {
      newStyle.fontWeight = '500';
    }

    composedStyle.push(newStyle);
    composedStyle.push(style);

    return composedStyle;
  }, [props, style]);

  const RenderMain = useMemo(() => {
    return (
      <RTextInput
        placeholderTextColor={colors.placeholderTextColor}
        autoCorrect={false}
        underlineColorAndroid="transparent"
        style={getComposedStyle()}
        autoCapitalize={
          autoCapitalize ||
          (keyboardType !== 'email-address' ? autoCapitalize : 'none')
        }
        ref={inputRef}
        testID={testID}
      />
    );
  }, [
    autoCapitalize,
    colors.placeholderTextColor,
    getComposedStyle,
    keyboardType,
    testID,
  ]);

  return RenderMain;
}
