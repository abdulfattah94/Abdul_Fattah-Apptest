import { ReactNode } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStactNavigationTypes } from '@routes/index';

type Navigation = NativeStackNavigationProp<RootStactNavigationTypes>;

export interface IProps {
  navigation?: Navigation;
  children?: ReactNode;
}
