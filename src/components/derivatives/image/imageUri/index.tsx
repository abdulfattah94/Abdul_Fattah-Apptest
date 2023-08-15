import React, { useMemo } from 'react';
import ImageComponent from '@components-generics/image';
import ImageProps from './types';

export default function ImageUri(props: ImageProps) {
  const { uri, defaultSource } = props;
  const RenderMain = useMemo(() => {
    return (
      <ImageComponent
        defaultSource={defaultSource}
        source={{ uri }}
        {...props}
      />
    );
  }, [props, uri, defaultSource]);
  return RenderMain;
}
