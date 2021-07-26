import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import colors from "../config/colors";
import defaultStyles from '../config/styles';

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
        <Ionicons
          name="camera-sharp"
          // color={colors.white}
          color={defaultStyles.colors.lightGrey}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: colors.primary,
    backgroundColor: defaultStyles.colors.primary,
    // borderColor: colors.white,
    borderColor: defaultStyles.colors.lightGrey,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;
