import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1';
import Home from './components/Home';
import LocationMap from './components/LocationMap';
import Attraction from './components/Attraction';


export default function App() {
  return (
    <View style={styles.container}>
      <LocationMap />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
