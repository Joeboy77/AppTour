import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1';
import Home from './components/Home';
import LocationMap from './components/LocationMap';
import Attraction from './components/Attraction';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Attraction' component={Attraction}/>
      </Drawer.Navigator>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
