import { Theme } from '@react-navigation/native';

export interface ExtendedTheme extends Theme {
  dark: boolean;
  colors: Theme['colors'] & {
    // below is custom themes
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    placeholderTextColor: string;
    button: string;
    textGray: string;
    white02: string;
    white05: string;
    white08: string;
    white005: string;
    textInverse: string;
    white: string;
    darkBlue: string;
    baseRed: string;
    bgModal: string;
    blue08: string;
    turquoise: string;
  };
}

const MyTheme: ExtendedTheme = {
  dark: true,
  colors: {
    primary: 'rgba(207, 0, 49, 1)',
    background: 'rgba(6, 13, 44, 1)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    placeholderTextColor: 'rgba(167, 168, 170, 1)',
    button: 'rgba(207, 0, 49, 1)',
    textGray: 'rgba(52, 58, 64, 1)',
    white: 'rgb(255, 255, 255)',
    white02: 'rgba(255, 255, 255, 0.2)',
    white05: 'rgba(255, 255, 255, 0.5)',
    white08: 'rgba(255, 255, 255, 0.8)',
    white005: 'rgba(255, 255, 255, 0.05)',
    textInverse: '#DB0000',
    darkBlue: 'rgba(30,34,45,255)',
    baseRed: 'rgba(207, 0, 49, 1)',
    bgModal: '#151B38',
    blue08: 'rgba(6, 13, 44, 0.8)',
    turquoise: 'rgba(34, 195, 145, 1)',
  },
};

export default MyTheme;
