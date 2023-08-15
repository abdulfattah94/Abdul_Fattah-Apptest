import { StyleProp, ViewStyle } from 'react-native';

interface IPropsBase {
  subtitle?: string;
  statusBarBackgroundColor?: string;
  bottomContent?: any;
  floatingContent?: any;
  children?: any;
  contentContainerStyle?: StyleProp<ViewStyle>;
  hasFooter?: boolean;
  inverse?: boolean;
  topColor?: string;
  style?: StyleProp<ViewStyle>;
  backgroundContent?: any;
  noBounce?: boolean;
  isStatic?: boolean;
  fullScreen?: boolean;
  onScrollBeginDrag?: (ScrollViewProps: any) => void;
  onScrollEndDrag?: () => void;
  onScroll?: (val: number) => void;
  onScrollAnimate?: (val: any) => void;
  persistScrollTitle?: string;
  persistScrollOffset?: number;
  isModal?: boolean;
  floatingKeyboard?: boolean;
  title?: string;
  floatingHeader?: boolean | false;
  onBackPress?: () => void;
  onClosePress?: () => void;
  rightHeaderRender?: any;
  centerHeaderRender?: any;
  headerBackgroundColor?: string;
  backgroundColor?: string;
  ref?: any;
  refreshControl?: any;
  renderTopContent?: any;
  isHeaderGradient?: boolean | false;
  removeBackButton?: boolean | false;
  isKeyboardAwareScrollView?: boolean | false;
  flashCustomComponent?: any;
  isCircleBack?: boolean;
  offsetY?: number;
  isScrollToOffsetY?: boolean;
}

export type IFlashMessage = {
  message: string;
  description?: string;
  type: 'success' | 'info' | 'warning' | 'danger';
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  backgroundColor?: string;
  color?: string; // text color
  hideStatusBar?: boolean | false;
  icon?: any;
  onPress?: () => void;
  duration?: number;
  autoHide?: boolean;
  floating?: boolean;
};

type IPropsFlashShowMessage = {
  showMessage: (_val: IFlashMessage) => void;
  scrollToIndex: any;
};

export type { IPropsBase, IPropsFlashShowMessage };
