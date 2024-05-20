import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import city2 from '../assets/city2.jpg';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

const data = [
  { key: 'Attractions' },
  { key: 'Map' },
  { key: 'Hotel' },
  { key: 'Tour' },
  { key: 'Favourite' },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={city2} style={styles.image}>
        <View style={styles.navBar}>
          <Feather name="menu" size={28} color="white" />
          <View style={styles.circ}>
            <FontAwesome5 name="user-alt" size={24} color="#fff" style={styles.profile} />
          </View>
          <Text style={styles.username}>Joseph Achea</Text>
          <Ionicons name="search-sharp" size={28} color="#fff" style={styles.searchIcon} />
        </View>

        <View style={styles.addition}>
          <FlatList
            horizontal
            data={data}
            renderItem={({ item, index }) => (
              <Text
                style={[
                  styles.item,
                  index === 0 && styles.firstItem, // Apply special style to the first item
                ]}
              >
                {item.key}
              </Text>
            )}
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better visibility
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  circ: {
    width: 50,
    height: 50,
    borderRadius: 25, // Adjusted to a fixed radius instead of percentage
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profile: {
    alignSelf: 'center',
  },
  username: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    flex: 1, // Takes up the remaining space
  },
  searchIcon: {
    marginLeft: 'auto',
  },
  addition: {
    marginTop: 120, // Adjust as necessary to position below the nav bar
    paddingHorizontal: 20,
  },
  listContent: {
    alignItems: 'center',
  },
  item: {
    color: 'white',
    fontSize: 18,
    marginRight: 15,
    paddingVertical: 5,
  },
  firstItem: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

