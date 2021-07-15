//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AppListItemDeleteAction
//  AppListItemDeleteAction // //custom components
//  AppListItemDeleteAction
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  // Pressable,
  // PressableProps,
  StyleSheet,
  // Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

interface AppListItemDeleteActionProps {
  // onPress?: string;
  // onPress?: PressableProps["onPress"];
  onPress?: (event: GestureResponderEvent) => void;
}

const AppListItemDeleteAction: React.FC<AppListItemDeleteActionProps> = ({
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={defaultStyles.colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.danger,
    width: 70,
    // width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: 'yellow',
  },
})

export default AppListItemDeleteAction