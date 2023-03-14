import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    input: {
        width: 175,
        textAlign: 'center',
        borderColor: "grey",
        borderWidth: 1,
    },
    list: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center"
    },
    space: {
        height: 10,
    },
    bottomInput: {
        marginTop: 5,
        fontSize: 18,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "center",
    },
    topInput: {
        marginTop: 25,
        fontSize: 18,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: "center"
    },
    button: {
        padding: 15,
        marginTop: -5,
        width: 180,
    }

});