import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined; // No params
  Login: undefined; // No params
  Register: undefined; // No params
};

// Extiende el tipo de navegación
export type RootNavigationProp = NavigationProp<RootStackParamList>;
