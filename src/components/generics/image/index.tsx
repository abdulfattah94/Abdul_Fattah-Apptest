import React, { useMemo } from 'react';
import FastImage from 'react-native-fast-image';
import ImageProps from './types';

export default function ImageGeneric(props: ImageProps) {
  const { source, style, resizeMode, defaultSource } = props;

  const RenderMain = useMemo(() => {
    return (
      <FastImage
        {...props}
        style={style}
        source={source}
        resizeMode={resizeMode}
        defaultSource={defaultSource}
      />
    );
  }, [props, resizeMode, source, style, defaultSource]);

  return RenderMain;
}
