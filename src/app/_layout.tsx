

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function _layout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    AmaticSC_400Regular,
    AmaticSC_700Bold
  });
  const days = [...Array(24)].map((val, index) => index + 1)


  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  if(!fontsLoaded && !fontError) {
    return null
  }
  return (
   <Stack />
  )
}