//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  ViewImageScreen
//  ViewImageScreen // //custom components
//  ViewImageScreen
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  Image,
  StyleSheet,
  View,
} from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from '../config/styles';

interface ViewImageScreenProps {
  // interface & arguments //
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({
  // interface & arguments //
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          // color="white"
          color={defaultStyles.colors.darkGrey}
          size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          // color="white"
          color={defaultStyles.colors.darkGrey}
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/images/chair.jpg")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.primary,
    height: 50,
    justifyContent: 'center',
    left: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
    width: "100%",
  },
  deleteIcon: {
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.secondary,
    height: 50,
    justifyContent: 'center',
    position: "absolute",
    right: 30,
    top: 40,
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
})

export default ViewImageScreen