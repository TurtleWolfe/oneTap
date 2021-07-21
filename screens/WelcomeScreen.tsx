//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  WelcomeScreen
//  WelcomeScreen // //custom components
//  WelcomeScreen
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AppButton from "../components/Button";

import defaultStyles from '../config/styles';

interface WelcomeScreenProps {
  navigation?: any;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation,
}) => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/images/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/icon.png")}
        />
        <Text style={styles.tagline}>https://Farmasi.com/</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() =>
            // navigation.navigate("Login")
            console.log('tapped Login Button')
          }
        />
        <AppButton
          title="Register"
          color="secondary"
          textColor="darkGrey"
          // color={defaultStyles.colors.primary}
          onPress={() =>
            // navigation.navigate("Register")
            console.log('tapped Register Button')
          }
        />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagline: {
    color: defaultStyles.colors.primary,
    // color: 'dodgerblue',
    fontFamily: 'CharterBoldItalic',
    fontSize: 25,
    fontWeight: "900",
    paddingVertical: 20,
  },
})