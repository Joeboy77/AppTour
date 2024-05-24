import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1';
import Home from './components/Home';
import LocationMap from './components/LocationMap';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
