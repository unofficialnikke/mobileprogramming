import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([""]);
    const [hello, setHello] = useState("Jeee")

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
                <View style={styles.space} />

                <Button
                    title="History"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('History', history);
                    }}
                />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 600
    },
    button: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    space: {
        width: 5,
        height: 10,
    }
})
    ;