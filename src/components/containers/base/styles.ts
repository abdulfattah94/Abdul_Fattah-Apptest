import { Platform, StyleSheet } from 'react-native';
import { Colors, Sizes } from '@configs/index';

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingTop: Sizes.screen.padding,
    paddingBottom: 22,
  },
  innerContainerStatic: {
    flex: 1,
    paddingTop: Sizes.screen.padding,
  },

  backgroundContentcontainer: {
    zIndex: -2,
    position: 'absolute',
    width: Sizes.screen.width,
    height: Sizes.screen.height,
  },

  backgroundContentcontent: {
    height: 40,
  },

  keyboardAvoidingContainer: {
    flex: 1,
    zIndex: -1,
  },
  bottomContentContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 104,
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  forceFlexContainer: {
    flex: 1,
  },
  containerAlert: {
    marginTop: Platform.OS === 'ios' ? 44 : 20,
    paddingVertical: 10,
    paddingBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  DefaultcontainerAlert: {
    paddingVertical: 50,
    paddingBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    height: 100,
    paddingHorizontal: 10,
  },
  message: {
    fontSize: Sizes.text.l.size,
    fontFamily: Sizes.fontFamily.regular,
    color: Colors.text,
  },
});

export default Style;
