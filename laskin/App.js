import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const plus = () => {
    const newResult = number1 + number2
    setResult(newResult)
    setHistory([...history, number1 + " + " + number2 + " = " + newResult])
  }
  const minus = () => {
    const newResult = number1 - number2
    setResult(newResult)
    setHistory([...history, number1 + " - " + number2 + " = " + newResult])
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>Result: {result}</Text>

      <TextInput style={{ width: 150, borderColor: "black", borderWidth: 1 }}
        onChangeText={result => setNumber1(Number.parseInt(result))}
        keyboardType="numeric"
        value={number1}
      />
      <TextInput style={{ width: 150, borderColor: "black", borderWidth: 1 }}
        onChangeText={result => setNumber2(Number.parseInt(result))}
        keyboardType="numeric"
        value={number2}
      />
      <View style={styles.button}>
        <Button onPress={plus} title="+" />
        <View style={styles.space} />
        <Button onPress={minus} title="-" />
      </View>

      <Text style={{ fontSize: 18 }}>History</Text>
      <View style={{ flex: 10 }}>
        <FlatList
          data={history}
          renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item}</Text>}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  space: {
    width: 20,
    height: 20,
  },
  listview: {
    height: 300,
  }

})
  ;
