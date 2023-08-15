import React, { useMemo } from 'react';
import { Sizes } from '@configs/index';
import Text from '@components-generics/text';
import textProps from '@components-generics/text/types';

export default function TextXXL(props: textProps) {
  const { children } = props;
  const RenderMain = useMemo(() => {
    return (
      <Text
        line={Sizes.text.xxl.lineHeight}
        size={Sizes.text.xxl.size}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
}
