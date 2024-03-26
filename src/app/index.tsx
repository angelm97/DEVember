import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import DayListItem from '../components/core/DayListItem';

SplashScreen.preventAutoHideAsync();

export default function HomePage() {
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
    <View style={styles.container}>

      <FlatList
        data={days}
      
        numColumns={2}
        renderItem={({ item }) => (<DayListItem day={item} />)}
      />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 50
  }

});
