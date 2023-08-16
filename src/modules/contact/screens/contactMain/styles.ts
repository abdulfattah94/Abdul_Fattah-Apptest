import { Colors } from '@configs/index';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  mb16: {
    marginBottom: 16,
  },
  mb32: {
    marginBottom: 32,
  },
  pb40: {
    paddingBottom: 40,
  },
  contactItemContainer: {
    backgroundColor: Colors.white005,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCircle: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: Colors.white02,
    marginRight: 8,
  },
});

export default Styles;
