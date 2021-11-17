import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Prestamo } from '../interfaces';
import { DetailsLoansScreen, ListLoansScreen, LoginScreen, NotificationsScreen, SettingsScreen } from '../screens';
import { AuthContext } from '../context/AuthContext';
import { BottomTabNavigator } from './BottomTabNavigator';

export type RootStackParams = {
  Home: undefined,
  Notifications: undefined,
  Profile: undefined,
  Settings: undefined,
  ListLoans: undefined,
  DetailsLoans: Prestamo,
  Login: undefined,
  BottomTabNavigator: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const context = useContext(AuthContext)
  const { authState } = context;
  return (
    (authState.accessToken) ?
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          cardStyle: {
            backgroundColor: "#121212"
          }
        }}
      >
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ListLoans" component={ListLoansScreen} />
        <Stack.Screen name="DetailsLoans" component={DetailsLoansScreen} />
      </Stack.Navigator>
      :
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          cardStyle: {
            backgroundColor: "#121212",
          }
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
}