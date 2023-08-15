import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { Sizes } from '@configs/index';
import Button from '@components-generics/button';
import { TextS } from '@components-derivatives/text';
import ButtonProps from './types';
import { useTheme } from '@react-navigation/native';
import { PulseAnimatorContainer } from '@components-containers/index';
import Icons from '@components-generics/icon';

export default function ButtonFull(props: ButtonProps) {
  const {
    children,
    borderColor,
    onPress,
    height,
    width,
    buttonLoading,
    padding,
    inverse,
    disabled,
    backgroundColor,
    borderRadius,
    localTextStyle,
    size,
    line,
    buttonStyle,
    iconSize,
    nextIcon,
    iconColor,
    textColor,
    leftIcon,
    loadingColor,
  } = props;

  const { colors } = useTheme();

  const RenderMain = useMemo(() => {
    return (
      <PulseAnimatorContainer>
        <Button
          {...props}
          borderColor={disabled ? colors.white005 : borderColor}
          onPress={onPress}
          height={height || 48}
          width={width}
          paddingHorizontal={padding || 16}
          inverse={inverse}
          backgroundColor={disabled ? colors.white005 : backgroundColor}
          borderRadius={borderRadius}
        >
          {leftIcon}
          {buttonLoading ? (
            <ActivityIndicator
              color={loadingColor || colors.text}
              style={buttonStyle}
              size={iconSize || Sizes.text.xl.size}
            />
          ) : (
            <TextS
              textStyle={localTextStyle}
              size={size || 18}
              line={line || 24}
              color={inverse ? colors.textInverse : textColor}
            >
              {children}
            </TextS>
          )}
          {!buttonLoading && nextIcon ? (
            <Icons
              name="ic-chevron-right"
              size={24}
              color={disabled ? colors.white005 : iconColor ?? colors.text}
              style={{ position: 'absolute', right: 12 }}
            />
          ) : null}
        </Button>
      </PulseAnimatorContainer>
    );
  }, [
    backgroundColor,
    borderColor,
    borderRadius,
    buttonLoading,
    buttonStyle,
    children,
    colors.text,
    colors.textInverse,
    colors.white005,
    disabled,
    height,
    iconColor,
    iconSize,
    inverse,
    leftIcon,
    line,
    loadingColor,
    localTextStyle,
    nextIcon,
    onPress,
    padding,
    props,
    size,
    textColor,
    width,
  ]);

  return RenderMain;
}
