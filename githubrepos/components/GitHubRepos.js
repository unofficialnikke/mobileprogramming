import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, ActivityIndicator } from "react-native";

export default function GitHubRepos() {
    const [repositories, setRepositories] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchRepos = () => {
        setLoading(true)
        fetch(`https://api.github.com/search/repositories?q=${keyword}`)
            .then(response => response.json())
            .then(data => {
                setRepositories(data.items)
                setLoading(false)
            })
            .catch(err => alert(err))
    }

    const listSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: "grey" }} />
        );
    }

    return (
        <View style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}>
            <ActivityIndicator size="small" animating={loading} />
            <TextInput
                style={{ width: 300, borderColor: "grey", borderWidth: 1 }}
                value={keyword}
                onChangeText={text => setKeyword(text)}
            />
            <Button title="SEARCH" onPress={fetchRepos} />
            <FlatList
                data={repositories}
                ItemSeparatorComponent={listSeparator}
                renderItem={({ item }) =>
                    <View>
                        <Text style={{ fontSize: 20 }}>{item.full_name}</Text>
                        <Text>{item.description}</Text>

                    </View>
                }
            />
        </View>
    );
}