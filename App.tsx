import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, DefaultTheme as DefaultNavigation } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthContext';
import { GradientProvider } from './src/context/GradientContext';
import { Provider } from 'react-redux';
import store from './src/store';


export const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      <GradientProvider>
        {children}
      </GradientProvider>
    </AuthProvider>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'aqua',
    accent: 'yellow',
  },
};

const MyTheme = {
  ...DefaultNavigation,
  colors: {
    ...DefaultNavigation.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(25, 25, 25)',
  },
};

const FONT_DEFAULT = 'Vollkorn';

export default function App() {

  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/static/Vollkorn-Regular.ttf'),
    'Vollkorn-Bold': require('./assets/fonts/static/Vollkorn-Bold.ttf'),
  });

  if (!loaded) return <AppLoading />;
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme} >
        <StatusBar hidden={false} translucent={false} style="inverted" />
        <PaperProvider theme={theme}>
          <AppState>
            <StackNavigator />
          </AppState>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}