import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const listSeparator = () => {
    return (
      <View style={{ height: 1, backgroundColor: "blue" }}></View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        value={todo}
        onChangeText={text => setTodo(text)}
      />
      <View style={styles.space} />

      <View style={{ flexDirection: 'row' }}>
        <Button
          title="Add"
          onPress={() => setTodos([...todos, todo])}
        />
        <View style={styles.space} />
        <Button
          title="Clear"
          onPress={() => setTodos([])}
        />
      </View>
      <Text style={{ fontSize: 22, color: "blue" }}>Shopping list</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item}</Text>}
        ItemSeparatorComponent={listSeparator}
      />
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
  space: {
    width: 20,
    height: 20,
  }
});
