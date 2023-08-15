import { ViewStyle, StyleProp } from 'react-native';

interface buttonProps {
  onPress?: any | null;
  children?: any;
  borderColor?: string | null;
  height?: number | undefined;
  width?: number | string | undefined;
  buttonLoading?: boolean | false;
  padding?: number | undefined;
  inverse?: boolean | false;
  disabled?: boolean | false;
  backgroundColor: string | null;
  buttonSize?: number | undefined;
  borderRadius?: number | undefined;
  localTextStyle?: any;
  size?: number | undefined;
  line?: number | undefined;
  localColor?: boolean | false;
  buttonStyle?: any;
  iconSize?: number | undefined;
  nextIcon?: boolean | false;
  iconColor?: string;
  iconStyle?: any;
  textColor?: string | undefined;
  addIcon?: boolean | false;
  style?: StyleProp<ViewStyle> | undefined;
  color?: string;
  radius?: number;
  leftIcon?: any | null;
  loadingColor?: string | undefined;
  rightIcon?: any | null;
  boldText?: boolean | false;
  colorText?: string;
}

export default buttonProps;
