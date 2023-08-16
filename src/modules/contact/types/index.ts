import { ReactNode } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStactNavigationTypes } from '@routes/index';

type Navigation = NativeStackNavigationProp<RootStactNavigationTypes>;

export interface IProps {
  navigation?: Navigation;
  children?: ReactNode;
}

export interface IContact {
  id?: string;
  firstName: string;
  lastName: string;
  age: any;
  photo: string;
}

export interface IErrorOptions {
  firstName: string;
  lastName: string;
  photo: string;
  age: string;
}
