import { StyleProp, ViewStyle } from 'react-native';

interface TextInputProps {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: string;
  color?: string;
  line?: number;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  bold?: boolean;
  light?: boolean;
  medium?: boolean;
  size?: number;
  style?: StyleProp<ViewStyle> | any | undefined;
  placeholder?: string | undefined;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (val: string) => void;
  testID?: string | undefined;
}

export default TextInputProps;
