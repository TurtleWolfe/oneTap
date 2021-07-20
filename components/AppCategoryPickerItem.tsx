//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppCategoryPickerItem
//  AppCategoryPickerItem // //custom components
//  AppCategoryPickerItem
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  // Text,
  View,
} from 'react-native'
import AppIcon from './AppIcon'
import AppText from './AppText'

import defaultStyles from "../config/styles";

interface AppCategoryPickerItemProps {

  // item?: React.ReactNode;
  item?: {
    backgroundColor?: string;
    iconColor?: string
    icon?: string;
    label?: string;
    value?: number;
  };
  onPress?: (event: GestureResponderEvent) => void;
} // typeScript

const AppCategoryPickerItem: React.FC<AppCategoryPickerItemProps> = ({

  item = {
    backgroundColor: defaultStyles.colors.danger,
    iconColor: defaultStyles.colors.darkGrey,
    icon: 'function',
    label: 'appPickerItem',
  },
  // label,
  onPress,
}) => {
  return (
    // null
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>

      {/* <View style={styles.container}> */}

      <AppIcon
        backgroundColor={item.backgroundColor}
        iconColor={item.iconColor}
        name={item.icon}
        size={80}
      />

      <AppText style={styles.label}>
        {item.label}
      </AppText>

      {/* </View> */}
    </TouchableOpacity>

  )
} // AppCategoryPickerItem component

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '33%',
  },
  label: {
    // backgroundColor: 'yellow',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  // textContainer: {
  //   backgroundColor: 'yellow',
  // },
}) // style sheet for AppCategoryPickerItem

export default AppCategoryPickerItem
// default export of AppCategoryPickerItem