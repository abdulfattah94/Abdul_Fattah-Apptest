import React, { useMemo } from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import Icon from '@components-generics/icon';
import { TextS, TextXL } from '@components-derivatives/text';
import Styles from './styles';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from '@utils/statusBarHeight';

type IProps = {
  title?: string;
  onLeftPress?: () => void;
  inverse?: boolean;
  onRightPress?: () => void;
  rightContentRender?: React.ReactNode | any;
  isModal?: boolean;
  noPadding?: boolean;
  backgroundColor?: string | null;
  floating: boolean;
  isHeaderGradient?: boolean | false;
  centerContentRender?: React.ReactNode | any;
  isCircleBack?: boolean;
  subtitle?: string;
};

export default function Header(props: IProps) {
  const {
    title,
    onLeftPress,
    inverse,
    onRightPress,
    rightContentRender,
    isHeaderGradient,
    centerContentRender,
    isCircleBack,
    subtitle,
  } = props;

  const { colors } = useTheme();

  const _renderLeftButton = useMemo(() => {
    if (!onLeftPress) {
      return null;
    }
    return (
      <TouchableOpacity
        style={isCircleBack ? Styles.circleContainer : Styles.container}
        onPress={onLeftPress ? () => onLeftPress() : () => {}}
      >
        <Icon
          name="ic-chevron-left"
          color={inverse ? colors.text : colors.background}
          size={24}
        />
      </TouchableOpacity>
    );
  }, [colors.background, colors.text, inverse, isCircleBack, onLeftPress]);

  const _renderRightButton = useMemo(() => {
    if (!onRightPress && !rightContentRender) {
      return null;
    }

    if (rightContentRender) {
      return rightContentRender;
    }

    return (
      <TouchableOpacity
        style={[Styles.rightContainer, { alignItems: 'flex-end' }]}
        onPress={onRightPress ? () => onRightPress() : () => {}}
      >
        <View style={Styles.closeButton}>
          <Icon
            name="ic-close"
            color={inverse ? colors.text : colors.background}
            size={20}
          />
        </View>
      </TouchableOpacity>
    );
  }, [
    colors.background,
    colors.text,
    inverse,
    onRightPress,
    rightContentRender,
  ]);

  const RenderMain = useMemo(() => {
    let top = 90;
    if (Platform.OS === 'ios') {
      top = getStatusBarHeight(true) + 55;
    }

    return (
      <>
        <View
          style={{
            minHeight: 27,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: Platform.OS === 'ios' ? 22 : 10,
          }}
        >
          {centerContentRender || (
            <View style={Styles.titleContainer}>
              <TextXL
                color={inverse ? colors.text : colors.textGray}
                ellipsizeMode="tail"
                numberOfLines={2}
                textStyle="bold"
                align="center"
              >
                {title}
              </TextXL>
              {subtitle && (
                <TextS color={colors.white05} align="center">
                  {subtitle}
                </TextS>
              )}
            </View>
          )}
          {_renderLeftButton}
          {_renderRightButton}
        </View>
        {isHeaderGradient && (
          <LinearGradient
            style={[Styles.topContainer, { top }]}
            start={{ x: 0, y: 0.1 }}
            end={{ x: 0, y: 1 }}
            colors={[colors.background, 'rgba(0, 0, 0,0.01)']}
          />
        )}
      </>
    );
  }, [
    _renderLeftButton,
    centerContentRender,
    inverse,
    colors,
    title,
    _renderRightButton,
    isHeaderGradient,
    subtitle,
  ]);

  return RenderMain;
}
