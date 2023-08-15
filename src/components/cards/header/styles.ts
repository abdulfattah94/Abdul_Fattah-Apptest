import { Colors, Sizes } from '@configs/index';
import { Platform, StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
  },
  circleContainer: {
    position: 'absolute',
    left: 16,
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: Colors.white02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    position: 'absolute',
    right: 16,
  },
  titleContainer: {
    alignSelf: 'center',
    width: Sizes.screen.width - 130,
    justifyContent: 'center',
  },
  titleContainerWithBack: {
    alignSelf: 'center',
    flex: 1,
    zIndex: 2,
    width: Sizes.screen.width,
  },

  topContainer: {
    position: 'absolute',
    height: Platform.OS === 'ios' ? 50 : 50,
    width: Sizes.screen.width,
  },
  closeButton: {
    width: 44,
    height: 44,
    backgroundColor: Colors.white02,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Style;
