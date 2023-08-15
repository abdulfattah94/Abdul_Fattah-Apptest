import React, { useMemo } from 'react';
import { Sizes } from '@configs/index';
import Text from '@components-generics/text';
import textProps from '@components-generics/text/types';

export default function TextXXXL(props: textProps) {
  const { children } = props;
  const RenderMain = useMemo(() => {
    return (
      <Text
        line={Sizes.text.xxxl.lineHeight}
        size={Sizes.text.xxxl.size}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
}
