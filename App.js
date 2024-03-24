import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const names = [
    { name: 'angel', lastName: 'Meregildo' },
    { name: 'LEo', lastName: 'Meregildo' },
    { name: 'luna', lastName: 'Meregildo' },
    { name: 'joan', lastName: 'Meregildo' },
    { name: 'lopp', lastName: 'Meregildo' },
    { name: 'nicole', lastName: 'Meregildo' }
  ]


  console.log('arriba');
  return (
    <View style={styles.container}>
      <Text>Hola mundo 2 </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
