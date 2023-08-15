import React, { useCallback, useMemo } from 'react';
import { Text as RText, TextStyle } from 'react-native';
import Styles from './styles';
import TextProps from './types';
import { useTheme } from '@react-navigation/native';
import { Sizes } from '@configs/index';

export default function TextGeneric(props: TextProps) {
  const { children, style } = props;

  const { colors } = useTheme();

  const getComposedStyle = useCallback(() => {
    const {
      color = colors.text,
      align,
      size,
      textStyle,
      line,
      fontStyle,
      textDecorationLine,
      letterSpacing,
      light,
      bold,
      textTransform,
    } = props;
    const composedStyle: any = [Styles.main];

    const newStyle: TextStyle = {};

    if (size) newStyle.fontSize = size;

    if (color) newStyle.color = color;

    if (line) newStyle.lineHeight = line;

    if (align) newStyle.textAlign = align;

    if (letterSpacing) newStyle.letterSpacing = letterSpacing;

    if (textStyle) newStyle.fontFamily = Sizes.fontFamily[textStyle];

    if (fontStyle) newStyle.fontStyle = fontStyle;

    if (light) newStyle.fontWeight = '400';

    if (bold) newStyle.fontWeight = '700';

    if (textDecorationLine) newStyle.textDecorationLine = textDecorationLine;

    if (textTransform) newStyle.textTransform = textTransform;

    composedStyle.push(newStyle);
    composedStyle.push(style);

    return composedStyle;
  }, [colors.text, props, style]);

  const RenderMain = useMemo(() => {
    return <RText style={getComposedStyle()}>{children}</RText>;
  }, [children, getComposedStyle]);

  return RenderMain;
}
