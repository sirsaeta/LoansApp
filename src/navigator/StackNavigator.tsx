import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/Home';
import { Notifications } from '../screen/Notifications';
import { Profile } from '../screen/Profile';
import { Settings } from '../screen/Settings';

export type RootStackParams = {
    Home:           undefined,
    Notifications:  undefined,
    Profile:        undefined,
    Settings:       undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      header:()=>null,
      cardStyle: {
          backgroundColor:"#121212",
      }
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}