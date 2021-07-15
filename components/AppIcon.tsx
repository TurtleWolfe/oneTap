//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppIcon
//  AppIcon // //custom components
//  AppIcon
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  StyleSheet,
  // Text,
  View,
} from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
// import Palette from '../constants/palette';

interface AppIconProps {
  // name?: keyof typeof MaterialCommunityIcons;
  // name?: (JSX attribute);
  name?: any;
  backgroundColor?: string;
  iconColor?: string;
  size?: number;
}

const AppIcon: React.FC<AppIconProps> = ({
  name = 'head',
  backgroundColor = defaultStyles.colors.primary,
  iconColor = defaultStyles.colors.secondary,
  size = 40,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.6}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
})

export default AppIcon