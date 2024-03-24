import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

export default function App() {
  const days = [... Array(24)].map((val, index) => index +1)

  return (
    <View style={styles.container}>

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
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
