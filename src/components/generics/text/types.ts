import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface fontFamily {
  regular: string;
  medium: string;
  heavy: string;
  bold: string;
  italicBold: string;
  italic: string;
}

interface TextProps {
  color?: string | undefined;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  style?: StyleProp<ViewStyle> | any;
  size?: number | undefined;
  textStyle?: 'regular' | 'medium' | 'bold' | 'black';
  line?: number | undefined;
  fontStyle?: 'normal' | 'italic' | undefined;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
    | undefined;
  letterSpacing?: number | undefined;
  fontSize?: number | undefined;
  lineHeight?: number | undefined;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  fontFamily?: keyof fontFamily;
  children?: React.ReactNode | any;
  animated?: any;
  allowFontScaling?: boolean | undefined;
  bold?: boolean | false;
  backgroundColor?: string | undefined;
  light?: boolean;
  onPress?: () => void;
  ellipsizeMode?: string;
  numberOfLines?: number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  testID?: string | undefined;
  fontWeight?: string;
}

export default TextProps;
