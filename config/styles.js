import { Platform } from "react-native";

import colors from "./palette";

export default {
  colors,
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
