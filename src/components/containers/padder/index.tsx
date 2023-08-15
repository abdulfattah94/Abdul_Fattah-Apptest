/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Sizes } from '@configs/index';

export enum Density {
  Comfortable = 1,
  Compact,
  Default,
}

interface IProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  testID?: string;
  density?: Density;
}

export default function Padder(props: IProps) {
  const { style, children, testID, density } = props;
  const RenderMain = useMemo(() => {
    return (
      <View
        style={[
          {
            paddingHorizontal: density
              ? density === Density.Comfortable
                ? 24
                : 20
              : Sizes.screen.padding,
          },
          style,
        ]}
        testID={testID}
      >
        {children}
      </View>
    );
  }, [children, density, style, testID]);

  return RenderMain;
}
