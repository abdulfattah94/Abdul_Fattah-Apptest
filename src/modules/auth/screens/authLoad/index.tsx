import React, { useMemo } from 'react';
import LottieView from 'lottie-react-native';
import { BaseContainer } from '@components-containers/index';
import { Sizes } from '@configs/index';
import { IProps } from '@modules/auth/types';
import { ROUTERS } from '@routes/index';
import { useMount } from '@utils/commons';

export default function AuthLoad(props: IProps) {
  const { navigation, children } = props;

  useMount(() => {
    setTimeout(
      () => navigation && navigation.replace(ROUTERS.ContactMain),
      3000,
    );
  });

  const RendRenderBackgroundContent = useMemo(() => {
    return (
      <LottieView
        // eslint-disable-next-line global-require
        source={require('./splashscreen.json')}
        autoPlay
        loop
        style={{ width: Sizes.screen.width, height: Sizes.screen.height }}
      />
    );
  }, []);

  const RenderMain = useMemo(() => {
    return (
      <BaseContainer backgroundContent={RendRenderBackgroundContent}>
        {children}
      </BaseContainer>
    );
  }, [RendRenderBackgroundContent, children]);

  return RenderMain;
}
