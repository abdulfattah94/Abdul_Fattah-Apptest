import React, { useCallback, useMemo } from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import IconConfig from '@configs/custom-icon.json';
import Styles from './styles';
import { StyleProp, ViewStyle } from 'react-native';

const CustomIcon = createIconSetFromFontello(IconConfig);

interface IProps {
  color: string;
  size?: number;
  children?: any;
  name: string;
  style?: StyleProp<ViewStyle> | undefined | any;
  onPress?: () => void;
}

export default function Icon(props: IProps) {
  const { color, size, name, style, onPress } = props;

  const getComposedStyle = useCallback(() => {
    const composedStyle = [Styles.main];
    const newStyle: any = {};

    if (color) {
      newStyle.color = color;
    }

    if (size) {
      newStyle.fontSize = size;
    }
    composedStyle.push(style);
    composedStyle.push(newStyle);

    return composedStyle;
  }, [color, size, style]);

  const RenderMain = useMemo(() => {
    return (
      <CustomIcon name={name} style={getComposedStyle()} onPress={onPress} />
    );
  }, [name, getComposedStyle, onPress]);

  return RenderMain;
}
