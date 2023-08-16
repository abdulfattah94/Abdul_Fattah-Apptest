import { TextL, TextXL } from '@components-derivatives/text';
import React, { useState, useRef } from 'react';
import {
  View,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles';
import { useTheme } from '@react-navigation/native';
import { ImageUri } from '@components-derivatives/image';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const toggleAnimation = (duration: number) => {
  return {
    duration,
    update: {
      property: LayoutAnimation.Properties.scaleXY,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
};

export default function Contact(props: any) {
  const { data } = props;
  const { colors } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const onToggle = () => {
    setIsOpen((prevState) => !prevState);

    const duration = 300;
    const config = {
      duration,
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation(duration));
  };

  return (
    <>
      <TouchableOpacity onPress={onToggle} style={Styles.heading}>
        <ImageUri
          uri={data.photo}
          resizeMode="cover"
          style={Styles.imgCircle}
        />
        <View style={{ flex: 1 }}>
          <TextXL textStyle="bold">
            {data.firstName} {data.lastName}
          </TextXL>
          <TextL>{data.age} yo</TextL>
        </View>
        <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
          <Icon name="chevron-forward-outline" size={18} />
        </Animated.View>
      </TouchableOpacity>
      <View style={[Styles.list, !isOpen ? Styles.hidden : undefined]}>
        <TouchableOpacity style={Styles.mr8}>
          <Icon name="trash" size={20} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="pencil" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>
    </>
  );
}
