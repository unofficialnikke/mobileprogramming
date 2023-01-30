import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("Guess a number between 1-100");
  const [counter, setCounter] = useState(0);


  const makeGuess = () => {
    if (number < answer) {
      setResult("Your guess " + number + " is too low")
      setCounter(counter + 1)
    }
    if (number > answer) {
      setResult("Your guess " + number + " is too high")
      setCounter(counter + 1)
    }
    if (number === answer) {
      Alert.alert("You guessed the number in " + (counter + 1) + " guesses")
      setAnswer(Math.floor(Math.random() * 100) + 1)
      setResult("Guess a number between 1-100")
      setCounter(0)
    }
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text>{result}</Text>
      <Text>{answer}</Text>
      <View style={styles.space} />
      <TextInput style={{ width: 50, borderColor: "black", borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={a => setNumber(Number.parseInt(a))} />
      <StatusBar style="auto" />

      <View style={styles.button}>
        <Button onPress={makeGuess} title="Make guess" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,

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
  }
});
