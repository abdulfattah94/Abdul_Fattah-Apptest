import { ReactNode } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStactNavigationTypes } from '@routes/index';

type Navigation = NativeStackNavigationProp<RootStactNavigationTypes>;

export interface IProps {
  navigation?: Navigation;
  children?: ReactNode;
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}
