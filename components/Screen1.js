import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import image1 from '../assets/city.jpg'
export default function Screen1() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image1} style={styles.image}>
        <View style={styles.view}>
            <Text style={styles.text1}>Tour  Around the World</Text>
            <Text style={styles.text2}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Aliquam sollicitudin sagittis justo, ut tristique quam rutrum quis. </Text>
            <TouchableOpacity style={styles.touch}>
             <Text style={styles.text3}>Next</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    view: {
        marginTop: 500,
        backgroundColor: '#000000a0',
        paddingBottom: 120,
    },
    text1: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    text2: {
        color: '#fff',
        fontSize: 15,
        paddingBottom: 40,
        paddingRight: 20,
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '500'
    },
    touch: {
        
    },
    text3: {
        color: 'red',
        fontWeight: '500',
        textAlign: 'right',
        marginRight: 30,
        marginTop: 120,
        fontSize: 17
    }
})