import { View, Text, TextInput, ActivityIndicator, Button, FlatList, StyleSheet, Image } from "react-native"
import { useState } from "react"

export default function Recipes() {
    const [input, setInput] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRecipes = () => {
        setLoading(true)
        setRecipes([])
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data.meals)
                setLoading(false)
            })
            .catch(err => alert(err))
            .catch(err => console.log(err))

    }

    const listSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: "grey" }} />
        )
    }

    return (
        <View style={{ marginTop: 100, marginLeft: 10, marginRight: 10 }}>
            <FlatList
                data={recipes}
                ItemSeparatorComponent={listSeparator}
                renderItem={({ item }) =>
                    <View>
                        <Text style={{ fontSize: 16 }}>{item.strMeal}</Text>
                        <Image style={{ width: 60, height: 60 }} source={{ uri: `${item.strMealThumb}` }} />
                    </View>
                }
            />
            <View>
                <ActivityIndicator size="small" animating={loading} />
                <TextInput
                    style={{ width: 300, borderColor: "grey", borderWidth: 1 }}
                    value={input}
                    onChangeText={text => setInput(text)}
                />
                <View style={styles.space} />
                <Button style={{ width: 80 }} title="Get recipes" onPress={fetchRecipes} />
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    space: {
        height: 15,
    }
});

