import { Colors } from '@configs/index';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  // topContainer: {
  //   height: 56,
  //   flexDirection: 'row',
  //   borderBottomWidth: 1,
  //   marginBottom: 2,
  //   backgroundColor: Colors.white005,
  //   borderTopRightRadius: 8,
  // },
  // InputString: {
  //   marginBottom: 24,
  // },
  hint: {
    marginTop: 8,
  },
  leftcontainer: {
    flex: -1,
    minWidth: 32,
    justifyContent: 'flex-end',
  },
  Iconcontainer: {
    flex: -1,
    height: 32,
    marginTop: 2,
    marginRight: 12,
  },
  // rightcontainer: {
  //   flex: 1,
  // },
  // rightinput: {
  //   flex: -1,
  //   height: 32,
  //   marginTop: 1,
  //   paddingLeft: 12,
  // },
  input: {
    height: 32,
    borderBottomWidth: 1,
    borderColor: Colors.white005,
    flex: 1,
  },
  label: {
    marginBottom: 4,
  },
  inputContainer: {
    marginBottom: 16,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Styles;
