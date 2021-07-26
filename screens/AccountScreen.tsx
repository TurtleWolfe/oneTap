//  Colective Minds Inc.
//  TurtleWolfe.com // //custom components
//  AccountScreen
//  AccountScreen // //custom components
//  AccountScreen
//  TurtleWolfe.com // //custom components
//  Colective Minds Inc.

import React from 'react'
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native'
// import AuthContext from '../../auth/context';
// import authStorage from '../../auth/storage';
// import useAuth from '../auth/useAuth';

import AppIcon from "../components/Icon";
import AppScreen from "../components/Screen";
import AppListItem from "../components/lists/AppListItem";
import ListItemSeparator from "../components/lists/AppListItemSeparator";
import defaultStyles from "../config/styles";

interface AccountScreenProps {
  navigation?: any;
}

const menuItems = [
  {
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
    // targetScreen: "my Listings",
    targetScreen: 'Messages',
    title: "My Listings",
  },
  {
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.darkGrey,
    },
    targetScreen: 'Messages',
    title: "Store",
  },
];

const AccountScreen: React.FC<AccountScreenProps> = ({
  navigation,
}) => {
  // const { user, logOut } = useAuth();

  // const handleLogOut = () => {
  //   logOut();
  // }

  return (
    <AppScreen style={styles.screen}>
      <View style={styles.menuContainer}>
        <AppListItem
          // title={user.name}
          title={"Janet Doe"}
          // subTitle={user.email}
          subTitle={'Super@Model.com'}
          image={require("../assets/images/resources/models/2d64ead6511113e4ebd05418acf04dd9.png")}
        // appListImage={
        //   styles.applistImage
        // }
        />
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            // onPress={() => console.log(item.targetScreen)}
            />
          )}
        />
      </View>
      <AppListItem
        title="Log Out"
        IconComponent={
          <AppIcon
            name="logout"
            backgroundColor="#ffe66d"
          // backgroundColor={defaultStyles.colors.mediumGrey}
          />
        }
        // onPress={() => logOut()}
        onPress={() => console.log('log out')}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: defaultStyles.colors.darkGrey,
  },
  menuContainer: {
    // marginVertical: 7,
    marginBottom: 40,
  },
  // applistImage: {
  //   backgroundColor: defaultStyles.colors.black,
  //   borderRadius: 25,
  //   height: 50,
  //   marginLeft: 10,
  //   // margin: 20,
  //   width: 50,
  // },
})

export default AccountScreen