/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FancyLogo from '../components/FancyLogo'
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
  TabFiveParamList,
} from '../types';
import defaultStyles from '../config/styles';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cart-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Uploads"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="camera-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-sharp" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-sharp" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        // options={{ headerTitle: 'Tab One Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.secondary,
          },
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        // options={{ headerTitle: 'Tab Two Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.secondary,
          },
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        // options={{ headerTitle: 'Tab Three Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.secondary,
          },
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        // options={{ headerTitle: 'Tab Four Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.secondary,
          },
        }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="TabFiveScreen"
        component={TabFiveScreen}
        // options={{ headerTitle: 'Tab Five Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.secondary,
          },
        }}
      />
    </TabFiveStack.Navigator>
  );
}
