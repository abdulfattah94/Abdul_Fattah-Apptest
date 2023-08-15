import { Sizes } from '@configs/index';
import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderCard } from '@components-cards/index';
import FlashMessage from 'react-native-flash-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Styles from './styles';
import { IFlashMessage, IPropsBase, IPropsFlashShowMessage } from './types';
import { useTheme } from '@react-navigation/native';
import useKeyboard from '@hook/useKeyboard';

const BaseContainer: React.FC<IPropsBase> = forwardRef((props, ref) => {
  const { colors, dark } = useTheme();

  const {
    contentContainerStyle,
    hasFooter,
    bottomContent,
    floatingContent,
    inverse,
    topColor,
    backgroundContent,
    isStatic,
    fullScreen,
    children,
    noBounce,
    onScrollBeginDrag,
    onScrollEndDrag,
    onScroll,
    onScrollAnimate,
    persistScrollTitle,
    persistScrollOffset,
    isModal,
    floatingKeyboard,
    title,
    floatingHeader = false,
    onBackPress,
    onClosePress,
    rightHeaderRender,
    headerBackgroundColor,
    backgroundColor,
    refreshControl,
    renderTopContent,
    isHeaderGradient,
    isKeyboardAwareScrollView,
    statusBarBackgroundColor,
    centerHeaderRender,
    flashCustomComponent,
    isCircleBack,
    offsetY,
    isScrollToOffsetY,
    subtitle,
  } = props;

  const scrollViewRef = useRef<ScrollView>(null);
  const flashMessageRef = useRef<IPropsFlashShowMessage>();
  const [showFixedTitle, setShowFixedTitle] = useState(false);
  const { keyboardVisible } = useKeyboard();

  useEffect(() => {
    if (isScrollToOffsetY && offsetY) {
      scrollViewRef?.current?.scrollTo({
        x: 0,
        y: offsetY,
        animated: true,
      });
    }
  }, [isScrollToOffsetY, offsetY]);

  useImperativeHandle(ref, () => ({
    /**
     * untuk show flash message
     *
     * @param params
     */
    showMessage(params: IFlashMessage) {
      flashMessageRef?.current?.showMessage({
        message: params.message,
        description: params.description,
        type: params.type,
        position: params.position,
        backgroundColor: params.backgroundColor,
        color: params.color,
        hideStatusBar: params.hideStatusBar,
        icon: params.icon,
        onPress: params.onPress,
        floating: params.floating,
        duration: params.duration ?? 3000,
      });
    },
    scrollToIndex(position: number) {
      if (scrollViewRef) {
        scrollViewRef?.current?.scrollTo({ x: 0, y: position, animated: true });
      }
    },
  }));

  const captureFlashMessageRef = useCallback((_ref: any) => {
    if (_ref !== null) {
      flashMessageRef.current = _ref;
    }
  }, []);

  const onScrollEnd = useCallback(() => {
    if (onScrollEndDrag) {
      onScrollEndDrag();
    }

    Keyboard.dismiss();
  }, [onScrollEndDrag]);

  const onContentScrolled = useCallback(
    (event: any) => {
      if (onScrollAnimate !== undefined) {
        onScrollAnimate(event);
      }
      const yOffset = event.nativeEvent.contentOffset.y;

      if (persistScrollTitle) {
        const persistScrollOffsets = persistScrollOffset || 45;

        if (yOffset >= persistScrollOffsets && !showFixedTitle) {
          setShowFixedTitle(true);
        }

        if (yOffset < persistScrollOffsets && showFixedTitle) {
          setShowFixedTitle(false);
        }
      }

      if (!onScroll) {
        return null;
      }

      onScroll(yOffset);
    },
    [
      onScroll,
      onScrollAnimate,
      persistScrollOffset,
      persistScrollTitle,
      showFixedTitle,
    ],
  );

  const renderKeyboardMargin = useCallback(() => {
    if (!isModal && keyboardVisible && !floatingKeyboard) {
      return <View style={{ flex: -1, height: 0 }} />;
    }
    return <View style={{ flex: -1, height: 0 }} />;
  }, [floatingKeyboard, isModal, keyboardVisible]);

  const _renderHeader = useCallback(
    (_isFloatingHeader: boolean) => {
      if (
        (!onBackPress && !onClosePress && !title && !persistScrollTitle) ||
        (!_isFloatingHeader && floatingHeader) ||
        (_isFloatingHeader && !floatingHeader) ||
        (_isFloatingHeader &&
          !onBackPress &&
          !onClosePress &&
          !persistScrollTitle)
      ) {
        return null;
      }

      return (
        <HeaderCard
          onLeftPress={onBackPress}
          isHeaderGradient={isHeaderGradient}
          onRightPress={onClosePress}
          inverse={dark}
          title={
            persistScrollTitle && showFixedTitle ? persistScrollTitle : title
          }
          subtitle={subtitle}
          floating={_isFloatingHeader}
          rightContentRender={rightHeaderRender}
          centerContentRender={centerHeaderRender}
          backgroundColor={
            persistScrollTitle && showFixedTitle && headerBackgroundColor
              ? headerBackgroundColor
              : null
          }
          isModal={isModal}
          isCircleBack={isCircleBack}
        />
      );
    },
    [
      centerHeaderRender,
      dark,
      floatingHeader,
      headerBackgroundColor,
      isCircleBack,
      isHeaderGradient,
      isModal,
      onBackPress,
      onClosePress,
      persistScrollTitle,
      rightHeaderRender,
      showFixedTitle,
      title,
      subtitle,
    ],
  );

  const _renderBottomContent = useMemo(() => {
    if (!bottomContent) {
      return null;
    }
    return (
      <View
        style={{
          marginBottom: keyboardVisible && !Sizes.isAndroid ? 16 : 0,
        }}
      >
        {bottomContent}
      </View>
    );
  }, [bottomContent, keyboardVisible]);

  const _renderFloatingContent = useMemo(() => {
    if (!floatingContent) {
      return null;
    }
    return (
      <View
        style={{
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? -21 : 0,
          marginBottom: keyboardVisible && !Sizes.isAndroid ? 16 : 0,
        }}
      >
        {floatingContent}
      </View>
    );
  }, [floatingContent, keyboardVisible]);

  const _renderTopContent = useMemo(() => {
    if (!renderTopContent) return null;

    return <View>{renderTopContent}</View>;
  }, [renderTopContent]);

  const _renderTopColor = useMemo(() => {
    if (!topColor) {
      return null;
    }

    return (
      <View style={Styles.backgroundContentcontainer}>
        <View
          style={[
            Styles.backgroundContentcontent,
            { backgroundColor: topColor },
          ]}
        />
      </View>
    );
  }, [topColor]);

  const _renderBackgroundContent = useMemo(() => {
    if (!backgroundContent) {
      return null;
    }

    return (
      <View style={Styles.backgroundContentcontainer}>{backgroundContent}</View>
    );
  }, [backgroundContent]);

  const _renderFullScreenFooter = useMemo(() => {
    if (fullScreen && hasFooter) {
      return (
        <KeyboardAvoidingView
          pointerEvents="none"
          style={{
            flex: 1,
          }}
        />
      );
    }
  }, [fullScreen, hasFooter]);

  const _renderMain = useMemo(() => {
    if (isStatic) {
      return (
        <View
          style={[
            Styles.innerContainerStatic,
            fullScreen
              ? { paddingTop: 0 }
              : { paddingTop: Sizes.screen.padding },
          ]}
        >
          {children}
        </View>
      );
    }

    return (
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={Styles.innerContainer}
        refreshControl={refreshControl || null}
        onScroll={(event: any) => onContentScrolled(event)}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEnd || null}
        scrollEventThrottle={16}
        bounces={!noBounce}
        showsVerticalScrollIndicator={false}
        overScrollMode={noBounce ? 'never' : 'auto'}
      >
        {children}
      </ScrollView>
    );
  }, [
    children,
    fullScreen,
    isStatic,
    noBounce,
    onContentScrolled,
    onScrollBeginDrag,
    onScrollEnd,
    refreshControl,
  ]);

  const RenderMain = useMemo(() => {
    return (
      <SafeAreaView
        style={[
          Styles.container,
          contentContainerStyle,
          {
            backgroundColor: backgroundColor || colors.background,
          },
        ]}
      >
        <StatusBar
          translucent
          barStyle={inverse ? 'dark-content' : 'light-content'}
          backgroundColor={statusBarBackgroundColor ?? 'transparent'}
        />

        {_renderTopColor}

        {_renderBackgroundContent}

        {_renderHeader(false)}
        {_renderTopContent}
        <KeyboardAvoidingView
          style={Styles.keyboardAvoidingContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          {isKeyboardAwareScrollView && Platform.OS === 'ios' ? (
            <KeyboardAwareScrollView
              style={Styles.keyboardAvoidingContainer}
              extraScrollHeight={100}
              scrollEnabled
              enableAutomaticScroll
              onScroll={(event: any) => onContentScrolled(event)}
            >
              {_renderMain}
              {renderKeyboardMargin()}
              {_renderFloatingContent}
              {_renderBottomContent}
            </KeyboardAwareScrollView>
          ) : (
            <>
              {_renderMain}
              {renderKeyboardMargin()}
              {_renderFloatingContent}
              {_renderBottomContent}
            </>
          )}
        </KeyboardAvoidingView>

        {_renderFullScreenFooter}

        <FlashMessage
          ref={captureFlashMessageRef}
          MessageComponent={flashCustomComponent}
          animated
          duration={3000}
          autoHide
        />
      </SafeAreaView>
    );
  }, [
    _renderBackgroundContent,
    _renderBottomContent,
    _renderFloatingContent,
    _renderFullScreenFooter,
    _renderHeader,
    _renderMain,
    _renderTopColor,
    _renderTopContent,
    backgroundColor,
    captureFlashMessageRef,
    colors.background,
    contentContainerStyle,
    flashCustomComponent,
    inverse,
    isKeyboardAwareScrollView,
    onContentScrolled,
    renderKeyboardMargin,
    statusBarBackgroundColor,
  ]);

  return RenderMain;
});

BaseContainer.displayName = 'BaseContainer';
export default BaseContainer;
