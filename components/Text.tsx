//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppText
//  AppText // //custom components
//  AppText
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  // Platform,
  // StyleSheet,
  Text,
} from 'react-native'

import defaultStyles from "../config/styles";

interface AppTextProps {
  children?: React.ReactNode;
  numberOfLines?: number;
  style?: {};
  otherProps?: {
    // numberOfLines?: number;
  }
} // typeScript

const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text
      style={[defaultStyles.text, style]}
      {...otherProps}
    >
      {children}
    </Text >)
} // appText Component

export default AppText

// const styles = StyleSheet.create({
//   container: {
//   },
//   text: {
//     // backgroundColor: 'yellow',
//     fontSize: 18,
//     // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//     fontFamily: "CharterRegular",
//     // fontWeight: "300", should be a string not a number
//     // textDecorationLine: 'line-through'
//   },
// }) // Style Sheet for appText