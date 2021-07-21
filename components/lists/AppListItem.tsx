//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppListItem
//  AppListItem // //custom components
//  AppListItem
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  Animated,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  // Text, replaced with AppText
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import { TouchableOpacity } from 'react-native-gesture-handler';

import AppText from "../Text";
import AppDeleteAction from "./AppListItemDeleteAction";

import defaultStyles from "../../config/styles";

interface AppListItemProps {
  title?: string;
  subTitle?: string;
  showChevron?: boolean;
  swipeable?: boolean;

  // image?: string;
  image?: ImageSourcePropType;

  IconComponent?: any;
  // IconComponent?: React.ReactNode;
  // IconComponet?: React.ComponentClass<any>;
  // IconComponent?: typeof MaterialCommunityIcons;


  // appListImage?: {};
  appListImage?: {
    // uri: string;
    // width: number;
    // height: number;
  };

  // appListItem?: {};
  appListItem?: {
    // uri: string;
    // width: number;
    // height: number;
  };

  onPress?: (event: GestureResponderEvent) => void;

  renderRightActions?: (
    (progressAnimatedValue: Animated.AnimatedInterpolation,
      dragAnimatedValue: Animated.AnimatedInterpolation) => React.ReactNode
  );
  // renderRightActions?: (props: {
  //   progressAnimatedValue: Animated.AnimatedInterpolation;
  //   dragAnimatedValue: Animated.AnimatedInterpolation;
  // }) => React.ReactNode;

} // typeScript

const AppListItem: React.FC<AppListItemProps> = ({
  title,
  subTitle,
  showChevron = true,
  swipeable = false,
  image,
  IconComponent,
  appListImage,
  appListItem,
  onPress = () => console.log("appListItem"),
  renderRightActions = () => (
    <AppDeleteAction onPress={() => console.log("Render Right Actions")} />
  )
}) => {
  return (
    (!swipeable) ? (//  //       if not swipeable
      <TouchableHighlight
        underlayColor={defaultStyles.colors.darkGrey}
        onPress={onPress}>
        <View style={[styles.container, appListItem]}>
          {IconComponent}
          {image && //conditional rendering if image exists
            <Image
              style={[styles.image, appListImage]}
              source={image}
            />}
          <View style={styles.detailsContainer}>
            {title && //conditional rendering if title exists
              <AppText
                style={styles.title}
                numberOfLines={1}
              >
                {title}
              </AppText>}
            {subTitle &&  //conditional rendering if subTitle exists
              <AppText
                style={styles.subTitle}
                numberOfLines={3}
              >
                {subTitle}
              </AppText>}
          </View>
          {/* {showChevron && <MaterialCommunityIcons
            name={'chevron-right'}
            color={defaultStyles.colors.highlighter}
            size={55}
          />} */}
        </View>
      </TouchableHighlight>
    ) : (//                     // if swipeable
      <Swipeable
        renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={defaultStyles.colors.darkGrey}
          onPress={onPress}>
          <View style={[styles.container, appListItem]}>
            {IconComponent}
            {image && //conditional rendering if image exists
              <Image
                style={[styles.image, appListImage]}
                source={image}
              />}
            <View style={styles.detailsContainer}>
              {title && //conditional rendering if title exists
                <AppText
                  style={styles.title}
                  numberOfLines={1}
                >
                  {title}
                </AppText>}
              {subTitle &&  //conditional rendering if subTitle exists
                <AppText
                  style={styles.subTitle}
                  numberOfLines={3}
                >
                  {subTitle}
                </AppText>}
            </View>
            {showChevron && <MaterialCommunityIcons
              name={'chevron-right'}
              color={defaultStyles.colors.highlighter}
              size={55}
            />}
          </View>
        </TouchableHighlight>
      </Swipeable>
    )
  )
}
// App List Item Component

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.secondary,
    // paddingLeft: 10,
    padding: 15,
    width: '100%',
  },
  detailsContainer: {
    // contains Title and SubTitle
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    // marginRight: 10,
  },
  image: {
    backgroundColor: defaultStyles.colors.secondary,
    borderRadius: 35,
    height: 70,
    // marginRight: 10,
    width: 70,
    // width: size,
    // height: size,
    // borderRadius: size / 2,
    // backgroundColor,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    color: defaultStyles.colors.black,
    fontFamily: 'CharterBoldItalic',
    // fontSize: 20,
    fontWeight: '900',
    // marginVertical: 10,
  },
  subTitle: {
    color: defaultStyles.colors.darkGrey,
    fontFamily: 'CharterBoldItalic',
    // fontSize: 25,
    fontWeight: '900',
    // marginVertical: 10,
  },
}) // Style Sheet for List Item

export default AppListItem