import { StyleProp, ViewStyle, ViewProps } from 'react-native';

interface ImageProps {
  style?: StyleProp<ViewStyle> | ViewProps | any;
  source?: any;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
  defaultSource?: number;
}

export default ImageProps;
