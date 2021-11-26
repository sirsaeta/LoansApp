import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen, ProfileScreen, TypesLoansScreen } from '../screens';

export type RootStackParams = {
    Home: undefined,
    Profile: undefined,
    TypesLoans: undefined,
}

const Tab = createMaterialBottomTabNavigator<RootStackParams>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    activeColor={"#fff"}
    barStyle={{ 
        backgroundColor: "#000000",
     }}
    sceneAnimationEnabled
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="TypesLoans" component={TypesLoansScreen} />
    </Tab.Navigator>
  );
}