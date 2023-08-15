import { StyleProp, ViewStyle } from 'react-native';

interface ImageProps {
  uri: string | undefined;
  style?: StyleProp<ViewStyle>;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
  defaultSource?: number;
}

export default ImageProps;
