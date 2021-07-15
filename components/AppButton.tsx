//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppButton
//  AppButton // //custom components
//  AppButton
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  // View,
} from 'react-native'
import defaultStyles from "../config/styles";

interface AppButtonProps {
  // color?: keyof typeof defaultStyles;
  color?: string;
  textColor?: string;
  title?: string;
  onPress?: any;
  // onPress?: (event: GestureResponderEvent) => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  color = 'primary',
  textColor = 'lightGrey',
  title = 'default App Button',
  onPress = () => console.log('default AppButton'),
}) => {
  return (
    // <View style={styles.container}>
    <TouchableOpacity
      style={[styles.button, {
        backgroundColor: defaultStyles.colors[color]
      }]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, {
          color: defaultStyles.colors[textColor]
        }]}>
        {title}
      </Text>
    </TouchableOpacity>
    // </View> 
  )
}

const styles = StyleSheet.create({
  // container: {
  //   // backgroundColor: 'yellow',
  // },
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: defaultStyles.colors.lightGrey,
    fontSize: 20,
    // textTransform: "uppercase",
    // fontWeight: "bold",
    fontWeight: "900",
    fontFamily: "CharterBoldItalic",
    // fontFamily: defaultStyles.text.fontFamily,
  },
})

export default AppButton