import React, { useMemo } from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, Pressable, StyleProp, ViewStyle } from 'react-native';
import { Sizes, Colors } from '@configs/index';

type IProps = {
  isActive: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onShow?: () => void;
  backPress: () => void;
  backDropColor?: string;
  isSLow?: boolean | false;
  noSwipe?: boolean | true;
};

const Center: React.FC<IProps> = (props) => {
  const {
    isActive,
    backPress,
    children,
    style,
    onShow,
    backDropColor,
    isSLow,
    noSwipe,
  } = props;

  const RenderMain = useMemo(() => {
    const slow = 800;
    return (
      <Modal
        isVisible={isActive}
        onSwipeComplete={backPress}
        onShow={onShow}
        // animationIn="zoomInDown"
        // animationOut="zoomOutUp"
        animationInTiming={isSLow ? slow : 600}
        animationOutTiming={isSLow ? slow : 600}
        backdropTransitionInTiming={isSLow ? slow : 600}
        backdropTransitionOutTiming={isSLow ? slow : 600}
        swipeDirection={noSwipe ? undefined : ['down']}
        backdropColor={backDropColor}
      >
        <Pressable onPress={backPress} style={[Styles.fullModal]}>
          <Pressable style={[Styles.contentModal, style]}>{children}</Pressable>
        </Pressable>
      </Modal>
    );
  }, [
    backDropColor,
    backPress,
    children,
    isActive,
    isSLow,
    noSwipe,
    onShow,
    style,
  ]);

  return RenderMain;
};

const Styles = StyleSheet.create({
  contentModal: {
    backgroundColor: Colors.white,
    width: Sizes.screen.width - 88,
  },
  fullModal: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
  },
});

export default Center;
