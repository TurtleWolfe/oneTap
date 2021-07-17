//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppPickerItem
//  AppPickerItem // //custom components
//  AppPickerItem
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import AppText from "./AppText";

interface AppPickerItemProps {
  item?: {
    // backgroundColor?: string;
    // icon?: string;
    label?: string;
    value?: number;
  };
  onPress?: (event: GestureResponderEvent) => void;
} // typeScript

const AppPickerItem: React.FC<AppPickerItemProps> = ({

  item = {
    // background: 'black',
    // icon: 'function',
    label: 'appPickerItem',
    value: 0
  },
  onPress = () => console.log('default app Picker Item'),
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
} // app Picker Item component

const styles = StyleSheet.create({
  text: {
    padding: 20,
    // fontSize: 30,
  },
  container: {

  },
  textContainer: {

  },
}) // style sheet for appPicker Item

export default AppPickerItem
// default export of app Picker Item
