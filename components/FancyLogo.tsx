import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const FancyLogo = ({ }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require('../assets/images/logo.png')}
      />
    </View>
  )
}

export default FancyLogo

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    // width: 150,
    // height: 50,
  },
  imageContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 170,
    height: 50,
  },
})