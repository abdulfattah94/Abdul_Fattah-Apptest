import { ExtendedTheme } from '@configs/themes';

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}
