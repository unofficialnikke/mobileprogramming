import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
    const [hello, setHello] = useState("hello")

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', hello);
                }}
            />
        </View>
    );
}