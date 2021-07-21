//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppTextInput
//  AppTextInput // //custom components
//  AppTextInput
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  StyleSheet,
  TextInput,
  // TextInputProps,
  // PointPropType,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

interface AppTextInputProps {
  // iconName?: string;
  // icon?: React.ReactNode;
  // icon?: typeof MaterialCommunityIcons;
  icon?: any;
  numberOfLines?: number;
  onBlur?: () => void;
  onChangeText?: (e: string | React.ChangeEvent<any>) => void;
  placeholder?: string;
  style?: {};
  width?: number | string;
  // otherProps?: any;
  otherProps?: {};
} // typeScript

const AppTextInput: React.FC<AppTextInputProps> = ({
  icon,
  // onBlur,
  // onChangeText,
  style,
  width = '100%',
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        // conditionally render an icon
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.mediumGrey}
          style={styles.icon}
        />
        // conditionally render an icon
      )}
      <TextInput
        clearButtonMode="while-editing"
        placeholderTextColor={defaultStyles.colors.mediumGrey}
        // style={defaultStyles.text}
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  )
} // AppTextInput component

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    alignSelf: "center",
    // padding: 15,
    marginRight: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },
  textInput: {
    color: defaultStyles.colors.darkGrey,
    // fontSize: 20,
    // fontWeight: "bold",
    fontWeight: '600',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: defaultStyles.text.fontFamily,
    // fontFamily: 'CharterBoldItalic',


  },
}) // style sheet for AppTextInput

export default AppTextInput
// default export of AppTextInput