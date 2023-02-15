import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [region, setRegion] = useState({
    latitude: 60.2,
    longitude: 24.93,
    latitudeDelta: 0.09,
    longitudeDelta: 0.062,
  })

  return (
    <View>
      <MapView
        style={{ width: "100%", height: "95%" }}
        initialRegion={region}
      >
        <Marker
          title="Haaga-Helia"
          coordinate={{ latitude: 60.2, longitude: 24.93 }}
        />
      </MapView>
      <Button title="Hello" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
