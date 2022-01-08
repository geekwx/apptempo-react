import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import AppStack from './src/Route/AppStack';
import AppLoading from 'expo-app-loading';


// Componente de navegacao


export default function App() {

  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  
  return (
    <>
    <AppStack/>
    </>
  );

}