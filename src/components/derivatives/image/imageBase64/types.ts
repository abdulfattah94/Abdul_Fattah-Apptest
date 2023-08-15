import { StyleProp, ViewStyle } from 'react-native';

interface ImageProps {
  data: string;
  style?: StyleProp<ViewStyle>;
  resizeMode: 'contain' | 'cover' | 'stretch' | 'center';
}

export default ImageProps;
