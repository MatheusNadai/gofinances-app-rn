
import React from 'react';
import 'react-native-gesture-handler'
import 'intl'
import 'intl/locale-data/jsonp/en'
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import theme from './src/global/theme';



import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar 
         barStyle="light-content"
         backgroundColor="transparent"
         translucent
        />
        <AuthProvider>
          <AppRoutes/>
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

