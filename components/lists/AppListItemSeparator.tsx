//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppListItemSeparator
//  AppListItemSeparator // //custom components
//  AppListItemSeparator
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import defaultStyles from "../../config/styles";

interface AppListItemSeparatorProps {
}

const AppListItemSeparator: React.FC<AppListItemSeparatorProps> = ({
}) => {
  return (
    <View style={styles.separator} />
    // <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

  )
}

const styles = StyleSheet.create({
  separator: {
    width: "97%",
    height: 1,
    // backgroundColor: Palette.mediumGrey,
    backgroundColor: defaultStyles.colors.mediumGrey,
  },
})

export default AppListItemSeparator