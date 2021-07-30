//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppActivityIndicator
//  AppActivityIndicator // //custom components
//  AppActivityIndicator
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import defaultStylles from '../config/styles'
interface AppActivityIndicatorProps {
  visible?: boolean;
} // typeScript

const AppActivityIndicator: React.FC<AppActivityIndicatorProps> = ({
  visible = false,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={styles.loader}
      />
    </View>
  );
} // AppActivityIndicator component

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "pink",
    // backgroundColor: defaultStylles.colors.translucentRed,
    height: "100%",
    opacity: 0.7,
    width: "100%",
    zIndex: 1,
    // flexGrow: 1,
  },
  loader: {
    flexGrow: 1,
    // alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center",
    width: "200%",
  }
}); // Styles of AppActivityIndicator

export default AppActivityIndicator
// default export of AppActivityIndicator