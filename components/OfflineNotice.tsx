import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./Text";
import defaultStyles from '../config/styles'

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  //  if network type is known,
  //  & internet is still not reacheable,
  //  show offline notice
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  //  eles return null;
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.translucent,
    height: 150,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: defaultStyles.colors.highlighter,
  },
});

export default OfflineNotice;
