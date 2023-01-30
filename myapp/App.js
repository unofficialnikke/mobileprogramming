import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [msg, setMsg] = useState("");

  const buttonPressed = () => {
    Alert.alert("Hello", "You pressed me " + msg)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "green", borderWidth: 1 }}
        value={msg}
        onChangeText={text => setMsg(text)}
      />
      <Button onPress={buttonPressed} color="green" title="Press me" />
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
