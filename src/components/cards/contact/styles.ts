import { Colors } from '@configs/index';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white005,
    borderRadius: 16,
    padding: 16,
  },
  hidden: {
    height: 0,
  },
  list: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 8,
    paddingRight: 16,
  },
  imgCircle: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: Colors.white02,
    marginRight: 8,
  },
  contactItemContainer: {
    // backgroundColor: Colors.white005,
    // borderRadius: 16,
    // padding: 16,
    // justifyContent: 'center',
  },
  mr8: {
    marginRight: 8,
  },
});

export default Styles;
