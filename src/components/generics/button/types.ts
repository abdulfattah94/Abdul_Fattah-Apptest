import { ViewStyle, StyleProp } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  children?: any;
  color?: string | undefined;
  inverse?: boolean | undefined;
  borderColor?: string | null | undefined;
  height?: number | undefined;
  width?: number | string | undefined;
  paddingHorizontal?: number | undefined;
  backgroundColor?: string | null | undefined;
  borderRadius?: number | undefined;
  disabled?: boolean | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  radius?: number;
}

export default ButtonProps;
