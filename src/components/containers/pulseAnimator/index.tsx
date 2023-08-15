import React, { useMemo } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { MotiView, useDynamicAnimation } from 'moti';
import { useAnimatedGestureHandler } from 'react-native-reanimated';
import { StyleProp, ViewStyle } from 'react-native';

interface IProps {
  style?: StyleProp<ViewStyle>;
  children: any;
  scaleTo?: number | 1.05;
}

const MainComponent = (props: IProps) => {
  const { style, children, scaleTo = 1.05 } = props;

  const animation = useDynamicAnimation(() => ({
    scale: 1,
  }));

  const gestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      animation.animateTo({ scale: scaleTo });
    },
    onFinish: () => {
      animation.animateTo({ scale: 1 });
    },
  });

  const RenderBody = useMemo(() => {
    return (
      <TapGestureHandler onGestureEvent={gestureEvent}>
        <MotiView style={style} state={animation}>
          {children}
        </MotiView>
      </TapGestureHandler>
    );
  }, [animation, children, gestureEvent, style]);

  return RenderBody;
};

export default MainComponent;
