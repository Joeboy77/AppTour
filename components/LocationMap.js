import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker} from 'react-native-maps';
import * as Location from 'expo-location';

export default function LocationMap() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      seterrorMsg('Permission to access location denied')
      return;
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true})
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    
  }

  useEffect(() => {
    userLocation();
  }, [])
  return (
    <View style={styles.container}>
        <MapView style={styles.maper}
        region={mapRegion}
        >
          <Marker coordinate={mapRegion} title='Marker'/>
        </MapView>
    </View>
  )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    maper: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    opacity: {
      width: '80%',
      height: 50,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'blue',
      borderRadius: 10,
      backgroundColor: 'blue',
      marginTop: -100
    },
    get: {
      textAlign: 'center',
      marginTop: 12,
      fontSize: 19,
      color: '#fff',
      fontWeight: '600',
    }
})