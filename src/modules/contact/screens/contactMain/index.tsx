import React, { useMemo } from 'react';
import { IProps } from '@modules/contact/types';
import { BaseContainer, PadderContainer } from '@components-containers/index';
import { TextM } from '@components-derivatives/text';

export default function ContactMain(props: IProps) {
  const { navigation } = props;

  const RenderMain = useMemo(() => {
    return (
      <BaseContainer title="Contact">
        <PadderContainer>
          <TextM>Contact</TextM>
        </PadderContainer>
      </BaseContainer>
    );
  }, []);

  return RenderMain;
}
