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
      />
    </View>
  );
} // AppActivityIndicator component

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
}); // Styles of AppActivityIndicator

export default AppActivityIndicator
// default export of AppActivityIndicator