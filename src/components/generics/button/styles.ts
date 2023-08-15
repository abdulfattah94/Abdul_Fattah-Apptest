import { Colors } from '@configs/index';
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  main: {
    flex: -1,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.button,
    backgroundColor: Colors.button,
  },
});

export default Style;
