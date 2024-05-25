import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Attraction() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Attraction</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'plum',
        justifyContent: 'center',
        alignItems: 'center'
    }
})