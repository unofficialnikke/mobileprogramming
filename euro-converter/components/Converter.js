import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react"
import { View, TextInput, Text, Button, StyleSheet, FlatList, ActivityIndicator, Item } from "react-native"

export default function Converter() {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("");
    const [convert, setConvert] = useState(0);
    const [values, setValues] = useState([]);
    const [rightValue, setRightValue] = useState([]);
    const [loading, setLoading] = useState(false);

    const myHeaders = new Headers()
    myHeaders.append("apikey", "VmxAfH4T94pJAZMUjYNzE4MawIwr8Y8N");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const convertValue = () => {
        setLoading(true)
        fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=EUR&base=${currency}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setValues(Object.values(data));
                console.log(data)
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if (!values.empty) {
            setRightValue(values.slice(-1).pop());
            console.log(Object.values(rightValue));
        }
    }, [])

    return (
        <View style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}>

            <View>
                <Text style={{ fontSize: 20, textAlign: "center" }}>{values + ", "} €</Text>
            </View>

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
        </View >
    )
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