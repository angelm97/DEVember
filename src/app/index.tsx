import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';


import DayListItem from '../components/core/DayListItem';
import { Stack } from 'expo-router';



export default function HomePage() {
  const days = [...Array(24)].map((val, index) => index + 1)
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Devember'}} />
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
