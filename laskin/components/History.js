import * as React from 'react';
import { Text, View, FlatList } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    const history = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>History</Text>
            <View style={{ flex: 10 }}>
                <FlatList
                    data={history}
                    renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item}</Text>}
                />
            </View>
        </View>
    );
}
