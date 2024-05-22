import { View, Text, StyleSheet, ImageBackground, FlatList, Image, ScrollView } from 'react-native';
import React from 'react';
import city2 from '../assets/city2.jpg';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import img1 from '../assets/serve1.jpg'
import img2 from '../assets/serve2.jpg'
import img3 from '../assets/serve3.jpg'
import img4 from '../assets/serve4.jpg'
import img5 from '../assets/serve5.jpg'
import img6 from '../assets/serve6.jpg'

const data = [
  {
    id: '1',
    title: 'Attractions',
  },
  {
    id: '2',
    title: 'Map'
  },
  {
    id: '3',
    title: 'Hotel'
  },
  {
    id: '4',
    title: 'Tour'
  },
];


export default function Home() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <ImageBackground source={city2} style={styles.image}>
          <View style={styles.navBar}>
            <Feather name="menu" size={30} color="white" />
            <View style={styles.circ}>
              <FontAwesome5 name="user-alt" size={24} color="#fff" style={styles.profile} />
            </View>
            <Text style={styles.username}>Joseph Achea</Text>
            <Ionicons name="search-sharp" size={28} color="#fff" style={styles.searchIcon} />
          </View>
          <View style={styles.addition}>
          <FlatList 
          data={data}
          renderItem={({item}) => (
            <View style={styles.listContent}>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          )}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          />
          </View>
          <View style={styles.group1}>
            <View style={styles.mainC}>
              <Image source={img1} style={styles.img1} />
                <Text style={styles.hard}>Hard Tour</Text>
                <Text style={styles.hard2}>Visit</Text>
            </View>
            <View>
              <Image source={img2} style={styles.img2} />
              <Text style={styles.hard}>Inter City</Text>
              <Text style={styles.hard2}>Temple</Text>
            </View>
          </View>
          <View style={styles.group1}>
            <View>
              <Image source={img3} style={styles.img1}/>
                <Text style={styles.hard}>Path Walk</Text>
                <Text style={styles.hard2}>Street</Text>
            </View>
            <View>
              <Image source={img4} style={styles.img3}/>
              <Text style={styles.hard}>Walk Through</Text>
              <Text style={styles.hard2}>Style</Text>
            </View>
          </View>
          <View style={styles.group1}>
            <View>
              <Image source={img5} style={styles.img1}/>
              <Text style={styles.hard}>Under Bridge</Text>
              <Text style={styles.hard2}>View</Text>
            </View>
            <View>
              <Image source={img6} style={styles.img3}/>
              <Text style={styles.hard}>Over View</Text>
              <Text style={styles.hard2}>City</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrroll:{
    backgroundColor: '#000000a0',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000a0',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
    
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 10,

    position: 'absolute',
    top: 0,
    width: '100%',
  },
  circ: {
    width: 40,
    height: 40,
    borderRadius: '50%', // Adjusted to a fixed radius instead of percentage
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
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
    marginTop: 120, 
    paddingHorizontal: 20,
  },
  listContent: {
    alignItems: 'center',
    marginHorizontal: 7,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 30
  },
  
  item: {
    color: '#000',
    fontSize: 18,
    marginRight: 15,
    paddingVertical: 10,
    paddingHorizontal: 17,
    display: 'flex',
    flexDirection: 'row',
    fontWeight: '600',
  },
  group1:{
    display: 'flex',
    flexDirection: 'row'
  },
  img1: {
    width: 170,
    height: 230,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 15,
    borderWidth: 2,
    borderColor: '#fff'
    
  },
  hard: {
    color: '#fff',
    fontSize: 19,
    marginTop: -60,
    marginLeft: 35,
    fontWeight: '600'
  },
  hard2: {
    color: '#fff',
    fontSize: 19,
    marginLeft: 35,
    fontWeight: '600'
  },
  img2: {
    width: 170,
    height: 200,
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: '#fff'
  },
  img3: {
    width: 170,
    height: 230,
    borderRadius: 20,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: '#fff'
  },
  
});

