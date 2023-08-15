import React, { useMemo } from 'react';
import { Sizes } from '@configs/index';
import Text from '@components-generics/text';
import textProps from '@components-generics/text/types';

export default function TextXL(props: textProps) {
  const { children } = props;
  const RenderMain = useMemo(() => {
    return (
      <Text
        line={Sizes.text.xl.lineHeight}
        size={Sizes.text.xl.size}
        allowFontScaling={false}
        {...props}
      >
        {children}
      </Text>
    );
  }, [children, props]);

  return RenderMain;
}
