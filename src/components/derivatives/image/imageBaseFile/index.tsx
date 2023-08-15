import React, { useMemo } from 'react';
import ImageComponent from '@components-generics/image';
import ImageProps from './types';

export default function ImageBase64(props: ImageProps) {
  const { data } = props;
  const RenderMain = useMemo(() => {
    return <ImageComponent source={data} {...props} />;
  }, [data, props]);
  return RenderMain;
}
