import { DefaultTheme } from "@react-navigation/native";
// import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyles.colors.primary,
    background: defaultStyles.colors.secondary,
  },
};
