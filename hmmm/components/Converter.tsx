import { Picker } from "@react-native-picker/picker";
import { useState } from "react"
import { View, TextInput, Text, Button, StyleSheet, FlatList, ActivityIndicator } from "react-native"

export default function Converter() {
    const [amount, setAmount] = useState<string>("");
    const [currency, setCurrency] = useState<string>("");
    const [convert, setConvert] = useState<number>(0);
    const [values, setValues] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const fetch = require('node-fetch');
    const { Headers } = fetch;
    const myHeaders = new Headers()
    myHeaders.append("apikey", "VmxAfH4T94pJAZMUjYNzE4MawIwr8Y8N");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const convertValue = async () => {
        setLoading(true)
        await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=EUR&base=${currency}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setValues(result)
                console.log(Object.values(result))
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}>

            <ActivityIndicator size="small" animating={loading} />
            <View style={styles.innerContainer}>
                <TextInput
                    style={{ borderBottomColor: "black", borderBottomWidth: 1, width: 70 }}
                    value={amount}
                    onChangeText={text => setAmount(text)}
                />
                <Picker
                    style={{ width: 100 }}
                    selectedValue={currency}
                    onValueChange={(itemValue, itemIndex) =>
                        setCurrency(itemValue)
                    }>
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="USD" value="USD" />
                    <Picker.Item label="GBP" value="GBP" />
                    <Picker.Item label="SEK" value="SEK" />
                </Picker>
            </View>

            <View style={{ paddingLeft: 40, paddingRight: 40 }}>
                <Button title="Convert" onPress={convertValue} />
            </View>

            <FlatList
                data={Object.values(values)}
                renderItem={({ item }) =>
                    <View>
                        <Text style={{ fontSize: 16 }}>{item}</Text>
                    </View>
                }
            />

        </View>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: "center",
        fontSize: 20
    },
    space: {
        height: 15,
    }
});