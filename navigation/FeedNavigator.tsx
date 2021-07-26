import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
// import FancyLogo from "../components/FancyLogo";
// import defaultStyles from '../config/styles';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
