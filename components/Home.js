import { View, Text, StyleSheet, ImageBackground, Modal, FlatList, Image, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useState } from 'react';
import city2 from '../assets/city2.jpg';
import { Feather, FontAwesome5, FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import img1 from '../assets/serve1.jpg'
import img2 from '../assets/serve2.jpg'
import img3 from '../assets/serve3.jpg'
import img4 from '../assets/serve4.jpg'
import img5 from '../assets/serve5.jpg'
import img6 from '../assets/serve6.jpg'

export default function Home() {
  const data = [
    { id: '1', title: 'Attractions' },
    { id: '2', title: 'Map' },
    { id: '3', title: 'Hotel' },
    { id: '4', title: 'Tour' },
  ];

  const modalData = [
    { id: '1', image: img1, title: 'Hard Tour Visit', description: 'Experience the thrill of the Hard Tour, where adventure meets culture in an unforgettable journey. From breathtaking landscapes to vibrant cityscapes, immerse yourself in the unique blend of natural beauty and urban charm.' },
    { id: '2', image: img2, title: 'Inter City Temple', description: 'Discover the serene beauty of the Inter City Temple. A place of peace and spirituality, offering a unique glimpse into the ancient traditions and modern vibrancy of the city.' },
    { id: '3', image: img3, title: 'Path Walk Street', description: 'Take a stroll down Path Walk Street, a bustling hub of activity where you can experience the local culture and lively atmosphere of the city.' },
    { id: '4', image: img4, title: 'Walk Through Style', description: 'Experience the chic and modern ambiance of Walk Through Style, where fashion and design meet in a stunning display of contemporary urban living.' },
    { id: '5', image: img5, title: 'Under Bridge View', description: 'Explore the unique perspective of Under Bridge View, a hidden gem offering stunning views and a tranquil escape from the city’s hustle and bustle.' },
    { id: '6', image: img6, title: 'Over View City', description: 'Get a panoramic view of the city from Over View City. A breathtaking vantage point that offers a stunning look at the urban landscape.' },
  ];

  // Modal Function
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(null);

  //Handling closing and opening of modal
  const handlePress = (id) => {
    const selectedData = modalData.find(item => item.id === id);
    setCurrentModalData(selectedData);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

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
              <TouchableOpacity onPress={() => handlePress('1')}>
                <Image source={img1} style={styles.img1} />
              </TouchableOpacity>
              <Text style={styles.hard}>Hard Tour</Text>
              <Text style={styles.hard2}>Visit</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => handlePress('2')}>
                <Image source={img2} style={styles.img2} />
              </TouchableOpacity>
              <Text style={styles.hard}>Inter City</Text>
              <Text style={styles.hard2}>Temple</Text>
            </View>
          </View>
          <View style={styles.group1}>
            <View>
              <TouchableOpacity onPress={() => handlePress('3')}>
                <Image source={img3} style={styles.img1}/>
              </TouchableOpacity>
              <Text style={styles.hard}>Path Walk</Text>
              <Text style={styles.hard2}>Street</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => handlePress('4')}>
                <Image source={img4} style={styles.img3}/>
              </TouchableOpacity>
              <Text style={styles.hard}>Walk Through</Text>
              <Text style={styles.hard2}>Style</Text>
            </View>
          </View>
          <View style={styles.group1}>
            <View>
              <TouchableOpacity onPress={() => handlePress('5')}>
                <Image source={img5} style={styles.img1}/>
              </TouchableOpacity>
              <Text style={styles.hard}>Under Bridge</Text>
              <Text style={styles.hard2}>View</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => handlePress('6')}>
                <Image source={img6} style={styles.img3}/>
              </TouchableOpacity>
              <Text style={styles.hard}>Over View</Text>
              <Text style={styles.hard2}>City</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      
      <Modal visible={modalVisible} onRequestClose={closeModal}
        animationType='slide'
        presentationStyle='formSheet'
      >
        {currentModalData && (
          <View style={styles.modalContent}>
            <Image source={currentModalData.image} style={styles.modal1}/>
            <View style={styles.mainContent}>
              <Text style={styles.modText1}>{currentModalData.title}</Text>
              <Text style={styles.modPara}>{currentModalData.description}</Text>
              <View style={styles.button}>
                <View style={styles.but1}>
                  <Entypo name="star" size={25} color="black" style={{marginTop: 7, marginLeft: 8}} />
                </View>
                <View style={styles.but1}>
                  <Entypo name="share" size={25} style={{marginTop: 7, marginLeft: 7}}color="black" />
                </View>
                <View style={styles.but1}>
                  <FontAwesome name="bookmark" size={25} color="black" style={{marginTop: 8, marginLeft: 11}}/>
                </View>
              </View>
              <Text style={styles.explore}>Explore More</Text>
              <View>
                <TouchableOpacity style={styles.pressable}>
                  <Text style={styles.history}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pressable}>
                  <Text style={styles.history}>Attractions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pressable}>
                  <Text style={styles.history}>Significance</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Modal>
      
    </ScrollView>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scroll:{
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
    borderRadius: 20, 
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
    flex: 1, 
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
  modalContent: {
    borderRadius: 30,
    alignItems: 'center',
    
  },
  modal1: {
    height: 350,
    marginTop: -20,
    objectFit: 'cover'
  },
  mainContent: {
    backgroundColor: '#000000e0',
    height: height * 0.9,
    width: '100%',
    paddingLeft: 20,
    paddingTop: 30,
  },
  modText1: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '700',
  },
  modPara: {
    color: "#fff",
    fontSize: 15,
    paddingTop: 15,
    lineHeight: 22,
    textAlign: 'left',
  }, 
  button: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    marginLeft: -15,
  },
  but1: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: '50%'
  },
  explore: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
    paddingTop: 20
  },
  pressable: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cacaca',
    borderRadius: 30,
    marginTop: 15
  },
  history: {
    textAlign: 'center',
    marginTop: 14,
    color: '#fff',
    fontSize: 19,
    fontWeight: '400'
  }
});
