import { StyleProp, ViewStyle } from 'react-native';

interface InputStringTypes {
  value: string;
  onChangeText: (val: string) => void | any;
  placeholder?: string;
  label?: string;
  editable?: boolean | false;
  error?: string;
  hint?: string;
  leftIcon?: any;
  leftContent?: any;
  rightIcon?: any;
  rightIconColor?: string;
  onRightIconPress?: () => void;
  textInputStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  borderColor?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: 'phone-pad' | 'numeric' | 'email-address' | 'url';
  pointerEvents?: 'auto' | 'none' | 'box-none';
  isRequired?: boolean | false;
  isCaseSensitive?: boolean | false;
  testID?: string | undefined;
}

export default InputStringTypes;
