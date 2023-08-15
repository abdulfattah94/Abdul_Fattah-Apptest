import { StyleSheet } from 'react-native';

import { Colors, Sizes } from '@configs/index';

const Style = StyleSheet.create({
  main: {
    flex: -1,
    fontSize: 16,
    fontFamily: Sizes.fontFamily.regular,
    lineHeight: 0,
    letterSpacing: 0,
    color: Colors.text,
    padding: 0,
  },
});

export default Style;
