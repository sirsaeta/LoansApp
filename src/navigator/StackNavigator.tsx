import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Prestamo } from '../interfaces';
import { DetailsLoansScreen, HomeScreen, ListLoansScreen, LoginScreen, NotificationsScreen, ProfileScreen, SettingsScreen } from '../screens';
import { AuthContext } from '../context/AuthContext';

export type RootStackParams = {
  Home: undefined,
  Notifications: undefined,
  Profile: undefined,
  Settings: undefined,
  ListLoans: undefined,
  DetailsLoans: Prestamo,
  Login: undefined,
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
            backgroundColor: "#121212",
          }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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