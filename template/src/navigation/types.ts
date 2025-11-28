import type { Paths } from './paths';
import {} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, S>;

export type RootStackParamList = {
  [Paths.Example]: undefined;
  [Paths.Startup]: undefined;
};
