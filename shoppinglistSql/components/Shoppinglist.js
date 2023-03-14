import { Text, TextInput, View, Button, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../Style';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("shoppinglistdb.db")

export default function Shoppinglist() {
    const [product, setProduct] = useState("");
    const [amount, setAmount] = useState("");
    const [shoppingList, setShoppinglist] = useState([]);

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql("create table if not exists shopping (id integer primary key not null, amount text, product text);");
        }, null, updateList);
    }, []);

    const saveItem = () => {
        db.transaction(tx => {
            tx.executeSql("insert into shopping (amount, product) values (?, ?);",
                [amount, product]);
        }, null, updateList)
    }

    const updateList = () => {
        db.transaction(tx => {
            tx.executeSql("select * from shopping;", [], (_, { rows }) =>
                setShoppinglist(rows._array)
            )
        }, null, null)
    }

    const deleteItem = (id) => {
        db.transaction(
            tx => {
                tx.executeSql("delete from shopping where id = ?;", [id]);
            }, null, updateList)
    }

    const listSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: "grey" }} />
        );
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, textAlign: "center" }}>Shopping list</Text>
            <View>
                <TextInput style={styles.topInput}
                    onChangeText={p => setProduct(p)}
                    placeholder="new product.."
                    value={product}
                >
                </TextInput>
                <TextInput style={styles.bottomInput}
                    onChangeText={a => setAmount(a)}
                    placeholder="add amount.."
                    value={amount}
                >
                </TextInput>
                <View style={styles.space}></View>

            </View>
            <View style={styles.button}>
                <Button
                    onPress={saveItem}
                    title="Add product"
                /></View>

            <FlatList
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={listSeparator}
                renderItem={({ item }) =>
                    <View style={styles.list}>
                        <Text style={{ fontSize: 20, marginTop: 7, marginBottom: 7 }}>{item.product}, {item.amount}</Text>
                        <Text style={{ fontSize: 20, color: "blue" }} onPress={() => deleteItem(item.id)}>  Bought</Text>
                    </View>
                }
                data={shoppingList}
            />
        </View >
    )
}