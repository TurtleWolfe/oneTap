//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppCard
//  AppCard // //custom components
//  AppCard
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  // Image,
  // ImageRequireSource,
  // ImageSourcePropType,
  // ImageURISource,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Image } from "react-native-expo-image-cache";
// import FastImage from 'react-native-fast-image'
import AppText from "./Text";
import defaultStyles from "../config/styles";
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface AppCardProps {
  title?: string;
  subTitle?: string;
  image?: string;
  // image?: ImageURISource;
  // image?: (id: string)=> void;
  imageUrl?: string;
  onPress?: any;
  thumbnailUrl?: string;
} // typeScript AppCardProps

const AppCard: React.FC<AppCardProps> = ({
  title = 'default AppCard title  in "Charter Bold Italic',
  subTitle = 'default AppCard subTitle in "Charter Italic"',
  imageUrl = require('../assets/images/Turtlewolfe.png'),
  onPress = (console.log('press appCard')),
  // thumbnailUrl = require('../assets/images/Turtlewolfe.png'),
  thumbnailUrl,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles.card}>
        <Image
          preview={{ uri: thumbnailUrl }}
          tint='light'
          style={styles.image}
          // source={{ uri: imageUrl }}
          // source={imageUrl}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText
            style={styles.title}
            numberOfLines={1}
          >
            {title}
          </AppText>
          <AppText
            style={styles.subTitle}
            numberOfLines={3}
          >
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
} // AppCard component

const styles = StyleSheet.create({
  card: {
    // backgroundColor: defaultStyles.colors.primary,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
    overflow: "hidden",
    width: "95%",
    // width: 100,
    // flex: 1,
  },
  image: {
    // backgroundColor: 'yellow',
    // backgroundColor: defaultStyles.colors.secondary,
    height: 370,
    width: "100%",
    // width: 100,
    // flex: 1,
  },
  detailsContainer: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: defaultStyles.colors.translucent,
    padding: 20,
  },
  title: {
    color: defaultStyles.colors.highlighter,
    fontFamily: "CharterBoldItalic",
    fontWeight: "900",
    marginBottom: 7,
  },
  subTitle: {
    // fontFamily: "MonoSpace",
    color: defaultStyles.colors.secondary,
    fontFamily: "CharterItalic",
    fontSize: 20,
    fontWeight: "900",
  },
})  // styles for AppCard

export default AppCard