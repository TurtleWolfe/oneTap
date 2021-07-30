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
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        // activeTintColor: Colors[colorScheme].tint,
        activeTintColor: defaultStyles.colors.highlighter,
        activeBackgroundColor: defaultStyles.colors.primary,
        inactiveTintColor: Colors[colorScheme].tint,
        inactiveBackgroundColor: defaultStyles.colors.secondary,
        // thees are passed to the tabBarIcons and destructured as color
        // looking for a way to pass size to make active tab icon bigger
        labelStyle: {
          fontSize: 13,
          fontFamily: 'CharterBold',
        }
      }}>
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
        options={({ navigation, route }) => ({
          // tabBarButton: () => <NewListingButton
          //   // onPress={() => navigation.navigate('Uploads')}
          //   onPress={() => navigation.navigate(routes.UPLOADS)}
          // // onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          // />,

          tabBarIcon: ({ color }) => <TabBarIcon
            name="camera-sharp"
            color={color} />,
        })}
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
  return <Ionicons
    size={30}
    style={{ marginBottom: -3 }}
    {...props}
  />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={FeedNavigator}
        // options={{ headerTitle: 'Tab One Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.primary,
          },
        }}
      />
    </TabOneStack.Navigator>
  );
} // Home

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        // name="Feed"
        component={FeedNavigator}
        // options={{ headerTitle: 'Tab Two Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.primary,
          },
        }}
      />
    </TabTwoStack.Navigator>
  );
} // Cart

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
            backgroundColor: defaultStyles.colors.primary,
          },
        }}
      />
    </TabThreeStack.Navigator>
  );
} // Uploads

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={AccountNavigator}
        // options={{ headerTitle: 'Tab Four Title' }}
        options={{
          headerTitle: props => <FancyLogo {...props} />,
          headerStyle: {
            backgroundColor: defaultStyles.colors.primary,
          },
        }}
      />
    </TabFourStack.Navigator>
  );
} // Profile

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
            backgroundColor: defaultStyles.colors.primary,
          },
        }}
      />
    </TabFiveStack.Navigator>
  );
} // Settings
