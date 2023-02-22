import { useState, useEffect, useRef } from "react"
import { Button, View, TextInput } from "react-native"
import MapView, { Marker } from 'react-native-maps';

import { styles } from "../Style";

export default function Search() {
    const [input, setInput] = useState("");
    const [values, setValues] = useState([60.170541, 24.942206]);
    const [address, setAddress] = useState("");
    const mapRef = useRef(null)

    const getAddress = async () => {
        if (input) {
            await fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=zCWTf85UBDbU4NNhtELW1n4rqpX5O5pj&location=${input}`)
                .then(response => response.json())
                .then(data => {
                    if (data.results[0].locations[0].street === "") {
                        setValues(Object.values(data.results[0].locations[0].displayLatLng))
                        setAddress(data.results[0].locations[0].adminArea5)
                    } else {
                        setValues(Object.values(data.results[0].locations[0].displayLatLng))
                        setAddress(data.results[0].locations[0].street)
                    }
                })
                .catch(err => console.log(err))
        } else {
            alert("The search bar cannot be empty!")
        }
    }

    const changePosition = () => {
        mapRef.current.animateToRegion(({
            latitude: values[0],
            longitude: values[1],
            latitudeDelta: 0.09,
            longitudeDelta: 0.062,
        }), 2 * 1000)
    }

    useEffect(() => {
        changePosition()
    })

    return (
        <View>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                initialRegion={{
                    latitude: values[0],
                    longitude: values[1],
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.062,
                }}
                ref={mapRef}
            >
                <Marker
                    title={address}

                    coordinate={{ latitude: values[0], longitude: values[1] }}
                />
            </MapView>
            <View style={styles.space} />
            <View>
                <TextInput
                    style={styles.inputText}
                    placeholder="Search for address..."
                    value={input}
                    onChangeText={text => setInput(text)}
                ></TextInput>
                <View style={styles.space} />
                <Button
                    style={styles.button}
                    title="SEARCH"
                    onPress={getAddress}
                />

            </View>
        </View >
    )
}

