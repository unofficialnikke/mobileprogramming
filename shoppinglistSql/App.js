import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Shoppinglist from './components/Shoppinglist';
import { styles } from './Style';

export default function App() {
  return (
    <View style={styles.container}>
      <Shoppinglist />
    </View>
  );
}


